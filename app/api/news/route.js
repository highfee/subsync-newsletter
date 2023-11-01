import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Mails from "@/models/mail";

export async function GET() {
  await dbConnect();

  try {
    const mails = await Mails.find().limit(20);
    return NextResponse.json({ mails: mails });
  } catch (error) {
    return NextResponse.json({ message: `something went wrong: ${error}` });
  }
}
