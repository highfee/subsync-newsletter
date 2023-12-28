import Image from "next/image";
import Link from "next/link";
import React from "react";

const GeneralFooter = () => {
  return (
    <div className="absolue w-full px-10 py-14 bottom-0 bg-primary-bg text-white">
      <div className="max-w-container mx-auto flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full">
          <Link href="/">
            <Image
              src="/images/logo-white.svg"
              width="300"
              height="100"
              alt=""
            />
          </Link>
          <p className="mt-5 leading-relaxed text-center w-[290px] md:w-[340px] lg:w-[400px]">
            Subsync is a platform that puts together akk the top deals from
            different company so as to make it easy for every one get the best
            out of it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralFooter;
