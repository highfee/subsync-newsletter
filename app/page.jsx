import About from "@/components/landingPage/about";
import Hero from "@/components/landingPage/hero";
import TopBrands from "@/components/landingPage/topBrands";
import MainLayout from "./layouts/MainLayout";
import BrandsThumbnail from "@/components/brandsThumbnail/BrandsThumbnail";

export default function Home() {
  return (
    <MainLayout>
      <main className=" pt-16 lg:pt-30 ">
        <Hero
          title="Curated newsletters, thoughtfully gathered for your convenience."
          subtitle="Here you get sales, deals, coupons, and discount codes from brands, retailers, and creators you love"
          img="/images/hero image.svg"
        />
        <TopBrands
          title="Top Brands"
          // subtitle="See what all the top brands have installed for you and your loved once"
        />

        {/* <About /> */}
        <BrandsThumbnail />
      </main>
    </MainLayout>
  );
}
