import UserLayout from "@/app/layouts/userLayout";
import BrandsThumbnail from "@/components/brandsThumbnail/BrandsThumbnail";
import GeneralFooter from "@/components/generalFooter/GeneralFooter";
import Hero from "@/components/landingPage/hero";
import TopBrands from "@/components/landingPage/topBrands";

const UserHome = () => {
  return (
    <UserLayout>
      <div className="my-20">
        <Hero
          title="Explore an amazon experience "
          subtitle="Get all the latest deal and promo from your favorite brand all in one palace with subsync"
          img="/images/user_hero.svg"
        />
        <TopBrands
          title="Brands you are following"
          subtitle="See all the brands that you are following and get all the latest about the brand"
        />
        <BrandsThumbnail category="National Retailers" />
        <BrandsThumbnail category="Fashion & Apparel Brands" />
        <BrandsThumbnail category="Fashion & Apparel Brands" />
      </div>
      <GeneralFooter />
    </UserLayout>
  );
};

export default UserHome;
