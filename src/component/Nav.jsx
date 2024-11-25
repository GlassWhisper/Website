import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
     return (
          <nav className="bg-navColor shadow-2xl w-full z-50 fixed">
               <div className="absolute w-60 bg-navColor flex items-center justify-center">
                    <img src={logo} alt="Logo" className="w-12" />
               </div>
               <div className="container py-2 mx-auto flex items-center justify-between relative">
                    <ul className="flex items-center mx-auto space-x-11 py-4 text-bg-register font-mono font-semibold tracking-wider">
                         <li>
                              <a href="/" className="hover:text-[#c8ced3] duration-500">
                                   Home
                              </a>
                         </li>
                         <li>
                              <a href="/about" className="hover:text-[#c8ced3] duration-500">
                                   About
                              </a>
                         </li>
                         <li>
                              <a href="/services" className="hover:text-[#c8ced3] duration-500">
                                   Services
                              </a>
                         </li>
                         <li>
                              <a href="/team" className="hover:text-[#c8ced3] duration-500">
                                   Team
                              </a>
                         </li>
                         <li>
                              <a href="/blog" className="hover:text-[#c8ced3] duration-500">
                                   Blog
                              </a>
                         </li>
                    </ul>
               </div>
          </nav>
     );
};

export default Navbar;
