"use client";

import dynamic from "next/dynamic";
const Carousel = dynamic(() => import("@/components/utils/carousel"), {
  ssr: false,
});
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// const items = [
//   <div key={1} className="max-w-[280px]">
//     <Image
//       src="/images/brand_thumbnail.svg"
//       alt=""
//       height="180"
//       width="180"
//       className=" w-[200px] h-[200px]"
//     />
//     <Button className="w-full py-1 mt-2">follow</Button>
//   </div>,
//   <div key={1} className="max-w-[280px]">
//     <Image
//       src="/images/brand_thumbnail.svg"
//       alt=""
//       height="180"
//       width="180"
//       className=" w-[200px] h-[200px]"
//     />
//     <Button className="w-full py-1 mt-2">follow</Button>
//   </div>,
//   <div key={1} className="max-w-[280px]">
//     <Image
//       src="/images/brand_thumbnail.svg"
//       alt=""
//       height="180"
//       width="180"
//       className=" w-[200px] h-[200px]"
//     />
//     <Button className="w-full py-1 mt-2">follow</Button>
//   </div>,
//   <div key={1} className="max-w-[280px]">
//     <Image
//       src="/images/brand_thumbnail.svg"
//       alt=""
//       height="180"
//       width="180"
//       className=" w-[200px] h-[200px]"
//     />
//     <Button className="w-full py-1 mt-2">follow</Button>
//   </div>,
//   <div key={1} className="max-w-[280px]">
//     <Image
//       src="/images/brand_thumbnail.svg"
//       alt=""
//       height="180"
//       width="180"
//       className=" w-[200px] h-[200px]"
//     />
//     <Button className="w-full py-1 mt-2">follow</Button>
//   </div>,
//   <div key={1} className="max-w-[280px]">
//     <Image
//       src="/images/brand_thumbnail.svg"
//       alt=""
//       height="180"
//       width="180"
//       className=" w-[200px] h-[200px]"
//     />
//     <Button className="w-full py-1 mt-2">follow</Button>
//   </div>,
// ];

const BrandsThumbnail = ({ category }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axios.get("/api/categories");
      return data;
    },
  });

  const imgLoader = (url) => {
    return url;
  };

  const items = data?.mails.map((mail, i) => {
    return (
      <div key={1} className="max-w-[280px]">
        <Image
          src="/images/brand_thumbnail.svg"
          alt=""
          height="180"
          width="180"
          className=" w-[200px] h-[200px]"
        />
        <Button className="w-full py-1 mt-2">follow</Button>
      </div>
    );
  });

  return (
    <div className="my-20 max-w-container px-10 mx-auto">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl font-bold max-w-[400px]">
          Emails from {data?.res.name}
        </h1>
        <div className="flex justify-between items-center">
          <div className="text-gray-700">
            <p>Get all the latest email newsletter from all</p>
            <p className="font-bold">{data?.res.name}</p>
          </div>
          <div className="font-bold">
            <Link href="">ALL</Link>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <Carousel items={items} />
      </div>
    </div>
  );
};

export default BrandsThumbnail;
