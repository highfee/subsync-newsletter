import GeneralFooter from "@/components/generalFooter/GeneralFooter";
import GeneralNavbar from "@/components/generalNavbar/GeneralNavbar";
import { Button } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <GeneralNavbar />
      <div className="flex flex-col items-center justify-center gap-20 h-[70vh]">
        <Image src="/images/auth.svg" alt="" width="400" height="400" />
        <div className="flex gap-6">
          <Button className="hover:bg-transparent hover:text-black ">
            <Link href="/user/register">Register as User</Link>
          </Button>
          <Button variant="outline">
            <Link href="/user/register?brand=true">Register as a Brand</Link>
          </Button>
        </div>
      </div>
      <GeneralFooter />
    </div>
  );
};

export default page;
