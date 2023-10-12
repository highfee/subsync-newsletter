import React from "react";
import { SearchBar, DropdownMenu } from ".";

const Filter = ({ catigoryOptions, className }) => {
  return (
    <div className="flex justify-between items-center py-4">
      <SearchBar />
      <DropdownMenu catigoryOptions={catigoryOptions} className={className} />
    </div>
  );
};

export default Filter;
