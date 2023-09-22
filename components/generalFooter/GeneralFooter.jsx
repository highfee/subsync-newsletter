import Image from "next/image";
import Link from "next/link";
import React from "react";

const GeneralFooter = () => {
  return (
    <div className="absolue w-full px-10 py-14 bottom-0 bg-primary-bg text-white">
      <div className="max-w-container mx-auto grid grid-cols-2">
        <div>
          <Link href="/">
            <Image
              src="/images/logo-white.svg"
              width="300"
              height="100"
              alt=""
            />
          </Link>
          <p className="mt-5 leading-relaxed ">
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
