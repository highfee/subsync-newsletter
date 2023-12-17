"use client";
import { useState } from "react";

import { signIn, useSession } from "next-auth/react";
import AuthLayout from "@/app/layouts/AuthLayout";
import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";

import { useFormik } from "formik";
import { loginFormSchema } from "@/components/utils/formik";

const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { push } = useRouter();
  const { data: session } = useSession();

  if (session && session?.user) {
    push("/user/");
  }

  const handleOAuthSignIn = (provider) => {
    signIn(provider);
  };

  const onSubmit = async () => {
    try {
      await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });
      push("/user/");
    } catch (error) {}
  };
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginFormSchema,
      onSubmit,
    });

  return (
    <AuthLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-10 gap-10 max-w-container mx-auto mb-20">
        <div className="shadow-md-inner h-full  items-center hidden md:flex">
          <Image src="/images/userLogin.svg" alt="" width="600" height="500" />
        </div>
        <div className="min-h-[calc(100vh-100px)] pt-16 md:pt-20 md:mx-10">
          <p className="text-center text-4xl md:text-5xl text-primary-bg font-bold">
            Sign In
          </p>
          <form className="mt-10 flex flex-col gap-10" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="mb-3 inline-block text-primary-bg font-bold"
              >
                Email
              </label>
              <Input
                className="p-4 h- rounded-3xl text-lg"
                placeholder="Enter Your Email Address"
                id="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="text-red-500 text-[14px] w-[90%] mt-1">
                  {errors.email}
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-3 inline-block text-primary-bg font-bold"
              >
                Password
              </label>
              <div className="relative">
                <Input
                  className="p-4 h- rounded-3xl text-lg"
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
              {errors.password && touched.password ? (
                <p className="text-red-500 text-[14px] w-[90%] mt-1">
                  {errors.password}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-between items-center flex-wrap gap-2">
              <p className="text-base ">
                Don&apos;t have an account{" "}
                <Link
                  href="/user/register"
                  className="text-primary-bg font-bold hover:underline"
                >
                  Sign up
                </Link>
              </p>
              <Link
                href="/user/resetPassword"
                className="text-primary-bg font-bold hover:underline"
              >
                Forget Password
              </Link>
            </div>
            <Button className="rounded-2xl w-full text-lg md:text-xl py-4">
              Sign in
            </Button>
          </form>

          <div className="mt-10 flex flex-col gap-8">
            <Button
              variant="outline"
              className="w-full text-lg md:text-xl border"
              onClick={(e) => {
                e.preventDefault();
                handleOAuthSignIn("google");
              }}
            >
              <GoogleIcon fontSize="larg" className="mr-1 " /> Sign in with
              Google
            </Button>
            <Button
              variant="outline"
              className="w-full text-lg md:text-xl border"
              onClick={(e) => {
                e.preventDefault();
                handleOAuthSignIn("facebook");
              }}
            >
              <FacebookIcon fontSize="larg" className="mr-1" /> Sign in with
              Facebook
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default UserLogin;
