import React from "react";
import headerLogo  from '../assets/images/header-logo.svg';
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";
import Image from "next/image";

const Nav = () => {


  return (
    <header className="px-20 py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <Image src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((items) => (
            <li key={items.label}>
              <a href={items.href} className="font-montserrat leading-normal text-lg text-slate-700">{items.label}</a>
            </li>

          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt={hamburger} width={25} height={25}></img>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
