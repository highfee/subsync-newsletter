import React from 'react'

const SidebarLinks = ({icon, text, sideBarOpen}) => {
  return (
    <div className="flex gap-x-2 items-center my-2">
        <div className={sideBarOpen ? "text-white" : "text-[20px] text-white"}>
            {icon}
        </div>
        <div className={sideBarOpen ? "block font-semibold text-[18px] transition-all ease-out duration-500 text-white":"hidden transition-all ease-in duration-500"}>
            {text}
        </div>
    </div>
  )
}

export default SidebarLinks