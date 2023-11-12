"use client";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@/components/utils/carousel"), {
  ssr: false,
});

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import NewsThumbnail from "./NewsThumbnail";

const News = () => {
  const { data: session } = useSession();
  const { data, isLoading } = useQuery({
    queryKey: ["randomUserCatAndMails"],
    queryFn: async () => {
      const { data } = await axios.get(`/api/user/followedCatAndMails`, {
        headers: {
          Authorization: session?.user?.accessToken,
        },
      });
      return data.randomMailsByCategory;
    },
  });

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  return (
    <div className="my-20 max-w-container px-10 mx-auto">
      {Object.keys(data).map(
        (item) =>
          data[item].length > 0 && (
            <>
              <div className="flex flex-col gap-4 mb-10 md:mb-20">
                <h1 className="text-3xl md:text-4xl font-bold max-w-[450px]">
                  Emails from {item} Brands
                </h1>
                <div className="flex justify-between items-center">
                  <div className="text-gray-700">
                    <p>Get all the latest email newsletter from all</p>
                    <p className="font-bold">{item} Brands</p>
                  </div>
                  <div className="font-bold">
                    <Link href="">ALL</Link>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <NewsThumbnail data={data[item]} />
              </div>
            </>
          )
      )}
    </div>
  );
};

export default News;
