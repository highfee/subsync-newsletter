"use client";
import { useState } from "react";
import AuthLayout from "@/app/layouts/AuthLayout";
import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const UserRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <AuthLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-10 gap-10 max-w-container mx-auto mb-20">
        <div className="shadow-md-inner h-full  items-center hidden md:flex">
          <Image
            src="/images/userRegister.svg"
            alt=""
            width="600"
            height="500"
          />
        </div>
        <div className="min-h-[calc(100vh-100px)] pt-16 md:pt-20 md:mx-10">
          <p className="text-center text-4xl md:text-5xl text-primary-bg font-bold">
            Sign Up
          </p>
          <form className="mt-10 flex flex-col gap-10">
            <div>
              <label
                htmlFor="name"
                className="mb-3 inline-block text-primary-bg font-bold"
              >
                Fullname
              </label>
              <Input
                className="p-4 h- rounded-3xl text-lg"
                placeholder="Enter Your Fullname"
                id="name"
                type="text"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-3 inline-block text-primary-bg font-bold"
              >
                Email
              </label>
              <Input
                className="p-4 h- rounded-3xl text-lg"
                placeholder="Enter Your Email Address"
                id="email"
                type="email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-3 inline-block text-primary-bg font-bold"
              >
                Password
              </label>
              <div className="relative">
                <Input
                  className="p-4 h- rounded-3xl text-lg"
                  placeholder="Enter Your password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 right-5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-3 inline-block text-primary-bg font-bold"
              >
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  className="p-4 h- rounded-3xl text-lg"
                  placeholder="Confirm password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 right-5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center flex-wrap gap-2">
              <p className="text-base ">
                Already have an account{" "}
                <Link
                  href="/user/login"
                  className="text-primary-bg font-bold hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
            <Button className="rounded-2xl w-full text-lg md:text-xl p-4">
              Sign up
            </Button>
          </form>
          <div />
          {/* <div className="mt-10 flex flex-col gap-8">
            <Button variant="outline" className="w-full text-xl md:text-2xl">
              <GoogleIcon
                fontSize="larg"
                className="mr-1 text-2xl md:text-4xl"
              />{" "}
              Sign in with Google
            </Button>
            <Button variant="outline" className="w-full text-xl md:text-2xl">
              <FacebookIcon
                fontSize="larg"
                className="mr-1 text-2xl md:text-4xl"
              />{" "}
              Sign in with Facebook
            </Button>
          </div> */}
        </div>
      </div>
    </AuthLayout>
  );
};

export default UserRegistration;
