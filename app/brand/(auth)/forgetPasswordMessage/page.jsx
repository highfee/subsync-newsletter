import React from 'react'
import Image from 'next/image'

const ResetPassword = () => {
  return (
    <div className='flex justify-center items-center flex-col w-full h-[100vh]'>
      <div>
      <Image
      src="/images/resetEmail.svg"
      width="500"
      height="500"
      alt=""
      className="min-w-full max-h-[300px]"
      />
      </div>
      <p class=" w-[200px] my-4 lg:w-[400px] text-gray-800 text-center">An email has been sent to you with a password reset link follow the link to change you password</p>
    </div>
  )
}

export default ResetPassword