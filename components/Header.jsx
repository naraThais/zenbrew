"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="absolute top-[40px] left-0 right-0 z-[60]">
      <div className="container mx-auto">
        <div>
          {/* logo */}
          <Link href="/">
            <Image src="/assets/logo.svg" alt="" className="object-contain" />
          </Link>
          <p>HEADER</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
