/** @format */

import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Banner from "./../assets/logoforblogs.png";

const tagsData = [
  "All",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Vue",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
];

function Search({ selectedTags, setSelectedTags, search, setSearch }) {
  const handleSelectTag = (tag) => {
    if (tag === "All") {
      setSelectedTags([]);
    } else {
      setSelectedTags((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
      );
    }
  };

  return (
    <div className='flex flex-col items-center justify-center mt-6 px-6 md:px-20 font-body'>
      <div className='w-full max-w-[800px]'>
        <img
          src={Banner}
          alt='Banner'
          className='w-full h-auto md:h-[200px] rounded-2xl shadow-md object-cover'
        />
      </div>
      <div className='relative mt-4 w-full max-w-[800px]'>
        <IoSearchOutline className='absolute top-2.5 left-3 text-gray-900 text-md' />
        <input
          type='text'
          placeholder='Search blogs...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 text-sm bg-white text-gray-800 placeholder:text-gray-800 focus:outline-none focus:ring-2 focus:ring-highlight'
        />
      </div>
      <div className='mt-6 w-full max-w-[800px] overflow-x-auto no-scrollbar'>
        <div className='flex gap-3 w-max px-2'>
          {tagsData.map((tag) => {
            const isActive =
              tag === "All"
                ? selectedTags.length === 0
                : selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => handleSelectTag(tag)}
                className={`text-sm px-4 py-1.5 rounded-full border flex-shrink-0 transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-accent text-white"
                    : "bg-background text-primary border-gray-300 hover:bg-white"
                }`}>
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
