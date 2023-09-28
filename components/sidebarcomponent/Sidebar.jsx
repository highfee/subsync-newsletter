"use client"
import React from 'react'
// material icon
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import SidebarLinks from '../ui/SidebarLinks';

const Sidebar = ({sideBarOpen, setSideBarOpen, handleSibeBar, mobileSidebar, setMobileSidebar, handleMobileSidebar}) => {
    
  return (
    <>
      <div
        className={
          sideBarOpen
            ? "hidden lg:block w-[20%] bg-[#0B0087] h-[100vh] px-4 py-4 relative transition ease-out duration-700 stick top-0 left-0"
            : "w-[10%] bg-[#0B0087] px-4 py-4 h-[100vh] relative transition-all ease-in duration-800 stick top-0 left-0"
        }
      >
        <div
          onClick={handleSibeBar}
          className="absolute top-6 right-4 text-white border border-white rounded-md"
        >
          {sideBarOpen ? <NavigateBeforeIcon /> : <NavigateNextIcon />}
        </div>
        <div className="w-[70%] mx-auto h-[100px] mt-20 transition-all ease-in-out duration-500">
          <SidebarLinks
            icon={<DashboardIcon />}
            sideBarOpen={sideBarOpen}
            text="Dashboard"
          />
          <SidebarLinks
            icon={<EmailIcon />}
            sideBarOpen={sideBarOpen}
            text="Newsletter"
          />
          <SidebarLinks
            icon={<LanguageIcon />}
            sideBarOpen={sideBarOpen}
            text="Website"
          />
          <SidebarLinks
            icon={<DashboardIcon />}
            sideBarOpen={sideBarOpen}
            text="Dashboard"
          />

          <div className="mt-16 flex items-center gap-x-2 ">
            <h1
              className={
                sideBarOpen ? "text-white font-semibold text-[18px] " : "hidden"
              }
            >
              Setting
            </h1>
            <div className="text-white">
              <SettingsIcon />
            </div>
          </div>

          <div className="mt-2 flex items-center gap-x-2 ">
            <h1
              className={
                sideBarOpen ? "text-white font-semibold text-[18px] " : "hidden"
              }
            >
              Logout
            </h1>
            <div className="text-white">
              <LogoutIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar