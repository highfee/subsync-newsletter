import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserVerifyPassword = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-10">
      <Image
        src="/images/verify_password.svg"
        alt=""
        height="300"
        width="200"
      />
      <p className="my-8 max-w-[500px] text-center">
        An email has been sent to the provided email address above and copy the
        authentication code then paste it in the field below
      </p>
      <div className="mb-8">
        <label htmlFor="cpassword" className="mb-3 inline-block  font-bold">
          Enter the code sent to you
        </label>
        <Input
          className="p-5 py-7 rounded-3xl text-lg w-full md:w-[475px]"
          placeholder="Enter Code"
          id="cpassword"
          type="password"
        />
      </div>
      <Button className="text-2xl bg-primary-bg/60" size="md" asChild>
        <Link href="/user/verifyPasswordSuccessful">Authenticate</Link>
      </Button>
    </div>
  );
};

export default UserVerifyPassword;
