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
    <div className='max-w-4xl mx-auto p-6 mt-10 pb-20 shadow-md bg-background rounded-xl font-body'>
      <h1 className='text-3xl font-heading font-bold text-lightText mt-4 mb-4'>
        {title}
      </h1>

      <img
        src={coverImage}
        alt={title}
        className='w-full h-auto object-cover rounded-lg shadow-md mb-4'
      />

      <div className='flex flex-wrap items-center text-sm text-primary gap-4 mb-4 '>
        {Array.isArray(tag) && tag.length > 0 ? (
          <span className='text-xs text-primary font-medium'>
            Tags: {tag.join(", ")}
          </span>
        ) : (
          <span className='text-xs text-gray-400'>No tags</span>
        )}

        {createdAt && (
          <p className='text-xs text-lightText'>
            Published: {formatDate(createdAt)}
          </p>
        )}

        {updatedAt && (
          <p className='text-xs text-lightText'>
            Updated: {formatDate(updatedAt)}
          </p>
        )}
      </div>

      <div className='prose prose-lg dark:prose-invert max-w-none text-justify text-lightText break-words min-h-[200px]'>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}>
          {post.description}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
