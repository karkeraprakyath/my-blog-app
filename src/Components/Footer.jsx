/** @format */

import React from "react";

const Footer = () => {
  return (
    <footer className='bg-white text-black py-8'>
      <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
        <p className='text-black hover:text-blue text-sm '>
          &copy; {new Date().getFullYear()} My Blog. All rights reserved.
        </p>
        <div className='mt-4 md:mt-0'>
          <a href='#' className='text-black hover:text-blue mx-2'>
            Privacy Policy
          </a>
          <a href='#' className='text-black hover:text-blue mx-2'>
            Terms of Service
          </a>
          <a href='#' className='text-black hover:text-blue mx-2'>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
