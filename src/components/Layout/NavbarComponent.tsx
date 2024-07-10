"use client";

import React from "react";
import LogoMima from "../ui/LogoMima";
import { useRouter } from "next/navigation";
import { Link } from "next-view-transitions";
const NavbarComponent = () => {
  const router = useRouter();

  return (
    <header className="w-full h-auto fixed top-0 left-0 bg-[#ffffff80] backdrop-blur-lg z-10">
      <nav className="w-full h-full container mx-auto flex items-center justify-between gap-5 py-5">
        <LogoMima action={() => router.push("/")} className="cursor-pointer" />

        <ul className="hidden md:flex items-center gap-5 uppercase ">
          <li>
            <Link href="/quien-soy">Quien soy</Link>
          </li>
          <li>Mis Vestidos</li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarComponent;
