import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import MenuIcon from "@mui/icons-material/Menu";

import { navLinks } from "@/lib/utils";

const GeneralNavbar = () => {
  return (
    <div className="b shadow-sm p-4 sticky top-0 bg-white z-50">
      <div className="m max-w-container mx-auto flex justify-between items-center">
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
            <Link href="/user/login">Sign in</Link>
            <Button asChild variant="outline" size="sm" className="text-20px">
              <Link href="/user/register">Sign up</Link>
            </Button>
          </div>
        </div>
        <div className="block lg:hidden cursor-pointer">
          <MenuIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default GeneralNavbar;
