"use client";

import UserLayout from "@/app/layouts/userLayout";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import React from "react";

const NewsletterDetailPage = ({ params }) => {
  const id = params.id;
  const { data } = useQuery({
    queryKey: ["news", id],
    queryFn: async () => {
      const { data } = await axios.get(`/api/news/${id}`);
      return data;
    },
  });

  const imageLoader = (url) => {
    return url;
  };

  return (
    <div>
      <UserLayout>
        <div className="max-w-container px-10 mx-auto py-y md:py-10 flex flex-col lg:flex-row gap-10 ">
          <div className="border rounded-lg h-[300px] w-[300px] lg:sticky top-[102px] relative">
            <Image
              loader={() => imageLoader(data?.newsOwner.logoUrl)}
              src={data?.newsOwner.logoUrl}
              alt=""
              width={300}
              height={300}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="flex-1 borde rounded-lg ">
            <div
              className="w- w-full p-5"
              dangerouslySetInnerHTML={{ __html: data?.res.data }}
            />
          </div>
        </div>
      </UserLayout>
    </div>
  );
};

export default NewsletterDetailPage;
