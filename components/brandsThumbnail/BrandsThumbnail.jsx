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
import { useState } from "react";

const BrandsThumbnail = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["catergories"],
    queryFn: async () => {
      const { data } = await axios.get("/api/categories");
      setTest(data);
      return data;
    },
  });
  const [test, setTest] = useState(data);

  const imgLoader = (url) => {
    return url;
  };

  const items = test?.brands.map((mail, i) => {
    return (
      <div key={i} className="w-[280px] h-[]">
        <Image
          loader={() => imgLoader(mail.logoUrl)}
          src={
            mail.logoUrl == null
              ? "/images/brand-1.png"
              : mail.logoUrl + `?timestamp=${Date.now()}`
          }
          alt=""
          height="180"
          width="180"
          className=" w-[200px] h-[200px] object-contain"
        />
        <Button className="w-full py-1 mt-2">follow</Button>
      </div>
    );
  });

  return (
    <div className="my-20 max-w-container px-10 mx-auto">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl font-bold max-w-[450px]">
          Emails from {data?.category.name} Brands
        </h1>
        <div className="flex justify-between items-center">
          <div className="text-gray-700">
            <p>Get all the latest email newsletter from all</p>
            <p className="font-bold">{data?.category.name} Brands</p>
          </div>
          <div className="font-bold">
            <Link href="">ALL</Link>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <Carousel items={items} key={data?.category._id} />
      </div>
    </div>
  );
};

export default BrandsThumbnail;
