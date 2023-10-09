import React from "react";

import { IconType } from "react-icons";

export default function Button({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative w-full rounded-lg hover:opacity-80 transition disabled:opacity-90 disabled:cursor-not-allowed  ${
        outline ? "bg-white" : "bla"
      }
  ${outline ? "border-black" : "bla"}
  ${outline ? "text-black" : "text-white"}
  ${small ? "text-sm" : "text-md"}
  ${small ? "py-1" : "py-3"}
  ${small ? "font-light" : "font-semibold"}
  ${small ? "border-[1px]" : "border-2"}`}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
}
