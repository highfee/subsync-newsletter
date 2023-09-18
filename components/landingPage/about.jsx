import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#f1f1f1] py-20">
      <div className="max-w-container px-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="hidden md:block">
          <Image
            src="/images/about.svg"
            width="400"
            height="300"
            alt=""
            className="min-w-full max-h-[300px]"
          />
        </div>
        <div className="flex flex-col justify-between gap-6 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold">About us</h2>
          <p className="l leading-relaxed text-lg">
            Subsync is a platform that puts together all the top deals from
            different company so as to make it easy for every one get the best
            out of it.
          </p>
          <Button className="w-full md:w-[359px]" asChild size="md">
            <Link href="">Explore now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
