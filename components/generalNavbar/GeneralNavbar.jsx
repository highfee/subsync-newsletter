import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

import { navLinks } from "@/lib/utils";

const GeneralNavbar = () => {
  return (
    <div className="b shadow-sm p-4">
      <div className="m max-w-container mx-auto flex justify-between items-center">
        <div>
          <Image
            src="/images/logo.svg"
            alt="logo"
            width="214"
            height="120"
            priority
          />
        </div>
        <div>
          <div className="l flex gap-10 items-center">
            {navLinks.map((link, index) => {
              return (
                <Link href={link.link} key={index}>
                  {link.name}
                </Link>
              );
            })}
            <Link href="2">Sign in</Link>
            <Button asChild variant="outline" size="sm" className="text-20px">
              <Link href="">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralNavbar;
