import User from "@/models/user";
import Mail from "@/models/mail";
import Categories from "@/models/categories";
import { getServerSession } from "next-auth/next";
import { options } from "../../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import { verifyJwt } from "@/lib/jwt";

export const GET = async () => {
  const user = await getServerSession(options);
  const userId = user?.user._id;
  const accessToken = user?.user.accessToken;
  dbConnect();
  try {
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

    const randomCategories = await Categories.aggregate([
      {
        $match: {
          _id: { $in: user.followedCategories },
        },
      },
      {
        $sample: { size: 10 },
      },
    ]);

    let categoryNames = randomCategories.map((item) => item.name);

    const randomMailsByCategory = {};

    for (const category of categoryNames) {
      const randomMails = await Mail.aggregate([
        { $match: { category: { $regex: new RegExp(category, "i") } } },
        { $sample: { size: 10 } },
      ]);

      randomMailsByCategory[category] = randomMails;
    }

    return new Response(
      JSON.stringify({ randomMailsByCategory, categoryNames }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
