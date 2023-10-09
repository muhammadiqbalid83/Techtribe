"use client";

import React from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

export default function Menu() {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  return (
    <>
      <div className="flex gap-2">
        <MenuItem label="Log In" onClick={loginModal.onOpen} />
        <MenuItem label="Sign Up" onClick={registerModal.onOpen} />
      </div>
    </>
  );
}
