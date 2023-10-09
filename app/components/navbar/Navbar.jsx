"use client";

import Container from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";

export default function Navbar() {
  return (
    <div className="w-full shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex justify-between">
            <Logo />
            <Search />
            <Menu />
          </div>
        </Container>
      </div>
    </div>
  );
}
