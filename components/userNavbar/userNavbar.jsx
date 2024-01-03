"use client";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const UserNavbar = () => {
  const { data: session } = useSession();
  return (
    <div className="b shadow-sm p-4 sticky top-0 bg-white z-50">
      <div className="m max-w-container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width="214"
              height="120"
              priority
            />
          </Link>

          <Link href="/">Register brand</Link>
        </div>

        <div className="flex gap-3">
          <div className="hidden lg:block">
            Hi {session?.user.name.split(" ")[0]}
          </div>
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
        <div className="block lg:hidden cursor-pointer">
          <Sheet>
            <SheetTrigger>
              <MenuIcon fontSize="large" />
            </SheetTrigger>
            <SheetContent>
              <Link href="/">Home</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
