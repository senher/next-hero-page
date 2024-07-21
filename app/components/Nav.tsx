"use client";
import Link from "next/link";
import Image from "next/image";
import { SlArrowDown } from "react-icons/sl";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import MenuModal from "./MenuModal";

export default function Nav() {
  const menuList = [
    {
      name: "Learn",
    },
    {
      name: "Build",
    },
    {
      name: "Network",
    },
    {
      name: "Community",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const toggleMenu = () => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 300); // Duration should match the animation duration
    } else {
      setIsOpen(true);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300); // Reset animating state after animation
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);
  return (
    <header className="fixed z-50 top-0 w-full">
      <div className="h-9 flex items-center justify-center bg-gradient-to-r from-[#38abd9] to-[#2a57f6] text-xs sm:text-base">
        <Link href={"/"}>Breakpoint 2023 - New City. New Vibes - Get Early Access &gt;</Link>
      </div>
      <nav className="h-16 bg-black/80 flex items-center justify-center px-4">
        <div className="max-w-5xl w-full flex items-center">
          <Image src="/logo.png" className="w-32 sm:w-48" alt="Solana" width={182} height={27} />
          <div className="menu-list hidden xl:flex items-center ml-auto gap-x-8">
            {menuList.map((menu) => {
              return (
                <Link
                  className="text-gray-400 items-center flex gap-x-2"
                  href={"#" + menu.name}
                  key={menu.name}
                >
                  {menu.name}
                  <SlArrowDown />
                </Link>
              );
            })}
          </div>
        </div>
        <MenuModal menuList={menuList} />
      </nav>
    </header>
  );
}
