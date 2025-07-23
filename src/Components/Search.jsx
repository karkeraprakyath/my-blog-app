/** @format */

import React, { useState } from "react";
import { IoSearchOutline, IoFilter } from "react-icons/io5";
import Banner from "./../assets/logoforblogs.png";

const tagsData = [
  { id: 1, name: "React" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "CSS" },
  { id: 4, name: "Tailwind" },
];

function Search({ search, setSearch, selectedTags, setSelectedTags }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className='flex flex-col items-center justify-center mt-8 px-6 md:px-20 font-body'>
      <div className='relative w-full max-w-[800px]'>
        <img
          src={Banner}
          alt='Banner'
          className='w-full h-auto md:h-[199px] rounded-2xl shadow-md'
        />

        <div className='absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full px-4 md:px-0'>
          <div className='flex items-center gap-3 justify-center'>
            {/* Search Bar */}
            <div className='bg-background shadow-md p-3 rounded-lg flex items-center w-full max-w-[550px]'>
              <IoSearchOutline className='text-xl text-primary' />
              <input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search blog...'
                className='outline-none ml-2 w-full bg-background text-primary placeholder:text-lightText text-sm'
              />
            </div>

            <div className='relative'>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className='bg-background border border-gray-300 shadow-md px-4 py-2 rounded-lg flex items-center text-sm hover:bg-highlight hover:text-white transition-all'>
                <IoFilter className='mr-2' />
                Filter
              </button>

              {dropdownOpen && (
                <div className='absolute top-full right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg z-10 w-48 p-3'>
                  {tagsData.map((tag) => (
                    <label
                      key={tag.id}
                      className='flex items-center gap-2 mb-2 text-sm text-primary'>
                      <input
                        type='checkbox'
                        checked={selectedTags.includes(tag.name)}
                        onChange={() => handleTagToggle(tag.name)}
                        className='accent-highlight'
                      />
                      {tag.name}
                    </label>
                  ))}

                  <button
                    onClick={() => setSelectedTags([])}
                    className='w-full mt-2 bg-accent text-highlight font-semibold text-xs py-1.5 rounded hover:bg-highlight hover:text-white transition-all'>
                    Clear All
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {selectedTags.length > 0 && (
        <div className='flex flex-wrap gap-2 mt-12 justify-center'>
          {selectedTags.map((tag, index) => (
            <span
              key={index}
              className='text-xs bg-accent text-highlight font-semibold px-3 py-1 rounded-full'>
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
