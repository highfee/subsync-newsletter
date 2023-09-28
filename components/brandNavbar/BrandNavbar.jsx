import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import SubjectIcon from '@mui/icons-material/Subject';

const BrandNavbar = ({sideBarOpen, setSideBarOpen, handleSibeBar, mobileSidebar, setMobileSidebar, handleMobileSidebar}) => {
  return (
    <div className='sticky top-0 z-10 transition-all ease-in-out duration-500'>
      <div className=" w-full bg-white h-[40px] px-4 py-2 shadow-md relative transition-all ease-in-out duration-500">
        <div
          onClick={handleMobileSidebar}
          className="block lg:hidden absolute top-2 right-4"
        >
          {mobileSidebar ? <ClearIcon /> : <SubjectIcon />}
        </div>
        BrandNavbar
      </div>
    </div>
  );
}

export default BrandNavbar