"use client";
import React, { useState } from "react";
import BrandLayout from "@/components/bransLayout/BrandLayout";
import {
  WebsiteStat,
  NewsletterStat,
  Filter,
  ScrolList,
} from "@/components/ui";
import { DomeData } from "@/components/utils/data";
const BrandHome = () => {
  const catigoryOptions = [
    "Fashion",
    "Sports",
    "Technology",
    "Life style",
    "Games",
  ];

  return (
    <BrandLayout>
      <div className="w-[90%] flex flex-col items-center py-12 mx-auto">
        <div className="w-[100%] flex flex-wrap justify-between items-center">
          <WebsiteStat />
          <NewsletterStat />
        </div>
        <div className="w-full py-4">
          <Filter
            catigoryOptions={catigoryOptions}
            className="border rounded-md py-2 px-3"
          />
        </div>
        <div className="w-full py-4">
          <ScrolList domeData={DomeData} />
        </div>
      </div>
    </BrandLayout>
  );
};

export default BrandHome;
