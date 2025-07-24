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
    <nav className='bg-background shadow-sm border-b border-gray-200 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <Link to='/' className='flex items-center space-x-2'>
            <img src={Logo} alt='Logo' className='w-8 h-8' />
            <span className='text-xl font-heading font-bold text-primary'>
              PixelPatch
            </span>
          </Link>

          <div className='hidden md:flex items-center gap-6'>
            <ul className='flex gap-6 text-sm font-medium text-primary'>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`hover:text-highlight transition-colors ${
                      location.pathname === item.path
                        ? "font-semibold text-highlight"
                        : ""
                    }`}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className='relative ml-6'>
              <IoSearchOutline className='absolute top-2.5 left-3 text-gray-900 text-md' />
              <input
                type='text'
                placeholder='Search blogs...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='pl-10 pr-4 py-2 rounded-md border border-gray-300 text-sm bg-white text-gray-800 placeholder:text-gray-800 focus:outline-none focus:ring-2 focus:ring-highlight'
              />
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='md:hidden text-3xl text-primary'>
            {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='md:hidden px-4 pb-4 space-y-4'>
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

          <div className='relative'>
            <IoSearchOutline className='absolute top-2.5 left-3 text-gray-900 text-md' />
            <input
              type='text'
              placeholder='Search blogs...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='pl-10 pr-4 py-2 rounded-md border border-gray-300 text-sm w-full bg-white text-gray-800 placeholder:text-gray-800 focus:outline-none focus:ring-2 focus:ring-highlight'
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
