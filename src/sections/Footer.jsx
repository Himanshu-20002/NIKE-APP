import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-between items-start  gap-20 flex-wrap max-lg:flex flex-col max-sm:p-5">
        <a href="/">
          <Image alt={"img"} src={footerLogo} width={150} height={46} />
        </a>
        <p className="mt-6 text-base leading-7 font-monstrate sm: max-w-sm text-white">
          Get shoes ready for the new term at your nearest Nike store. Fined
          Your perfect Size In Store. Get Rewards
        </p>
        <div className="flex item-center mt-3 gap-5">
          {socialMedia.map((icon ,i) => (
            <div key={i} className="flex items-center w-12 h-12 justify-center bg-white rounded-full">
              <Image alt={"img"} src={icon.src} width={24} height={24} />
            </div>
          ))}
        </div>
        <div className="flex flex-1 justify-between gap-20 flex-wrap lg:gap-10 ">
          {footerLinks.map((section ,i) => (
            <div key={i}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-montserrat text-base hover:text-slate-500 leading-normal cursor-pointer"
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <Image
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full"
          />
          <p>Copyright. All rights reserved.</p>
         </div>
         <div>
            <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
