"use client";

import { useEffect, useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

const MenuModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  useEffect(()=>{
    

  },[])
  return (
    <div>
      <div className="xl:hidden text-3xl" onClick={toggleMenu}>
        <IoMenu />
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/85 flex flex-col items-center justify-center modal ${
          isOpen ? "modalOpen" : ""
        }`}
      >
        <div className="xl:hidden text-3xl absolute top-8 right-4" onClick={toggleMenu}>
          <IoCloseSharp />
        </div>
        <ul className="text-2xl">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuModal;
