"use client";
import React, { useState } from "react";
import BrandLayout from "@/components/bransLayout/BrandLayout";
import Image from "next/image";
import { Button } from "@/components/ui";
import Link from "next/link";
import Modal from "@/components/ui/modal";
import BrandForm from "@/components/ui/BrandForm";
import { signOut, useSession } from "next-auth/react";

/**
 * Renders a welcome screen for a brand.
 *
 * @returns {JSX.Element} The welcome screen component.
 */
const BrandWelcome = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((prevModal) => !prevModal);
  };

  return (
    <BrandLayout>
      <div className="w-full relative">
        <div className="flex flex-col items-center gap-y-2 mt-4 w-full">
          <div className="mt-12">
            <Image
              src="/images/brandWelcome.svg"
              width={500}
              height={500}
              alt="Welcome image"
              className="min-w-full max-h-[300px]"
            />
          </div>
          <div className="flex flex-col gap-y-2 items-center">
            <h1 className="text-center text-20 text-[#0B0087] font-semibold">
              Welcome
            </h1>
            <p className="text-center text-15 w-[250px] lg:w-[400px]">
              Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem
              Ipsum is simply dummy Lorem Ipsum is simply dummy
            </p>

            <Button
              type="button"
              onClick={handleModal}
              className="rounded-[15px] w-[50%] text-md md:text-lg h-[50px] mt-8"
            >
              Register Brand
            </Button>
          </div>
        </div>

        {/* modal section*/}
        {modal && (
          <Modal modal={modal} setModal={setModal} handleModal={handleModal}>
            <BrandForm useSession={useSession} />
          </Modal>
        )}
      </div>
    </BrandLayout>
  );
};

export default BrandWelcome;
