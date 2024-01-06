"use client";

// import dynamic from "next/dynamic";
// const Carousel = dynamic(() => import("@/components/utils/carousel"), {
//   ssr: false,
// });
import Carousel from "../utils/carousel";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

const BrandsThumbnail = () => {
  const { data: session } = useSession();

  const { data } = useQuery({
    queryKey: ["catergories"],
    queryFn: async () => {
      const { data } = await axios.get("/api/users/categories");
      return data;
    },
  });

  const mutatation = useMutation(async (data) => {
    return axios.post("/api/users/user/followBrand", data, {
      headers: {
        Authorization: session?.user.accessToken,
      },
    });
  });

  const imgLoader = (url) => {
    return url;
  };

  if (!data?.category) {
    return "no data";
  }

  const items =
    data?.brands.length &&
    data?.brands.map((mail, i) => {
      return (
        <div
          key={i}
          className="w-[180p] md:w-[280p] h-[] flex flex-col items-center pr-3"
        >
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
          {session?.user && session.user.followedBrands.includes(mail._id) ? (
            <Button className="w-full py-1 mt-2">unfollow</Button>
          ) : (
            <Button
              className="w-full py-1 mt-2"
              onClick={() => {
                mutatation.mutate({
                  userId: session.user._id,
                  brandId: mail._id,
                });
              }}
            >
              follow
            </Button>
          )}
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
