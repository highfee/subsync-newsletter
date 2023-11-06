"use client";

import UserLayout from "@/app/layouts/userLayout";
import GeneralFooter from "@/components/generalFooter/GeneralFooter";
import Hero from "@/components/landingPage/hero";
import FollowedBrands from "@/components/userPage/FollowedBrands";

const UserHome = () => {
  return (
    <UserLayout>
      <div className="my-20">
        <Hero
          title="Explore an amazon experience "
          subtitle="Get all the latest deal and promo from your favorite brand all in one palace with subsync"
          img="/images/user_hero.svg"
        />
        <FollowedBrands
          title="Brands you are following"
          subtitle="See all the brands that you are following and get all the latest about the brand"
        />
      </div>
      <GeneralFooter />
    </UserLayout>
  );
};

export default UserHome;
