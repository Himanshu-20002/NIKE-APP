import React from "react";
import { headerLogo } from "../assets/images";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29}></img>
        </a>
        <ul className="flex flex-1 justify-center tems-center gap-16 max-lg:hidden">
            <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
