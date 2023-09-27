"use client"
import React from 'react'
// material icon
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Sidebar = ({sideBarOpen, setSideBarOpen, handleSibeBar, mobileSidebar, setMobileSidebar, handleMobileSidebar}) => {
    
  return (
    <>
      <div className={sideBarOpen ? "hidden lg:block w-[20%] bg-[#0B0087] h-[100vh] px-4 py-4 relative": "w-[10%] bg-[#0B0087] px-4 py-4 h-[100vh] relative"}>
          <div onClick={handleSibeBar} className='absolute top-6 right-4 text-white border border-white rounded-md'>
            {sideBarOpen ? <NavigateBeforeIcon/> : <NavigateNextIcon/>}
            <div className='w-[]'></div>
          </div>
      </div>
      
    </>
  )
}

export default Sidebar