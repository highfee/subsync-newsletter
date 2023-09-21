import AuthLayout from "@/app/layouts/AuthLayout";
import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "next/image";
import Link from "next/link";

const UserLogin = () => {
  return (
    <AuthLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-10 gap-10 max-w-container mx-auto mb-20">
        <div className="shadow-md-inner h-full  items-center hidden md:flex">
          <Image src="/images/userLogin.svg" alt="" width="600" height="500" />
        </div>
        <div className="min-h-[calc(100vh-100px)] pt-16 md:pt-20">
          <p className="text-center text-4xl md:text-5xl text-primary-bg font-bold">
            Sign In
          </p>
          <form className="mt-10 flex flex-col gap-10">
            <div>
              <label
                htmlFor="email"
                className="mb-3 inline-block text-primary-bg font-bold"
              >
                Email
              </label>
              <Input
                className="p-5 h- rounded-3xl text-xl"
                placeholder="Enter Your Email Address"
                id="email"
                type="email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-3 inline-block text-primary-bg font-bold"
              >
                Password
              </label>
              <Input
                className="p-5 h- rounded-3xl text-xl"
                placeholder="Enter Your password"
                id="password"
                type="password"
              />
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
            <Button className="rounded-2xl w-full text-xl md:text-2xl h-[65px]">
              Sign in
            </Button>
          </form>
          <div />
          <div className="mt-10 flex flex-col gap-8">
            <Button variant="outline" className="w-full text-xl md:text-2xl">
              <GoogleIcon
                fontSize="larg"
                className="mr-1 text-2xl md:text-4xl"
              />{" "}
              Sign in with Google
            </Button>
            <Button variant="outline" className="w-full text-xl md:text-2xl">
              <FacebookIcon
                fontSize="larg"
                className="mr-1 text-2xl md:text-4xl"
              />{" "}
              Sign in with Facebook
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default UserLogin;
