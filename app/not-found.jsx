import GeneralNavbar from "@/components/generalNavbar/GeneralNavbar";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <main>
      <GeneralNavbar />
      <div className="flex justify-center items-center h-[calc(100vh-200px)] ">
        <div>
          <Image
            src="./images/404.svg"
            alt="not found"
            width={804}
            height={534}
            className=" w-[400px] lg:w-[600px]"
          />
          <p className="text-center mt-20">
            This page is not found, please check the URL and try again or{" "}
            <Link href="/" className="underline underline-offset-4">
              GO BACK HOME
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
