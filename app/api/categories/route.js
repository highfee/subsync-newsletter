import { NextResponse } from "next/server";
import Categories from "@/models/categories";
import dbConnect from "@/lib/dbConnect";
import Mails from "@/models/mail";
import Brands from "@/models/brands";

export const GET = async (request, { params }) => {
  await dbConnect();

  try {
    let randomCategory = await Categories.aggregate([{ $sample: { size: 1 } }]);
    let randomBrandsCategory = await Brands.find({
      categories: { $elemMatch: { $eq: randomCategory[0].name } },
    }).limit(8);
    return NextResponse.json({
      category: randomCategory[0],
      brands: randomBrandsCategory,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
};
