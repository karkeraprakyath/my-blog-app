/** @format */

import React from "react";

const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full bg-background text-lightText hover:text-primary py-4 shadow-md z-50'>
      {" "}
      <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
        <p className='text-sm text-lightText hover:text-primary transition-colors duration-200'>
          &copy; {new Date().getFullYear()} My Blog. All rights reserved.
        </p>

        <div className='mt-4 md:mt-0 flex gap-4'>
          <a
            href='#'
            className='text-sm text-lightText hover:text-primary transition-colors duration-200'>
            Privacy Policy
          </a>
          <a
            href='#'
            className='text-sm text-lightText hover:text-primary transition-colors duration-200'>
            Terms of Service
          </a>
          <a
            href='#'
            className='text-sm text-lightText hover:text-primary transition-colors duration-200'>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
