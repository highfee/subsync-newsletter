import { NextResponse } from "next/server";
import Mail from "@/models/mail";
import Brands from "@/models/brands";
import dbConnect from "@/lib/dbConnect";

export const GET = async (request, { params }) => {
  await dbConnect();

  try {
    let randomBrands = await Brands.aggregate([{ $sample: { size: 10 } }]);

    return NextResponse.json({ res: randomBrands });
  } catch (error) {
    return NextResponse.json(error);
  }
};
