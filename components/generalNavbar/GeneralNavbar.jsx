import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

import { navLinks } from "@/lib/utils";

const GeneralNavbar = () => {
  return (
    <div className="b shadow-sm py-4">
      <div className="m max-w-container mx-auto flex justify-between items-center">
        <div>
          <Image src="./images/logo.svg" alt="logo" width="214" height="120" />
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
            <Link href="">Sign in</Link>
            <Button asChild variant="outline" size="sm">
              <Link href="">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralNavbar;
