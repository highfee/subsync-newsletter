import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserNavbar = () => {
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

        <div className="hidden lg:block">Hi User</div>
        <div className="block lg:hidden cursor-pointer">
          <MenuIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
