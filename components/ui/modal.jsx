"use client"
import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import BrandForm from './brandForm';


const Modal = ({modal, setModal, handleModal, children}) => {
  return (
    <div
      className={
        modal
          ? "absolute top-0 left-0 w-[100%] bg-black  bg-opacity-60 backdrop-blur-lg mt-[-15px]"
          : "hidden"
      }
    >
      <div className="w-[100%] flex justify-center items-center py-8">
        <div className="my-4 relative bg-white w-[70%]">
          <div
            onClick={handleModal}
            className="absolute top-2 right-2 border border-black text-black rounded-md z-10"
          >
            <ClearIcon />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal