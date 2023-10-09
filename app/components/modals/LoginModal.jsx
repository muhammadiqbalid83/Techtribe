"use client";

import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";

export default function LoginModal() {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  //   const [isLoading, setIsloading] = useState(false);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Masuk ke akun kamu" subtitle="Daftar akun!" />
      <Input id="email" label="email" />
      <Input id="password" type="password" label="password" />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4">
      <hr />
      <Button
        outline
        label="Lanjutkan dengan Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <div className="justify-center flex gap-2 text-neutral-500 items-center mt-4 font-light">
        <div>Apakah kamu telah memiliki akun?</div>
        <div
          className="text-neutral-800 cursor-pointer hover:underline"
          onClick={registerModal.onClose}
        >
          Masuk
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      //   disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Masuk"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
