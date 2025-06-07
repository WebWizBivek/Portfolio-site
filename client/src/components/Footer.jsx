import React from "react";
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="about" className="bg-[#6E07F3] text-white py-12 px-6 h-[40vh]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        <p className="text-2xl md:text-3xl font-semibold">
          Pixel by pixel, line by line — crafted with code and creativity
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-gray-200 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-gray-200 transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-gray-200 transition"
          >
            <AiFillInstagram />
          </a>
          <a
            href="#"
            aria-label="Gmail"
            className="hover:text-gray-200 transition"
          >
            <BiLogoGmail />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="hover:text-gray-200 transition"
          >
            <RxGithubLogo />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-200 mt-4">
          © 2025 Bivek Singha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
