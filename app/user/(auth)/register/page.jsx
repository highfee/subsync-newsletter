"use client";
import { useState } from "react";
import AuthLayout from "@/app/layouts/AuthLayout";
import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useFormik } from "formik";
import { registerFormSchema } from "@/components/utils/formik";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Loading from "@/components/Loading";

const UserRegistration = () => {
  const { push } = useRouter();
  const { get } = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);

  const brand = get("brand");

  const mutation = useMutation(async (data) => {
    const res = await axios.post("/api/users/auth/register", data);
    try {
      if (res.status == 200) {
        await signIn("credentials", {
          redirect: false,
          email: data.email,
          password: data.password,
        });
        push(!brand ? "/user/categoryPage" : "/brand/welcome");
      }
    } catch (error) {}
  });

  const onSubmit = () => {
    mutation.mutate({ ...values, isBrand: brand ? true : false });
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: registerFormSchema,
      onSubmit,
    });

  return (
    <AuthLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-10 gap-10 max-w-container mx-auto mb-20">
        <div className="shadow-md-inner h-full  items-center hidden lg:flex">
          <Image
            src="/images/userRegister.svg"
            alt=""
            width="600"
            height="500"
          />
        </div>
        <div className="min-h-[calc(100vh-100px)] pt-16 md:pt-20 w-full lg:mx-10">
          <p className="text-center text-4xl md:text-5xl text-primary-bg font-bold">
            Sign Up
          </p>
          <form className="mt-10 flex flex-col gap-10" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="mb-3 inline-block text-primary-bg font-bold"
              >
                Fullname
              </label>
              <Input
                className="p-3 rounded-xl text-lg"
                placeholder="Enter Your Fullname"
                id="name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.fullname && touched.fullname && (
                <p className="text-red-500 text-[14px] w-[90%] mt-1">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-3 inline-block text-primary-bg font-bold"
              >
                Email
              </label>
              <Input
                className="p-3 h- rounded-xl text-lg"
                placeholder="Enter Your Email Address"
                id="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-[14px] w-[90%] mt-1">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-3 inline-block text-primary-bg font-bold"
              >
                Password
              </label>
              <div>
                <div className="relative">
                  <Input
                    className="p-3 h- rounded-xl text-lg"
                    placeholder="Enter Your password"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 right-5"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </div>
                </div>
                {errors.password && touched.password && (
                  <p className="text-red-500 text-[14px] w-[90%] mt-1">
                    {errors.password}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-3 inline-block text-primary-bg font-bold"
              >
                Confirm Password
              </label>
              <div>
                <div className="relative">
                  <Input
                    className="p-3 h- rounded-xl text-lg"
                    placeholder="Confirm password"
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 right-5"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </div>
                </div>
                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="text-red-500 text-[14px] w-[90%] mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center flex-wrap gap-2">
              <p className="text-base ">
                Already have an account{" "}
                <Link
                  href="/user/login"
                  className="text-primary-bg font-bold hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
            <Button className="rounded-2xl w-full tex-lg md:text-xl p-3">
              {mutation.isLoading ? <Loading /> : "Sign up"}
            </Button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default UserRegistration;
