"use client";

import Image from "next/image";
// import dynamic from "next/dynamic";
// const Carousel = dynamic(() => import("@/components/utils/carousel"), {
//   ssr: false,
// });
import Carousel from "../utils/carousel";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

const FollowedBrands = ({ title, subtitle }) => {
  const { data: session } = useSession();

  const { data } = useQuery({
    queryKey: ["randomUserBrands"],
    queryFn: async () => {
      const { data } = await axios.get(`/api/users/user/followedBrands/1`, {
        headers: {
          Authorization: session?.user?.accessToken,
        },
      });
      return data;
    },
  });
  const imgLoader = (url) => {
    return url;
  };

  const items = data?.map((item) => {
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
            className=" w-full h-auto object-cove"
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
      <div className="mt-10">{/* <Carousel items={items} key={data} /> */}</div>
    </div>
  );
};

export default FollowedBrands;
