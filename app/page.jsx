import About from "@/components/landingPage/about";
import Hero from "@/components/landingPage/hero";
import TopBrands from "@/components/landingPage/topBrands";
import MainLayout from "./layouts/MainLayout";

export default async function Home() {
  return (
    <MainLayout>
      <main className=" pt-16 lg:pt-30 ">
        <Hero />
        <TopBrands />
        <About />
      </main>
    </MainLayout>
  );
}
