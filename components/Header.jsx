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
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link
            href="/"
            className="relative w-[100px] h-[40px] xl:w-[120px] xl:h-[40px] z-[60]"
          >
            <Image
              src="/assets/logo.svg"
              fill
              alt=""
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
