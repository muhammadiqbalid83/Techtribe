"use client";

import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";

export default function RegisterModal() {
  const registerModal = useRegisterModal();
  //   const [isLoading, setIsloading] = useState(false);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Selamat Datang di Techtribe" subtitle="Daftar akun!" />
      <Input id="email" label="email" />
      <Input id="password" type="password" label="password" />
      <Input
        id="passowrdConfirmation"
        type="password"
        label="password confirmation"
      />
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
      isOpen={registerModal.isOpen}
      title="Daftar"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
