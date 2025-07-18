/** @format */

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Banner from "./../assets/banner.jpg";

const tagsData = [
  { id: 1, name: "All" },
  { id: 2, name: "React" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "CSS" },
  { id: 5, name: "Tailwind" },
];

function Search({ selectedTag, setSelectedTag, search, setSearch }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tags] = useState(tagsData);

  return (
    <div className='flex justify-center mt-8 flex-col px-8 md:px-36'>
      
      <img
  src={Banner}
  alt='Banner'
  className='w-full max-w-[800px] h-auto md:h-[199px] rounded-2xl self-center mx-auto'
/>


      
      <div className='bg-[#E5E7EB] shadow-lg p-3 rounded-lg -mt-5 mx-[23%] flex items-center'>
        <IoSearchOutline className='text-[20px] text-gray-400' />
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search blog...'
          className='outline-none ml-2 w-full bg-[#E5E7EB] text-[#111827] placeholder:text-gray-400'
        />
      </div>

      
      <ul className='flex gap-10 justify-center mt-5 flex-wrap'>
        {tags.map((item, index) => (
          <li
            key={item.id}
            onClick={() => {
              setActiveIndex(index);
              setSelectedTag(item.name);
            }}
           className={`${
  index === activeIndex ? "bg-[#2563EB] text-[#FFFFFF]" : "text-blue-700"
} p-1 pb-2 rounded-sm md:rounded-full cursor-pointer md:px-4 border border-transparent hover:border-red-500`}
>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
