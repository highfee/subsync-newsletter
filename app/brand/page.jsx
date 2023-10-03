"use client"
import React, {useState} from 'react'
import BrandLayout from '@/components/bransLayout/BrandLayout'
import Image from 'next/image'
import { Button } from '@/components/ui'

const BrandHome = () => {
  const [welcome, setWelcome] = useState(true)

  const handleWelcome = ()=>{
    if(welcome == true){
      setWelcome(false)
    }
  }
  return (
    <BrandLayout>
      
    </BrandLayout>
  );
}

export default BrandHome