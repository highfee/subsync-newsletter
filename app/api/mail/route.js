import { NextResponse } from "next/server";
import { google } from "googleapis";
import dbConnect from "@/lib/dbConnect";
import Mails from "@/models/mail";
import Brands from "@/models/brands";

import {
  getSender,
  decodeData,
  getMessageCategory,
  fetchMails,
  fetchSenderLogo2,
} from "@/app/api/mail/functions";

export async function GET() {
  await dbConnect();

  try {
    const { messageIds, gmail } = await fetchMails();

    const messages = [];
    // for (const messageId of messageIds) {
    //   const message = await gmail.users.messages.get({
    //     userId: "me",
    //     id: messageId,
    //     format: "full", // Request the full message content
    //   });
    //   messages.push(message.data);
    // }

    for (const messageId of messageIds) {
      const message = await gmail.users.messages.get({
        userId: "me",
        id: messageId,
        format: "full",
      });

      const mailExist = await Mails.findById(message.data.id);

      if (!mailExist) {
        const mail = new Mails({
          _id: message.data.id,
          snippet: message.data.snippet,
          sender: getSender(
            message.data.payload.headers.find((item) => item.name == "From")
              .value
          ),
          subject: message.data.payload.headers.find(
            (item) => item.name == "Subject"
          ).value,
          data: decodeData(message.data),
          category: (
            await getMessageCategory(
              message.data.snippet,
              getSender(
                message.data.payload.headers.find((item) => item.name == "From")
                  .value
              )
            )
          )
            .split(",")
            .map((item) => item.trim()),
        });

        await mail.save();
        const brandExist = await Brands.findOne({
          name: getSender(
            message.data.payload.headers.find((item) => item.name == "From")
              .value
          ),
        });
        if (!brandExist) {
          const brand = new Brands({
            name: getSender(
              message.data.payload.headers.find((item) => item.name == "From")
                .value
            ),
            logoUrl: await fetchSenderLogo2(message.data),
          });
          await brand.save();
        }
        messages.push(mail);
      }
    }

    return NextResponse.json({
      res: messages,
      // res: image,
    });
  } catch (error) {
    return NextResponse.json({ message: `something went wrong: ${error}` });
  }
}
