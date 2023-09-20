import React from 'react';

const SocialMediaButton = ({ icon, text, colorClass, onClick }) => {
  return (
    <div>
        <button
        onClick={onClick}
        className='flex border border-gray-100 items-center text-[#0B0087] rounded-[15px] py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 hover:bg-opacity-90 transition duration-300 ease-in-out'
        >
        <span className="mr-2 w-[52px] h-[52px]">{icon}</span>
        <span className='text-[30px] font-semibold text-[#0B0087]'>{text}</span>
        </button>
    </div>
  );
};

export default SocialMediaButton;
