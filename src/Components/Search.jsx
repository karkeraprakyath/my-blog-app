/** @format */

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Banner from "./../assets/logoforblogs.png";

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
    <div className='flex justify-center mt-8 flex-col px-6 md:px-20 font-body'>

      {/* Banner Image */}
      <img
        src={Banner}
        alt='Banner'
        className='w-full max-w-[800px] h-auto md:h-[199px] rounded-2xl self-center mx-auto shadow-md'
      />

      {/* Search Bar */}
      <div className='bg-background shadow-md p-3 rounded-lg -mt-5 mx-auto w-full max-w-xl flex items-center'>
        <IoSearchOutline className='text-xl text-primary' />
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search blog...'
          className='outline-none ml-2 w-full bg-background text-primary placeholder:text-lightText text-sm'
        />
      </div>

      {/* Tags */}
      <ul className='flex flex-wrap gap-4 justify-center mt-6'>
        {tags.map((item, index) => (
          <li
            key={item.id}
            onClick={() => {
              setActiveIndex(index);
              setSelectedTag(item.name);
            }}
            className={`cursor-pointer text-sm px-4 py-1.5 rounded-full border transition-all
              ${
                index === activeIndex
                  ? "bg-accent text-highlight font-semibold shadow"
                  : "text-primary hover:border-accent"
              }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
