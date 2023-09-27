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
import { registerFormSchema } from "@/components/utils/formik";

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
      fullname:"",
      email: "",
      password: "",
      confirmPassword:""
    },
    validationSchema :registerFormSchema ,
    onSubmit,
  })


  return (
    <AuthLayout>
      <div className="flex w-full h-[700px] max-w-container mx-auto overflow-x-hidden">
        <div className="flex-1  flex items-center justify-center">
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
        <div className="lg:flex-1  w-full  shadow-lg flex flex-col items-center">
          <div className="w-full flex justify-center items-center mt-[30px] mb-[24px]">
            <h1 className="text-[40px] font-bold text-[#0B0087]">Sign up</h1>
          </div>
          <form onSubmit={handleSubmit} className="w-[90%] flex flex-col items-center">
            <InputField
              value={values.fullname}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Fullname"
              placeholder="Enter your fullname"
              id="fullname"
              type="text"
            />
            {errors.fullname && touched.fullname ? <p className="text-red-500 text-[14px] w-[90%]">{errors.fullname}</p> : ""}

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

            <InputField
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur} 
              label="Confirm Password"
              placeholder="Confirm your password"
              id="confirmPassword"
              handlepassword = {handlepassword}
              icon={
                showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
              type={passwordType}
            />
            {errors.confirmPassword && touched.confirmPassword ? <p className="text-red-500 text-[14px] w-[90%]">{errors.confirmPassword}</p> : ""}


            <div className="flex justify-between items-center w-[90%] mt-2">
              <div className="flex items-center">
                <p>Already have an account <span className="text-[#0B0087] font-semibold text-[15px]"> <Link href="/brand/login">  Sign in</Link></span> </p>
              </div>
              <div>
              <p className="text-[#0B0087] font-semibold text-[15px]"> <Link href="/brand/resetPassword"> </Link> </p>
              </div>
            </div>

            <Button className="rounded-2xl w-[90%] text-xl md:text-2xl h-[50px] my-4">
            Sign up
            </Button>
          </form>


        </div>
      </div>
    </AuthLayout>
  );
};

export default BrandLogin;
