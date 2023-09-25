import React from 'react';

const SocialMediaButton = ({ icon, text, onClick }) => {
  return (
    <div className='w-full flex justify-center items-center mb-2 mx-auto'>
        <div
        onClick={onClick}
        className='flex py-2 gap-1 justify-center w-[80%] border border-[#0B0087] items-center text-[#0B0087] rounded-[15px]  focus:outline-none focus:ring focus:ring-opacity-50 hover:bg-opacity-90 transition duration-300 ease-in-out'
        >
        <div>{icon}</div>
        <div className='font-semibold'>{text}</div>
        </div>
    </div>
  );
};

export default SocialMediaButton;
