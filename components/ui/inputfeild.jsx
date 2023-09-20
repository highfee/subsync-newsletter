import React from 'react';

const InputField = ({ label, placeholder, ...restProps }) => {
  return (
    <div className="w-[545px] h-[113px]">
      <label className='text-[#000000] mb-[11px] font-[15px]' htmlFor={restProps.id}>{label}</label>
      <input
      className='border-2 border-gray-100 border-r-15 w-full h-[79px] py-[28px] px-[41px]'
        type="text"
        placeholder={placeholder}
        {...restProps}
      />
    </div>
  );
};

export default InputField;
