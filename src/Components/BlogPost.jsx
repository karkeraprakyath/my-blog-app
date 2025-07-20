/** @format */
import React from "react";

 import ReactMarkdown from "react-markdown";
 import remarkGfm from "remark-gfm";
 import rehypeHighlight from "rehype-highlight";

const BlogPost = ({ post }) => {
  const { title, coverImage, tag, description, createdAt, updatedAt } = post;

  const formatDate = (date) => {
    try {
      return date.toDate().toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return "Unknown Date";
    }
  };

  return (
    <div className='max-w-4xl mx-auto p-4 mt-10 shadow-md bg-gray-50'>
      <h1 className='text-3xl font-bold text-gray-800 mt-6'>{title}</h1>
      <img
        src={coverImage}
        alt={title}
        className='w-full h-[300px] object-cover rounded-lg shadow-md '
      />
    <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mt-2">
  {tag && <p className="text-blue-300 font-semibold text-sm tracking-wide uppercase">{tag}</p>
}

  {createdAt && (
    <p className="text-xs text-gray-400">
       Published: {formatDate(createdAt)}
    </p>
  )}

  {updatedAt && (
    <p className="text-xs text-gray-400">
       Updated: {formatDate(updatedAt)}
    </p>
  )}
</div>



 <div className="prose prose-sm sm:prose text-justify lg:prose-lg dark:prose-invert max-w-none mt-4 text-black">
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeHighlight]}
  >
    {post.description}
  </ReactMarkdown>
</div>

     
{/* <div className="prose max-w-none">
  <ReactMarkdown>{post.description}</ReactMarkdown>
</div> */}
    </div>
  );
};

export default BlogPost;
