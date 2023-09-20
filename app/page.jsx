import About from "@/components/landingPage/about";
import Hero from "@/components/landingPage/hero";
import TopBrands from "@/components/landingPage/topBrands";

export default function Home() {
  return (
    <main className=" pt-16 lg:pt-30 ">
      <Hero />
      <TopBrands />
      <About />
    </main>
  );
}
