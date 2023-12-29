"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import MenuIcon from "@mui/icons-material/Menu";
import {Sheet, SheetContent, SheetTrigger} from "../ui/sheet"

import { navLinks } from "@/lib/utils";
import { useSession, signOut } from "next-auth/react";

const GeneralNavbar = () => {
  const { data: session } = useSession();

  return (
    <div className="b shadow-sm p-4 sticky top-0 bg-white z-50">
      <div className="max-w-container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width="214"
              height="120"
              priority
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <div className="flex gap-10 items-center">
            {navLinks.map((link, index) => {
              return (
                <Link href={link.link} key={index}>
                  {link.name}
                </Link>
              );
            })}
            {session && session?.user ? (
              <p>hello</p>
            ) : (
              // <p>Hi {session?.user.fullname.split(" ")[0]}</p>
              <>
                <Link href="/user/login">Sign in</Link>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="text-20px"
                >
                  <Link href="/user/authInter">Sign up</Link>
                </Button>
              </>
            )}
            {session && session.user && (
              <p
                onClick={() => {
                  signOut();
                }}
                className="cursor-pointer"
              >
                Sign out
              </p>
            )}
          </div>
        </div>
        <div className="block lg:hidden cursor-pointer">
          <Sheet>
            <SheetTrigger>
              <MenuIcon fontSize="large" />
            </SheetTrigger>
            <SheetContent>
              <div className=" flex flex-col gap-y-4 items-start mt-6">
                {navLinks.map((link, index) => {
              return (
                <Link href={link.link} key={index}>
                  <Button
                  size="sm"
                  variant="ghost"
                  >
                    {link.name}
                  </Button>
                  
                </Link>
              );
            })}
            <div className="ml-8 space-y-4 flex flex-col mt-6">
              {session && session?.user ? (
              <p>hello</p>
            ) : (
              // <p>Hi {session?.user.fullname.split(" ")[0]}</p>
              <>
                <Link href="/user/login">Sign in</Link>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="text-20px"
                >
                  <Link href="/user/authInter">Sign up</Link>
                </Button>
              </>
            )}
            {session && session.user && (
              <p
                onClick={() => {
                  signOut();
                }}
                className="cursor-pointer"
              >
                Sign out
              </p>
            )}
            </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default GeneralNavbar;
