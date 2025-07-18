/** @format */
import React from 'react';
import Logo from './../assets/logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='bg-indigo-600 shadow-md px-8 py-4 flex justify-between items-center'>

 <div className='flex items-center gap-2'>
    <Link to='/'>
        <img src={Logo} alt='TubeGuruji Logo' className='w-[140px] h-auto' />
     </Link>
      </div>

    
      <ul className='flex gap-6 text-gray-700 font-medium'>
        <li className='hover:text-red-500 cursor-pointer'>Home</li>
        <li className='hover:text-red-500 cursor-pointer'>Blogs</li>
        <li className='hover:text-red-500 cursor-pointer'>About</li>
        <li className='hover:text-red-500 cursor-pointer'>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
