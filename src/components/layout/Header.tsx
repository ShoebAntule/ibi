import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="fixed z-[1000] bg-[rgba(23,23,23,0.9)] px-10 py-5 top-0 inset-x-0 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-[#3ED5DD]">
        CyberEz
      </Link>

      <nav className="flex gap-[30px] max-sm:hidden">
        <Link
          to="#"
          className="text-white no-underline text-base transition-[color] duration-300 hover:text-[#3ED5DD]"
        >
          News
        </Link>
        <Link
          to="#"
          className="text-white no-underline text-base transition-[color] duration-300 hover:text-[#3ED5DD]"
        >
          FAQ
        </Link>
        <Link
          to="#"
          className="text-white no-underline text-base transition-[color] duration-300 hover:text-[#3ED5DD]"
        >
          Contact us
        </Link>
        <Link
          to="#"
          className="text-white no-underline text-base transition-[color] duration-300 hover:text-[#3ED5DD]"
        >
          Our Menu
        </Link>
      </nav>
    </header>
  );
};
