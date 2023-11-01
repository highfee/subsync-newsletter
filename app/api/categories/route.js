import { NextResponse } from "next/server";
import Categories from "@/models/categories";
import dbConnect from "@/lib/dbConnect";
import Mails from "@/models/mail";

export const GET = async (request, { params }) => {
  await dbConnect();

  try {
    let randomCategory = await Categories.aggregate([{ $sample: { size: 1 } }]);
    let randomCategoryMail = await Mails.find({
      category: randomCategory[0].name,
    });
    return NextResponse.json({
      res: randomCategory[0],
      mails: randomCategoryMail,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
};
