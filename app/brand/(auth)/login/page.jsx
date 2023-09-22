import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'; 
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { InputField, Button} from '@/components/ui';



const BrandLogin = () => {
  return (
    <div className='flex w-full h-[100vh]'>
      <div className='flex-1  flex items-center justify-center'>
        <div className="hidden md:block">
          <Image
            src="/images/brandLogin.svg"
            width="500"
            height="500"
            alt=""
            className="min-w-full max-h-[300px]"
          />
        </div>
      </div>
      <div className='flex-1  shadow-lg flex flex-col items-center '>
        <div className='w-full flex justify-center items-center mt-24 mb-[24px]'>
          <h1 className='text-[40px] font-bold text-[#0B0087]'>Sign in</h1>
        </div>
        <form className='w-[90%] flex flex-col items-center'>
          <InputField label="Email" placeholder="Enter your email" id="email" type="email"/>
          <InputField label="Password" placeholder="Enter your password" id="password" type="password" icon={<VisibilityOffIcon/>} />

          <div className=' flex justify-between items-center my-[15px] w-[90%]'>
            <div className='flex items-center'>
              <p className='text-[15px] text-[#000000] pr-1'>Don’t have an account </p>
              <Link href="/brand/register">
                <span className='text-[15px] text-[#0B0087] font-semibold'> Sign up</span>
              </Link>
            </div>
            <div>
              <Link href="/brand/resetPassword">
                <span className='text-[15px] text-[#0B0087] font-semibold'> Forget Password</span>
              </Link>
            </div>
          </div>

          <Button className="w-full md:w-[359px]" asChild size="md">
            Explore now
          </Button>
        </form>
      </div>
    </div>
  )
}

export default BrandLogin