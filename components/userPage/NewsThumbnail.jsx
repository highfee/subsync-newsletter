"use client";
// import dynamic from "next/dynamic";

import { Button } from "../ui";
import Link from "next/link";
import { getImageFromMailHTML } from "@/lib/utils";
import Image from "next/image";

// const Carousel = dynamic(() => import("@/components/utils/carousel"), {
//   ssr: false,
// });

import Carousel from "../utils/carousel";
const NewsThumbnail = ({ data }) => {
  const imageLoader = (src) => {
    return src;
  };

  const items = data?.map(async (mail) => {
    const url = getImageFromMailHTML(mail?.data);
    return (
      <div
        key={mail._id}
        className="w-[250px] h-[400px] shadow-xl p-3 bg-white flex flex-col justify-between"
      >
        <div>
          <div className="mb-1 flex gap-4 items-center text-gray-700 text-sm">
            <p className=" max-w-[120px] whitespace-nowrap text-ellipsis overflow-hidden">
              {mail.sender}
            </p>
            <p>{"time"}</p>
          </div>
          <p className="text-base line-clamp-2 font-semibold mb-1 leading-tight">
            {mail.subject}
          </p>
          <p className="text-sm line-clamp-1 mb-3 leading-tight">
            {mail.snippet}
          </p>
        </div>
        <div className="h-[280px] w-full">
          <Image
            loader={() => imageLoader(url)}
            src={url}
            width={400}
            height={400}
            alt=""
            className="w-full h-full max-h-[250px] object-contain"
          />
        </div>
        <Button className="w-full py-1 mt-2" asChild>
          <Link href={`/user/detailPage/${mail._id}`}>View</Link>
        </Button>
      </div>
    );
  });

  return (
    <div>
      <Carousel items={items} key={items} />
    </div>
  );
};

export default NewsThumbnail;
