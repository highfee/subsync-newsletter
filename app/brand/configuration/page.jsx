import React from "react";
import BrandLayout from "@/components/bransLayout/BrandLayout";
import Image from "next/image";
import { Button } from "@/components/ui";
import Link from "next/link";
const Configuration = () => {
  return (
    <BrandLayout>
      <div className="w-full overflow-x-hidden">
        <div className="w-full flex flex-col gap-y-6 items-center mt-8">
          <div className="mt-12">
            <Image
              src="/images/brandconfig.svg"
              width={500}
              height={500}
              alt="Welcome image"
              className="min-w-full max-h-[200px]"
            />
          </div>

          <p className="text-[14px] text-center w-[40%]">
            Cope the email shown below and past in in your email list
          </p>

          <div className="border border-gray-100 rounded-[15px] h-[50px] w-[50%] flex justify-center items-center">
            <p>subsynqnewsletteraa@gmail.com</p>
          </div>

          <Button
            type="button"
            className="rounded-[15px] w-[30%] text-md md:text-lg h-[50px] mt-8"
          >
            <Link href="/brand">Done</Link>
          </Button>
        </div>
      </div>
    </BrandLayout>
  );
};

export default Configuration;
