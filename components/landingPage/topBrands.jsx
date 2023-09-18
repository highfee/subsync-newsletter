import dynamic from "next/dynamic";
import Image from "next/image";
// import Carousel from "../utils/carousel";
const Carousel = dynamic(() => import("@/components/utils/carousel"), {
  ssr: false,
});

const items = [
  <div key={1}>
    <Image
      src="/images/brand-1.png"
      alt=""
      height="200"
      width="200"
      className=" w-[200px] h-[200px]"
    />
  </div>,
  <div key={2}>
    <Image
      src="/images/brand-2.svg"
      alt=""
      height="200"
      width="200"
      className="w-[200px]  h-[200px]"
    />
  </div>,
  <div key={3}>
    <Image
      src="/images/brand-3.svg"
      alt=""
      height="200"
      width="200"
      className="w-[200px]  h-[200px]"
    />
  </div>,
  <div key={4}>
    <Image
      src="/images/brand-3.svg"
      alt=""
      height="200"
      width="200"
      className="w-[200px]  h-[200px]"
    />
  </div>,
  <div key={5}>
    <Image
      src="/images/brand-3.svg"
      alt=""
      height="200"
      width="200"
      className="w-[200px]  h-[200px]"
    />
  </div>,
  <div key={6}>
    <Image
      src="/images/brand-3.svg"
      alt=""
      height="200"
      width="200"
      className="w-[200px]  h-[200px]"
    />
  </div>,
  <div key={7}>
    <Image
      src="/images/brand-3.svg"
      alt=""
      height="200"
      width="200"
      className="w-[200px]  h-[200px]"
    />
  </div>,
  <div key={8}>
    <Image
      src="/images/brand-3.svg"
      alt=""
      height="200"
      width="200"
      className="w-[200px]  h-[200px]"
    />
  </div>,
];
const TopBrands = () => {
  return (
    <div className="my-20 ">
      <div className="text-center">
        <h1 className=" text-3xl md:text-5xl font-bold">Top Brands</h1>
        <p className="text-gray-800 mt-8 max-w-[350px] mx-auto">
          See what all the top brands have installed for you and your loved once
        </p>
      </div>
      <div className="mt-10">
        <Carousel items={items} />
      </div>
    </div>
  );
};

export default TopBrands;
