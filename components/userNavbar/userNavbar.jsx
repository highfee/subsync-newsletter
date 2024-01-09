"use client";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import ProfileButton from "../ProfileButton";

const UserNavbar = () => {
  const { data: session } = useSession();

  const userName = session?.user.name.split(" ")[0];
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
          {session?.user.isBrand ? (
            <Link href="/user?brand=false" className="hidden lg:block">
              Switch to Client
            </Link>
          ) : (
            <Link href="/brand/welcome?brand=true" className="hidden lg:block">
              register a brand
            </Link>
          )}
        </div>

        <div className="flex gap-3">
          <div className="hidden lg:block">
            Hi <ProfileButton signOut={signOut} userName={userName} />
          </div>
        </div>
        <div className="block lg:hidden cursor-pointer">
          <ProfileButton signOut={signOut} userName={userName} />
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
