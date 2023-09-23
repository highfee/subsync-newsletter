import React from 'react'
import { Button, InputField } from '@/components/ui'
import Image from 'next/image'

const UserVerifyPassword = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full h-[100vh]">
      <div className="flex flex-col justify-center items-center py-4">
        <Image
          src="/images/verifyPassword.svg"
          width="300"
          height="300"
          alt=""
          className="min-w-full max-h-[200px]"
        />
        <p className=' w-[200px] lg:w-[400px] text-[14px] text-center my-4'>An email has been sent to the provided email address above and copy the authentication code then past it in the field below</p>
      </div>
      <div className='w-[70%] relative'>
        <form className='w-[100%] flex flex-col items-center'>
          <div>
            <InputField
            label="Enter the code sent to you"
            type="number"
            id="code"
            placeholder="Enter the code sent to you"
            />
          </div>
          <Button className="rounded-[15px] w-[57%] text-xl md:text-2xl h-[50px] mt-8">
           Authenticate
          </Button>
        </form>
      </div>
    </div>
  );
}

export default UserVerifyPassword