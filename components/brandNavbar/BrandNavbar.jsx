import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import SubjectIcon from "@mui/icons-material/Subject";
import ProfileButton from "../ProfileButton";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const BrandNavbar = ({
  sideBarOpen,
  setSideBarOpen,
  handleSibeBar,
  mobileSidebar,
  setMobileSidebar,
  handleMobileSidebar,
}) => {
  const { data: session } = useSession();
  const userName = session?.user.name.split(" ")[0];
  return (
    <div className="sticky top-0 z-10 transition-all ease-in-out duration-500">
      <div className=" w-full bg-white  px-4 py-4 shadow-md relative transition-all ease-in-out duration-500">
        <div
          onClick={handleMobileSidebar}
          className="block lg:hidden absolute top-2 right-4"
        >
          {mobileSidebar ? <ClearIcon /> : <SubjectIcon />}
        </div>
        <div className="flex justify-between items-center mx-8">
          <div className="flex items-center gap-5">
            <Link href="/brand">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width="214"
                height="120"
                priority
              />
            </Link>
            {session?.user.isBrand ? (
              <Link
                href="/user?brand=false"
                className={session?.user.isBrand ? "block" : "hidden"}
              >
                Switch to Client
              </Link>
            ) : (
              <Link
                href="/brand/welcome?brand=true"
                className={session?.user.isBrand ? "hidden" : "block"}
              >
                register a brand
              </Link>
            )}
          </div>
          <ProfileButton signOut={signOut} userName={userName} />
        </div>
      </div>
    </div>
  );
};

export default BrandNavbar;
