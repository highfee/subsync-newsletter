import React from "react";
import Image from "next/image";
import {
  Button,
  buttonVariants,
  InputField,
  SocialMediaButton,
} from "@/components/ui";
import AuthLayout from "@/app/layouts/AuthLayout";

const BrandLogin = () => {
  return (
    <AuthLayout>
      <div className="flex w-full h-[100vh]">
        <div className="flex-1  flex items-center justify-center">
          <div className="hidden md:block">
            <Image
              src="/images/brandLogin.svg"
              width="500"
              height="500"
              alt=""
              className="min-w-full max-h-[300px]"
            />
          </div>
        </div>
        <div className="flex-1  shadow-lg flex flex-col items-center ">
          <div className="w-full flex justify-center items-center mt-24 mb-[24px]">
            <h1 className="text-[40px] font-bold text-[#0B0087]">Sign in</h1>
          </div>
          <form className="w-[90%] flex flex-col items-center">
            <InputField
              label="Email"
              placeholder="Enter your email"
              id="email"
              type="email"
            />
            <InputField
              label="Password"
              placeholder="Enter your password"
              id="password"
              type="password"
            />
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default BrandLogin;
