import Image from "next/image";
import { Input } from "../ui/input";
const Hero = ({ title, subtitle, img }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-4 max-w-container px-10 mx-auto">
      <div className="text-center md:text-left">
        <h1 className="font-[600] text-3xl md:text-5xl max-w-[558px] leading-snug">
          {title}
        </h1>
        <p className="text-[#797979] py-10">{subtitle}</p>
        <div className="flex items-center gap-1.5 border-2 p-2 rounded-full focus-within:outline-2  focus-within:outline /images/hero image.svgfocus-within:-outline-offset-[6px] focus-within:outline-primary-bg/50">
          <Input
            type="text"
            id="email"
            placeholder="Search"
            className=" border-0 focus-visible:ring-0 focus-visible:bg-transparent focus-visible:ring-offset-0 text-xl pl-7"
          />
          <div className="cursor-pointer border p-2 md:p-3 rounded-full">
            <Image
              src="/images/icons/search.svg"
              alt="40"
              width="40"
              height="40"
              className="h-[30px] w-[30px] md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Image src={img} alt="" width="629" height="600" />
      </div>
    </div>
  );
};

export default Hero;
