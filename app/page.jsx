import Hero from "@/components/landingPage/hero";
import TopBrands from "@/components/landingPage/topBrands";

export default function Home() {
  return (
    <main className=" max-w-container mx-auto pt-40 px-10">
      <Hero />
      <TopBrands />
    </main>
  );
}
