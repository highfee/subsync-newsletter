"use client"
import React,{useState} from 'react'
import Sidebar from '../sidebarcomponent/Sidebar'
import BrandNavbar from '../brandNavbar/BrandNavbar'
import Mobileidebar from '../mobileSidebar/Mobileidebar'

const BrandLayout = ({children}) => {
    const [sideBarOpen, setSideBarOpen] = useState(true)
    const [mobileSidebar, setMobileSidebar] = useState(false)

    const handleMobileSidebar = ()=>{
        if(mobileSidebar == false){
            setMobileSidebar(!mobileSidebar)
        }else{
            setMobileSidebar(!mobileSidebar)
        }
    }

    const handleSibeBar =()=>{
        if(sideBarOpen == true){
            setSideBarOpen(!sideBarOpen)
        }else{
            setSideBarOpen(!sideBarOpen)
        }
    }
  return (
    <div className='flex  w-full overflow-x-hidden'>
      <Sidebar 
        handleMobileSidebar={handleMobileSidebar} 
        mobileSidebar={mobileSidebar} 
        setMobileSidebar={setMobileSidebar} 
        handleSibeBar={handleSibeBar} 
        sideBarOpen={sideBarOpen} 
        setSideBarOpen={setSideBarOpen}
        />
        {/*  mobile navigation*/}
     <div className='absolute top-0 left-0'>
        <Mobileidebar  
        handleMobileSidebar={handleMobileSidebar} 
        mobileSidebar={mobileSidebar} 
        setMobileSidebar={setMobileSidebar} 
        />
     </div>
      <div className={sideBarOpen ? "w-full lg:w-[80%] flex flex-col" : " w-[90%] flex flex-col"}>
      <BrandNavbar 
        handleMobileSidebar={handleMobileSidebar} 
        mobileSidebar={mobileSidebar} 
        setMobileSidebar={setMobileSidebar} 
        handleSibeBar={handleSibeBar} 
        sideBarOpen={sideBarOpen} 
        setSideBarOpen={setSideBarOpen}/>
      <div className='mt-4 '>
        {children}
      </div>
      </div>
    </div>
  )
}

export default BrandLayout