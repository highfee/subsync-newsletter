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
      <div className="w-full">
        {welcome ? (
          <div className="flex flex-col items-center gap-y-2 w-[100%]">
            <div className="mt-3">
              <Image
                src="/images/brandWelcome.svg"
                width="500"
                height="500"
                alt=""
                className="min-w-full max-h-[300px]"
              />
            </div>
            <div className="flex flex-col gap-y-2 items-center">
              <h1 className="text-center text-[20px] text-[#0B0087] font-semibold">
                Welcome
              </h1>
              <p className="text-center text-[15px] w-[250px] lg:w-[400px]">
                Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem
                Ipsum is simply dummy Lorem Ipsum is simply dummy
              </p>
              <Button onClick={handleWelcome} className="rounded-[15px] w-[50%] text-xl md:text-2xl h-[50px] mt-8">
                Register Brand
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-y-2"></div>
        )}
      </div>
    </BrandLayout>
  );
}

export default BrandHome