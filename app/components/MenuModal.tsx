"use client";

import { useEffect, useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

interface Menu {
  name: string;
}
const MenuModal = ({ menuList }: { menuList: Menu[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  useEffect(() => {}, []);
  return (
    <div>
      <div className="xl:hidden text-3xl" onClick={toggleMenu}>
        <IoMenu />
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/85 flex flex-col items-center justify-center transition-all duration-300 ease-in-out -translate-x-full  ${
          isOpen ? "visible opacity-1 translate-x-0" : "invisible"
        }`}
      >
        <div className="xl:hidden text-3xl absolute top-8 right-4" onClick={toggleMenu}>
          <IoCloseSharp />
        </div>
        <div className="menu-list flex flex-col gap-4">
          {menuList.map((menu) => {
            return (
              <Link className="text-xl" href={"#" + menu.name} key={menu.name}>
                {menu.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
