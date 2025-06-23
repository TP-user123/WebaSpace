import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
   <footer className="mt-auto bg-[#F4EBDC] text-gray-800 border-t border-gray-200 shadow-inner mt-0 ">
  <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
    {/* Logo & Brand */}
    <div>
      <h2 className="text-3xl font-bold text-[#FF725E] mb-2">WebaSpace</h2>
      <p className="text-sm text-gray-600 max-w-sm">
        Building fast, responsive, and beautiful websites to take your business online.
      </p>
    </div>

    {/* Social Icons */}
    <div className="flex gap-4 text-white">
      <a href="#" className="bg-[#FF725E] p-3 rounded-full hover:bg-[#ff5d46] transition">
        <FaInstagram />
      </a>
      <a href="#" className="bg-[#FF725E] p-3 rounded-full hover:bg-[#ff5d46] transition">
        <FaFacebookF />
      </a>
      <a href="#" className="bg-[#FF725E] p-3 rounded-full hover:bg-[#ff5d46] transition">
        <FaLinkedinIn />
      </a>
    </div>
  </div>

  <div className="text-center text-sm text-gray-500 border-t border-gray-300 py-4">
    © {new Date().getFullYear()} <span className="text-[#FF725E] font-medium">WebaSpace</span>. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
