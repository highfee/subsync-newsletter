import { Button } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const VerifyPasswordSuccessful = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Image
        src="/images/verify_password_s.svg"
        alt=""
        height="400"
        width="400"
      />
      <h1 className="font-extrabold text-3xl my-10">Verification Successful</h1>
      <Button className="text-2xl" size="md" asChild>
        <Link href="/">Continue</Link>
      </Button>
    </div>
  );
};

export default VerifyPasswordSuccessful;
