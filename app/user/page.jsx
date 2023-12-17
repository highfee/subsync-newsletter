"use client";

import UserLayout from "@/app/layouts/userLayout";
import GeneralFooter from "@/components/generalFooter/GeneralFooter";
import Hero from "@/components/landingPage/hero";
import FollowedBrands from "@/components/userPage/FollowedBrands";
import News from "@/components/userPage/News";

const UserHome = () => {
  return (
    <UserLayout>
      <div className="my-20">
        <Hero
          title="Discover Your Favorites:"
          subtitle="Your preferences drive our recommendations, ensuring each newsletter resonates with your interests"
          img="/images/user_hero.svg"
        />
        <FollowedBrands
          title="Brands you are following"
          subtitle="See all the brands that you are following and get all the latest about the brand"
        />
        <News />
      </div>
      <GeneralFooter />
    </UserLayout>
  );
};

export default UserHome;
