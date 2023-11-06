"use client";
import UserLayout from "@/app/layouts/userLayout";
import { Button } from "@/components/ui";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const category = [
  "Fashion",
  "Sport",
  "Job",
  "Techonlogy",
  "Relationships",
  "Innovation",
  "Travels",
  "Beauty",
  "Skin care",
  "Games",
  "Cars",
  "Beauty",
  "Skin care",
  "Games",
];

const CategoryPage = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <UserLayout>
      <div className="max-w-container mx-auto px-10 ">
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
              {category.map((item, index) => (
                <div
                  key={index}
                  className=" py-4 flex-1 basis-[fit-content] px-7 shadow-md  text-base md:text-lg rounded-[50px] max-w-[200px] text-center cursor-pointer hover:scale-105"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-20">
              <Button
                asChild
                className="py-3 px-7 text-lg md:text-2xl rounded-2xl"
              >
                <Link href="">Continue</Link>
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
