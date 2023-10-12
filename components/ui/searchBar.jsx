import React from "react";
import { Search } from "@mui/icons-material";
import Image from "next/image";
import { Input } from "../ui/input";
const SearchBar = () => {
  return (
    <div className="flex items-center gap-1.5 border-2 p-2 rounded-full focus-within:outline-2  focus-within:outline focus-within:-outline-offset-[6px] focus-within:outline-primary-bg/50">
      <Input
        type="text"
        id="email"
        placeholder="Search"
        className=" border-0 focus-visible:ring-0 focus-visible:bg-transparent focus-visible:ring-offset-0 text-xl pl-7"
      />
      <div className="cursor-pointer border p-2 md:p-3 rounded-full">
        <Image
          src="/images/icons/search.svg"
          alt="40"
          width="40"
          height="40"
          className="h-[150px] w-[15px] md:w-[20px] md:h-[20px]"
        />
      </div>
    </div>
  );
};

export default SearchBar;
