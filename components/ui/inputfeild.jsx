import React from 'react';

const InputField = ({ label, type, placeholder, ...restProps }) => {
  return (
    <div className="w-[545px] h-[113px]">
      <div className='mb-[11px]'>
      <label className='text-[#000000]  font-[15px]' htmlFor={restProps.id}>{label}</label>
      </div>
      <input
        className='border-2 border-gray-100 rounded-[15px] w-full h-[59px] py-[15px] px-[41px] outline-none active:border-gray-100 '
        type={type}
        placeholder={placeholder}
        {...restProps}
      />
    </div>
  );
};

export default InputField;
