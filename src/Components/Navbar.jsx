/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./../assets/Logooo.png";
import { IoLogoYoutube } from "react-icons/io5";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className='bg-background shadow-md px-6 py-4 w-full font-body'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        
        
       <Link to='/' className='flex items-center '>
  <img src={Logo} alt='PixelPatch Logo' className='w-[90px] h-auto' />
  <span className='text-xl font-heading font-bold text-primary tracking-wide'>
    PixelPatch
  </span>
</Link>


        {/* Navigation Links */}
        <ul className='hidden md:flex gap-6 lg:gap-10 text-sm font-medium text-primary'>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`hover:text-highlight transition-colors ${
                  location.pathname === item.path ? "font-semibold text-highlight" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className='bg-accent hover:bg-highlight transition-all duration-200 text-primary hover:text-white rounded-full px-4 py-2 flex items-center text-sm font-semibold'>
          Subscribe
          <IoLogoYoutube className='ml-2 text-lg' />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
