import React from "react";
import { InputField, Button } from ".";
import Link from "next/link";

const BrandForm = () => {
  return (
    <div>
      <div className="w-[100%] bg-[#407BFF] h-[100px] flex justify-end items-start py-2 px-2"></div>
      <div className="w-[100%] flex flex-col items-center mt-6 py-6">
        <h1 className="text-[#0B0087] text-[18px] text-center font-semibold">
          Create a brand
        </h1>
        <form className="w-[70%] py-4 flex flex-col items-center gap-y-6 mt-6">
          <div className="w-[100%]">
            <InputField
              label="Brand Name"
              placeholder="Enter your brand name"
              id="brandName"
              type="text"
            />
          </div>

          <div className="w-[100%]">
            <InputField
              label="Web Url"
              placeholder="Enter your Web Url"
              id="webUrl"
              type="text"
            />
          </div>

          <div className="w-[100%] flex  justify-center flex-col">
            <label className="text-[#000000]  font-[15px] ml-7 mt-2">
              Description
            </label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="border-2  border-gray-100 rounded-[15px] mx-auto w-[98%] md:w-[90%] h-[59px] py-[15px] px-[41px] outline-none active:border-gray-100 "
            ></textarea>
          </div>

          <div className="w-[90%]">
            <div class="border border-gray-100 rounded-[15px] p-4 h-[150px] w-[40%] flex justify-center items-center">
              <label class="cursor-pointer">
                <span class="text-blue-500">Choose brand logo</span>
                <input
                  type="file"
                  class="hidden"
                  id="imageUpload"
                  accept="image/*"
                />
              </label>
              <p class="mt-2 text-gray-600" id="selectedFileName"></p>
            </div>
          </div>

          <Button
            type="button"
            className="rounded-[15px] w-[30%] text-md  h-[40px] mt-8"
          >
            <Link href="/brand/configuration">Continue</Link>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BrandForm;
