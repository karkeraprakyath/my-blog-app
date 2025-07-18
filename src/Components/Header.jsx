/** @format */

import React from "react";
import { Link } from "react-router-dom"; // If using React Router
import Logo from "./../assets/logo.png";
import { IoLogoYoutube } from "react-icons/io5";

function Header() {
  return (
    <div className='flex justify-between items-center px-6 py-4 w-full bg-[#4F46E5] text-[#FFFFFF] shadow-md'>
      <img src={Logo} alt='App Logo' className='w-[150px]' />

      <ul className='hidden md:flex gap-6 lg:gap-14 text-sm font-medium'>
        <li className='hover:text-[#F59E0B] cursor-pointer'>
          <Link to='/'>Home</Link>
        </li>
        <li className='hover:text-[#F59E0B] cursor-pointer'>
          <Link to='/about'>About Us</Link>
        </li>
        <li className='hover:text-[#F59E0B] cursor-pointer'>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>

      <button className='bg-[#4F46E5] hover:bg-[#F59E0B] transition-all duration-200 text-[#FFFFFF] rounded-full px-4 py-2 flex items-center text-sm font-semibold'>
        Subscribe
        <IoLogoYoutube className='ml-2 text-[20px]' />
      </button>
    </div>
  );
}

export default Header;
