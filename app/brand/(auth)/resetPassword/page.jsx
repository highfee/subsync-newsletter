"use client"
import React, {useState} from 'react'
import { useFormik } from 'formik'
import { Button, InputField } from '@/components/ui'
import {resetPasswordSchema} from "@/components/utils/formik";
//material ui icons
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';


const onSubmit = ()=>{
  alert('submitted')
}
const ResetPassword = () => {
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
      password: "",
      confirmPassword: ""
    },
    validationSchema :resetPasswordSchema ,
    onSubmit,
  })

  return (
    <div className='flex justify-center items-center flex-col w-full h-[100vh]'>
      <div className='flex flex-col justify-center items-center gap-y-3 mb-12 w-[80%]'>
        <h1 className='text-[24px] font-semibold'>Reset Password</h1>
        <p className='text-[14px] w-[400px] text-center'>Enter a new password the password should nt be the same as you previous password</p>
      </div>
      <div className='w-[80%] relative'>
        <form onSubmit={handleSubmit} className='w-[100%] flex flex-col items-center'>
          <div>
            <InputField
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur} 
              label="Password"
              id="password"
              placeholder="Enter a new password"
              handlepassword = {handlepassword}
              icon={
                showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
              type={passwordType}
            />
            {errors.password && touched.password ? <p className="text-red-500 text-[14px] w-[90%]">{errors.password}</p> : ""}
          </div>
          <div>
            <InputField
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur} 
              label="Confirm Password"
              id="confirmPassword"
              placeholder="Confirm your new password"
              handlepassword = {handlepassword}
              icon={
                showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
              type={passwordType}
            />
            {errors.confirmPassword && touched.confirmPassword ? <p className="text-red-500 text-[14px] w-[90%]">{errors.confirmPassword}</p> : ""}
          </div>
          <Button className="rounded-[15px] w-[50%] text-xl md:text-2xl h-[50px] mt-8">
            Sign in
            </Button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword