import dbConnect from "@/lib/dbConnect";
import { verifyJwt } from "@/lib/jwt";

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

    const { userId, categoryId } = body;

    if (Array.isArray(categoryId)) {
      await User.findByIdAndUpdate(
        userId,
        {
          $addToSet: { followedCategories: { $each: categoryId } },
        },
        { new: true }
      );
    }

    const user = await User.findByIdAndUpdate(
      userId,
      {
        $addToSet: { followedCategories: categoryId },
      },
      { new: true }
    );

    const { password, ...res } = user._doc;
    return new Response(JSON.stringify(res));
  } catch (error) {
    return;
  }
}
