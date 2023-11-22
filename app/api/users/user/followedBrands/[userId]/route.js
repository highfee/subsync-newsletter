import { options } from "@/app/api/auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import { verifyJwt } from "@/lib/jwt";
import Brands from "@/models/brands";
import User from "@/models/user";

import { getServerSession } from "next-auth/next";

export async function GET() {
  const user = await getServerSession(options);
  const userId = user?.user._id;
  const accessToken = user?.user.accessToken;
  dbConnect();

  try {
    // const accessToken = request.headers.get("authorization");
    if (!accessToken || !verifyJwt(accessToken)) {
      return new Response(
        JSON.stringify({
          error: "unauthorized",
        }),
        {
          status: 401,
        }
      );
    }
    const user = await User.findById(userId);

    const randomBrands = await Brands.aggregate([
      {
        $match: {
          _id: { $in: user.followedBrands },
        },
      },
      {
        $sample: { size: 10 },
      },
    ]);

    return new Response(JSON.stringify(randomBrands), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
