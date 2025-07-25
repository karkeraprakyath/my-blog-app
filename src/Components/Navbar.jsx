/** @format */

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu, IoClose, IoSearchOutline } from "react-icons/io5";
import Logo from "./../assets/Logooo.png";

const Navbar = ({ search, setSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className='w-full bg-background shadow-sm border-b border-gray-200  top-0 sticky z-50'>
      <div className=' max-w-7xl mx-auto px-4 w-full sm:px-6 lg:px-8'>
        <div className='  w-full flex justify-between items-center h-16'>
          <Link to='/' className='flex items-center space-x-2'>
            <img src={Logo} alt='Logo' className='w-8 h-8' />
            <span className='text-xl font-heading font-bold text-lightText hover:text-primary'>
              PixelPatch
            </span>
          </Link>

          <div className='hidden md:flex items-center gap-6'>
            <ul className='flex gap-6 text-sm font-medium text-lightText'>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`hover:text-primary transition-colors ${
                      location.pathname === item.path
                        ? "font-semibold text-highlight"
                        : ""
                    }`}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='md:hidden text-3xl text-primary'>
            {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='md:hidden px-4 pb-4 space-y-4 w-full'>
          <ul className='flex flex-col gap-4 text-primary font-medium'>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`block hover:text-highlight ${
                    location.pathname === item.path
                      ? "font-semibold text-highlight"
                      : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

        
        </div>
      )}
    </nav>
  );
};

export default Navbar;
