import React from "react";

const ScrolList = ({ domeData }) => {
  return (
    <div className="flex flex-col w-full">
      {domeData.map((data, idex) => (
        <div
          key={idex}
          id={data.id}
          className="border border-gray-100 rounded-md py-3 px-4 flex justify-between items-center my-4 "
        >
          <div className="w-[60px] h-[60px] rounded-full border"></div>
          <div>
            <h1 className="text-[#797979] text-[16px]">Name</h1>
            <h1 className="text-[#0B0087] font-semibold text-[16px]">
              {data.name}
            </h1>
          </div>
          <div>
            <h1 className="text-[#797979] text-[16px]">URL</h1>
            <h1 className="text-[#0B0087] font-semibold text-[16px]">
              {data.url}
            </h1>
          </div>
          <div>
            <h1 className="text-[#797979] text-[16px]">Newsletters</h1>
            <h1 className="text-[#0B0087] font-semibold text-[16px]">
              {data.newsletters}
            </h1>
          </div>
          <div>
            <h1 className="text-[#797979] text-[16px]">Followers</h1>
            <h1 className="text-[#0B0087] font-semibold text-[16px]">
              {data.followers}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrolList;
