"use client";
import UserLayout from "@/app/layouts/userLayout";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CategoryPage = () => {
  const [selectedCategories, setSetselectedCategories] = useState([]);
  const { data: session } = useSession();

  const { push } = useRouter();

  const handleClick = (item) => {
    if (selectedCategories.includes(item._id)) {
      setSetselectedCategories((prev) =>
        prev.filter((category) => category !== item?._id)
      );
    } else {
      setSetselectedCategories((prevs) => [...prevs, item?._id]);
    }
  };

  const { data } = useQuery({
    queryKey: ["allcategories"],
    queryFn: async () => {
      const { data } = await axios.get("/api/users/categories/getCategories");

      return data;
    },
  });

  const mutate = useMutation(async (data) => {
    await axios.post("/api/users/categories/followCategory", data, {
      headers: {
        Authorization: session?.user.accessToken,
      },
    });

    push("/user");
  });

  return (
    <UserLayout>
      <div className="max-w-container mx-auto px-10 mb-10 md:mb-20 ">
        <div className="mt-10 md:mt-20">
          <h1 className="text-center text-3xl md:text-4xl font-[600]">
            Select Category
          </h1>
          <p className="max-w-[450px] text-center mt-5 mx-auto text-gray-500">
            Select the category that suits what you are looking for and meets
            what you what
          </p>
          <div className="md:mx-20">
            <div className="flex flex-wrap gap-6 md:gap-10 mt-20  ">
              {data?.map((item, index) => (
                <div
                  key={index}
                  className={`py-3 flex-1 basis-[fit-content] px-7 shadow-md  text-base md:text-lg rounded-[50px] max-w-[max-content] text-center cursor-pointer hover:scale-105 items-center ${
                    selectedCategories.includes(item._id) &&
                    " bg-primary-bg text-white"
                  }`}
                  onClick={() => handleClick(item)}
                >
                  {item?.name}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-20">
              <Button
                className="py-3 px-7 text-lg md:text-2xl rounded-2xl"
                onClick={() => {
                  mutate.mutate({
                    userId: session?.user._id,
                    categoryId: selectedCategories,
                  });
                }}
              >
                {mutate.isLoading ? <Loading /> : "Continue"}
              </Button>
              <Link
                href=""
                className="text-lg md:text-2xl font-[500] text-primary-bg"
              >
                Skip
              </Link>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default CategoryPage;
