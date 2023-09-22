"use client"
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  buttonVariants,
  InputField,
  SocialMediaButton,
} from "@/components/ui";
import AuthLayout from "@/app/layouts/AuthLayout";
// materiat ui icons
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
//formik
import { useFormik} from 'formik';
import { loginFormSchema } from "@/components/utils/formik";

const onSubmit = ()=>{
  alert('submitted')
}
const BrandLogin = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [passwordType, setPasswordType] = useState("password")

  const handlepassword = ()=>{
    if(showPassword == false){
      setShowPassword(!showPassword);
      setPasswordType("text")
    }else{
      setShowPassword(!showPassword);
      setPasswordType("password")
    }
  }

  const {values, errors, handleBlur, handleChange, handleSubmit, touched} = useFormik({
    initialValues:{
      email: "",
      password: ""
    },
    validationSchema :loginFormSchema ,
    onSubmit,
  })


  return (
    <AuthLayout>
      <div className="flex w-full h-[100vh]">
        <div className="flex-1  flex items-center justify-center">
          <div className="hidden md:block">
            <Image
              src="/images/brandRegister.svg"
              width="500"
              height="500"
              alt=""
              className="min-w-full max-h-[300px]"
            />
          </div>
        </div>
        <div className="flex-1  shadow-lg flex flex-col items-center ">
          <div className="w-full flex justify-center items-center mt-24 mb-[24px]">
            <h1 className="text-[40px] font-bold text-[#0B0087]">Sign in</h1>
          </div>
          <form onSubmit={handleSubmit} className="w-[90%] flex flex-col items-center">
            <InputField
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Email"
              placeholder="Enter your email"
              id="email"
              type="email"
            />
            {errors.email && touched.email ? <p className="text-red-500 text-[14px] w-[90%]">{errors.email}</p> : ""}
            
            <InputField
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur} 
              label="Password"
              placeholder="Enter your password"
              id="password"
              handlepassword = {handlepassword}
              icon={
                showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
              type={passwordType}
            />
            {errors.password && touched.password ? <p className="text-red-500 text-[14px] w-[90%]">{errors.password}</p> : ""}
            <div className="flex justify-between items-center w-[90%] mt-2">
              <div className="flex items-center">
                <p>Don’t have an account <span className="text-[#0B0087] font-semibold text-[15px]"> <Link href="/brand/register">  Sign up</Link></span> </p>
              </div>
              <div>
              <p className="text-[#0B0087] font-semibold text-[15px]"> <Link href="/brand/resetPassword"> Forget Password </Link> </p>
              </div>
            </div>
            <Button className="rounded-2xl w-[90%] text-xl md:text-2xl h-[50px] my-4">
            Sign in
            </Button>
            
          </form>

          <div className="flex items-center justify-between my-3">
                <div className="h-[1px] w-[20%] bg-[#D9D9D9]"></div>
                <h1 className="text-[20px] text-[#0B0087]">OR</h1>
                <hr className="bg-gray-100"/>
          </div>

          <SocialMediaButton text="sign up with Google" icon={<GoogleIcon/>}/>
          <SocialMediaButton text="sign up with Facebook" icon={<FacebookIcon/>}/>
        </div>
      </div>
    </AuthLayout>
  );
};

export default BrandLogin;
