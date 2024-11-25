// import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
     return (
          <nav className="bg-navColor -400 py-4">
               <div className="container mx-auto flex items-center justify-between">
                    <img src={logo} alt="Logo" className="w-16" />
                    <ul className="flex space-x-8">
                         <li>
                              <a href="/" className="hover:text-white">
                                   Home
                              </a>
                         </li>
                         <li>
                              <a href="/about" className="hover:text-white">
                                   About
                              </a>
                         </li>
                         <li>
                              <a href="/services" className="hover:text-white">
                                   Services
                              </a>
                         </li>
                         <li>
                              <a href="/team" className="hover:text-white">
                                   Team
                              </a>
                         </li>
                         <li>
                              <a href="/blog" className="hover:text-white">
                                   Blog
                              </a>
                         </li>
                    </ul>
               </div>
          </nav>
     );
};

export default Navbar;
