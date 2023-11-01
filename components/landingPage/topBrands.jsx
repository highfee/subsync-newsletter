"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
const Carousel = dynamic(() => import("@/components/utils/carousel"), {
  ssr: false,
});

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Suspense } from "react";

// const items = [
//   <div key={1}>
//     <Image
//       src="/images/brand-1.png"
//       alt=""
//       height="200"
//       width="200"
//       className=" w-[200px] h-[200px]"
//     />
//   </div>,
//   <div key={2}>
//     <Image
//       src="/images/brand-2.svg"
//       alt=""
//       height="200"
//       width="200"
//       className="w-[200px]  h-[200px]"
//     />
//   </div>,
//   <div key={3}>
//     <Image
//       src="/images/brand-3.svg"
//       alt=""
//       height="200"
//       width="200"
//       className="w-[200px]  h-[200px]"
//     />
//   </div>,
//   <div key={4}>
//     <Image
//       src="/images/brand-3.svg"
//       alt=""
//       height="200"
//       width="200"
//       className="w-[200px]  h-[200px]"
//     />
//   </div>,
//   <div key={5}>
//     <Image
//       src="/images/brand-3.svg"
//       alt=""
//       height="200"
//       width="200"
//       className="w-[200px]  h-[200px]"
//     />
//   </div>,
//   <div key={6}>
//     <Image
//       src="/images/brand-3.svg"
//       alt=""
//       height="200"
//       width="200"
//       className="w-[200px]  h-[200px]"
//     />
//   </div>,
//   <div key={7}>
//     <Image
//       src="/images/brand-3.svg"
//       alt=""
//       height="200"
//       width="200"
//       className="w-[200px]  h-[200px]"
//     />
//   </div>,
//   <div key={8}>
//     <Image
//       src="/images/brand-3.svg"
//       alt=""
//       height="200"
//       width="200"
//       className="w-[200px]  h-[200px]"
//     />
//   </div>,
// ];
const TopBrands = ({ title, subtitle }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const { data } = await axios.get("/api/brands");
      return data.res;
    },
  });

  const imgLoader = (url) => {
    return url;
  };

  const items = data?.map((item, i) => {
    return (
      <div
        key={i}
        className="max-w-[400px] h-[200px] flex items-center shadow-g p-5"
      >
        <Suspense
          fallback={<div className="text-4xl text-black">Loading...</div>}
        >
          <Image
            loader={() => imgLoader(item.logoUrl)}
            src={item.logoUrl == null ? "/images/brand-1.png" : item.logoUrl}
            alt=""
            height="200"
            width="200"
            className=" w-full h-auto object-cove"
          />
        </Suspense>
      </div>
    );
  });

  return (
    <div className="my-20 max-w-container px-10 mx-auto">
      <div className="text-center">
        <h1 className=" text-3xl md:text-5xl font-bold">{title}</h1>
        <p className="text-gray-800 mt-8 max-w-[350px] mx-auto">{subtitle}</p>
      </div>
      <div className="mt-10">
        <Carousel items={items} />
      </div>
    </div>
  );
};

export default TopBrands;
