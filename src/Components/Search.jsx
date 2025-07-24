/** @format */

import React from "react";
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

function Search({ selectedTags, setSelectedTags }) {
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
