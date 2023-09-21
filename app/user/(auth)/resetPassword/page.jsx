import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const ResetPassword = () => {
  return (
    <div className="h-screen flex  items-center justify-center px-10">
      <div className=" max-w-[1000px] ">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl">Reset Password</h1>
          <p className="max-w-[70%] mx-auto mt-5">
            Enter a new password the password should nt be the same as you
            previous password
          </p>
        </div>
        <form className="mt-10 flex flex-col gap-5">
          <div>
            <label htmlFor="password" className="mb-3 inline-block font-bold">
              New Password
            </label>
            <Input
              className="p-5 h- rounded-3xl text-lg"
              placeholder="Enter Your Password"
              id="password"
              type="password"
            />
          </div>
          <div>
            <label htmlFor="cpassword" className="mb-3 inline-block  font-bold">
              Password
            </label>
            <Input
              className="p-5 h- rounded-3xl text-lg"
              placeholder="Confirm password"
              id="cpassword"
              type="password"
            />
          </div>

          <Button className="rounded-2xl w-full text-xl md:text-2xl h-[65px]">
            Change
          </Button>
        </form>
        <p className="mt-10">
          Back to{" "}
          <Link
            href="/user/login"
            className="text-primary-bg font-bold hover:underline"
          >
            sign in
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
