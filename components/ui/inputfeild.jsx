import React from 'react';

const InputField = ({ label, type, icon, placeholder,handlepassword, ...restProps }) => {
  return (
    <div className=" w-[90%] h-[90px] mb-2 mx-auto">
      <div className='mb-[11px]'>
      <label className='text-[#000000]  font-[15px]' htmlFor={restProps.id}>{label}</label>
      </div>
      <div className='relative'>
        <div className='absolute top-4 right-8 lg:right-4' onClick={handlepassword}>
          {icon}
        </div>
        <input
        className='border-2  border-gray-100 rounded-[15px] w-[98%] md:w-full h-[59px] py-[15px] px-[41px] outline-none active:border-gray-100 '
        type={type}
        placeholder={placeholder}
        {...restProps}
        />
      </div>
    </div>
  );
};

export default InputField;
