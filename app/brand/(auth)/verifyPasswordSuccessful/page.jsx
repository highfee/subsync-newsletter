

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui'
import Link from 'next/link'

const VerifyPasswordSuccessful = () => {
  return (
    <div className='flex justify-center items-center flex-col w-full h-[100vh]'>
      <div>
      <Image
      src="/images/vpasssuccess.svg"
      width="500"
      height="500"
      alt=""
      className="min-w-full max-h-[200px]"
      />
      </div>
      <h1 class=" w-[200px] my-4 font-semibold text-[20px] lg:w-[400px] text-gray-800 text-center">Verification Successful</h1>
      <Button className="w-full md:w-[359px] bg-[#A90623]" asChild size="md">
            <Link href="">Continue</Link>
          </Button>
    </div>
  )
}

export default VerifyPasswordSuccessful