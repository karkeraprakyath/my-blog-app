/** @format */

import React from "react";
import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const BlogPost = ({ post }) => {
  return (
    <div className='px-6 md:px-20 lg:px-56 mt-10'>
      <h3 className='text-red-600 text-[12px]'>{post.tag}</h3>
      <h3 className='text-[23px] font-bold'>{post.title}</h3>

      <div className='flex items-center mt-5'>
        <img
          src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg'
          className='w-[35px] rounded-full'
          alt='Author'
        />
        <div className='ml-2'>
          <h3 className='font-bold text-[12px]'>
            {post.author || "Unknown Author"}
          </h3>
          <h3 className='text-gray-500 text-[10px]'>
            {new Date(post.createdAt?.seconds * 1000).toDateString()}
          </h3>
        </div>
      </div>

      <img
        src={post.coverImage}
        alt={post.title}
        className='rounded-2xl mt-5 mb-5 w-full'
      />
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}>
        {post.description}
      </ReactMarkdown>
    </div>
  );
};

export default BlogPost;
