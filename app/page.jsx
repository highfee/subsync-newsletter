// "use client";

import About from "@/components/landingPage/about";
import Hero from "@/components/landingPage/hero";
import TopBrands from "@/components/landingPage/topBrands";
import MainLayout from "./layouts/MainLayout";
import BrandsThumbnail from "@/components/brandsThumbnail/BrandsThumbnail";

const fetchData = async () => {
  const res = await fetch("http:localhost:3000/api/news");
  return res.json();
};
export default async function Home() {
  // const data = await fetchData();
  console.log(data);
  return (
    <MainLayout>
      <main className=" pt-16 lg:pt-30 ">
        <Hero
          title="Lorem Ipsum is simply dummy"
          subtitle="Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy"
          img="/images/hero image.svg"
        />
        <TopBrands
          title="Top Brands"
          subtitle="See what all the top brands have installed for you and your loved once"
        />
        <About />
        <BrandsThumbnail />
      </main>
    </MainLayout>
  );
}
