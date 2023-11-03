"use client";

import UserLayout from "@/app/layouts/userLayout";
import { Button } from "@/components/ui";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { getImageFromMailHTML } from "@/lib/utils";

const Brandpage = ({ params }) => {
  const { data } = useQuery({
    queryKey: ["brand", params.name],
    queryFn: async () => {
      const { data } = await axios.get(`/api/brands/${params.name}`);
      return data;
    },
  });

  const imgLoader = (url) => {
    return url;
  };

  return (
    <UserLayout>
      <div className="bg-[#D9D9D9] h-[28vmax] min-h-[300px] max-h-[450px]">
        <div className="py-16 lg:py-30 max-w-container px-10 mx-auto h-full">
          <div className="h-full flex justify-between">
            <div className="flex gap-14 ">
              <div className="max-h">
                <Image
                  src={data?.brand.logoUrl}
                  alt="brand profile image"
                  height={400}
                  width={400}
                  loader={() => imgLoader(data?.brand.logoUrl)}
                  className="object-cover max-w-[350px] max-h-[80%]"
                  priority
                />
              </div>
              <div className="i self-center max-w-[500px] ">
                <h1 className="text-3xl md:text-4xl mb-5 text-primary-bg">
                  {data?.brand.name}
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  voluptatem vel voluptatum numquam dignissimos odit non
                  excepturi laboriosam veniam tempora!
                </p>
              </div>
            </div>
            <div className="self-end ">
              <Button size="md" className="p-4">
                Follow
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 md:py-20 max-w-container px-10 mx-auto h-full ">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 justify-center">
          {data?.mails.map((item, i) => {
            const url = getImageFromMailHTML(item?.data);
            return (
              <div key={i} className="border rounded-md  ">
                <div className="h-[300px] ">
                  <img
                    src={url}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 ">
                  <p className="line-clamp-2 h-[3em]">{item?.subject}</p>
                  <div className="self-end ">
                    <Button
                      asChild
                      className="w-full bg-[#D9D9D9] p-2 my-3 text-gray-900 hover:text-white"
                    >
                      <Link href={`/user/detailPage/${item._id}`}>View</Link>
                    </Button>
                    <Button className="w-full p-2">Follow</Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </UserLayout>
  );
};

export default Brandpage;
