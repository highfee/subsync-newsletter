import dbConnect from "@/lib/dbConnect";
import { verifyJwt } from "@/lib/jwt";
import Brands from "@/models/brands";
import User from "@/models/user";

export async function POST(request) {
  await dbConnect();
  const body = await request.json();

  try {
    const accessToken = request.headers.get("authorization");
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

    const { userId, brandId } = body;

    const user = await User.findByIdAndUpdate(
      userId,
      {
        $addToSet: { followedBrands: brandId },
      },
      { new: true }
    );

    const { password, ...res } = user._doc;
    return new Response(JSON.stringify(res));
  } catch (error) {
    return;
  }
}
