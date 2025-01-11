import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Navbar = () => {
     return (
          <nav className="bg-navColor shadow-2xl w-full z-50 fixed">
               <div className="absolute w-60 bg-navColor flex items-center justify-center">
                    <img src={logo} alt="Logo" className="w-12" />
               </div>
               <div className="container py-2 mx-auto flex items-center justify-between relative w-2/4">
                    <ul className="flex items-center mx-auto space-x-11 py-4 text-bg-register font-mono font-semibold tracking-wider">
                         <li>
                              <Link
                                   to="home"
                                   smooth={true}
                                   duration={500}
                                   className="hover:text-[#c8ced3] duration-500 cursor-pointer"
                              >
                                   Home
                              </Link>
                         </li>
                         <li>
                              <Link
                                   to="about"
                                   smooth={true}
                                   duration={500}
                                   className="hover:text-[#c8ced3] duration-500 cursor-pointer"
                              >
                                   About
                              </Link>
                         </li>
                         <li>
                              <Link
                                   to="services"
                                   smooth={true}
                                   duration={500}
                                   className="hover:text-[#c8ced3] duration-500 cursor-pointer"
                              >
                                   Services
                              </Link>
                         </li>
                         <li>
                              <Link
                                   to="teams"
                                   smooth={true}
                                   duration={500}
                                   className="hover:text-[#c8ced3] duration-500 cursor-pointer"
                              >
                                   Team
                              </Link>
                         </li>
                         <li>
                              <Link
                                   to="blog"
                                   smooth={true}
                                   duration={500}
                                   className="hover:text-[#c8ced3] duration-500 cursor-pointer"
                              >
                                   Feedback
                              </Link>
                         </li>
                    </ul>
               </div>
          </nav>
     );
};

export default Navbar;