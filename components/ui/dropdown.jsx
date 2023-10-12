"use client";
import React, { useState } from "react";

const DropdownMenu = ({ catigoryOptions, className }) => {
  return (
    <div>
      <select className={`relative inline-block ${className}`}>
        {catigoryOptions.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
