import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "services", label: "Services" },
    { to: "teams", label: "Team" },
    { to: "blog", label: "Feedback" },
  ];

  return (
    <nav className="bg-navColor shadow-2xl w-full z-50 fixed">
      <div className="container px-4 mx-auto">
        <div className="relative flex items-center justify-between h-16 md:justify-center">
          {/* Logo - Absolute Positioned */}
          <div className="absolute left-4">
            <img src={logo} alt="Logo" className="w-12" />
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-11 font-mono font-semibold tracking-wider">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="hover:text-[#c8ced3] duration-500 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger Button - Only on Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            >
              <span
                className={`block w-6 h-0.5 bg-gray-600 transform transition duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-600 transform transition duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <ul className="pt-2 pb-4 space-y-4 font-mono font-semibold tracking-wider">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="block hover:text-[#c8ced3] duration-500 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;