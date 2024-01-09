"use client";

import Image from "next/image";
import Carousel from "../utils/carousel";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TopBrands = ({ title, subtitle }) => {
  const { data } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const { data } = await axios.get("/api/users/brands");
      return data;
    },
  });
  const imgLoader = (url) => {
    return url;
  };

  const items = data?.res.map((item) => {
    return (
      <div
        key={item}
        className="max-w-[400px] h-[200px] flex items-center shadow-g p-5"
      >
        <Link href={`/user/brands/${item.name}`}>
          <Image
            loader={() => imgLoader(item.logoUrl)}
            src={
              item.logoUrl == null
                ? "/images/brand-1.png"
                : item.logoUrl + `?timestamp=${Date.now()}`
            }
            alt=""
            height="200"
            width="200"
            className=" w-full h-auto object-cover"
          />
        </Link>
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
        {data?.res.length > 0 && (
          <Carousel items={items} key={data?.res[0]._id} />
        )}
      </div>
    </div>
  );
};

export default TopBrands;
