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
//formik
import { useFormik} from 'formik';
import { loginFormSchema } from "@/components/utils/formik";

const onSubmit = ()=>{
  console.log('submitted')
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
              src="/images/brandLogin.svg"
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
            <div className="flex justify-between items-center w-[90%]">
              <div className="flex items-center">
                <p>Don’t have an account <span className="text-[#0B0087] font-semibold text-[15px]"> <Link href="/brand/register">  Sign up</Link></span> </p>
              </div>
              <div>
              <p className="text-[#0B0087] font-semibold text-[15px]"> <Link href="/brand/resetPassword"> Forget Password </Link> </p>
              </div>
            </div>

            <Button className="w-full md:w-[359px]" asChild size="md">
            Explore now
            </Button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default BrandLogin;
