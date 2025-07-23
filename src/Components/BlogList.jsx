/** @format */

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./../FireBase";
import { Link } from "react-router-dom";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import ReactMarkdown from "react-markdown";
const BlogList = ({ selectedTags = [], searchQuery }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCol = collection(db, "posts");
        const postSnapshot = await getDocs(postsCol);
        let postList = postSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        postList = postList.sort((a, b) => {
          if (b.createdAt && a.createdAt) {
            return b.createdAt.seconds - a.createdAt.seconds;
          }
          return 0;
        });

        setPosts(postList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[60vh] text-center font-body'>
        <span className='text-sm text-gray-400 mt-2 mb-6'>Loading...</span>
        <span className='w-10 h-10 inline-block border-4 border-gray-300 border-l-yellow-600 border-t-yellow-600 rounded-full animate-spin'></span>
      </div>
    );
  }

  const filteredPosts = posts.filter((post) => {
    const postTags = Array.isArray(post.tag) ? post.tag : [];

    const tagMatch =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => postTags.includes(tag));

    const searchMatch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());

    return tagMatch && searchMatch;
  });

  return (
    <div className='max-w-6xl mx-auto px-4 py-12 font-body'>
      <h1 className='text-4xl font-extrabold mb-10 text-center text-primary font-heading'>
        All Blog Posts
      </h1>

      <div className='grid gap-10'>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id}>
              <div className='group flex flex-col md:flex-row bg-background border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-[300px]'>
                <div className='md:w-1/2 h-full w-full flex-shrink-0 overflow-hidden'>
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className='w-full h-full object-cover block'
                  />
                </div>

                <div className='relative p-6 flex flex-col justify-center h-full md:w-1/2'>
                  <div className='absolute top-4 right-4 bg-background shadow-md px-3 py-1 rounded-full'>
                    {Array.isArray(post.tag) && post.tag.length > 0 ? (
                      <span className='text-xs text-primary font-medium'>
                        Tags: {post.tag.join(", ")}
                      </span>
                    ) : (
                      <span className='text-xs text-gray-400'>No tags</span>
                    )}
                  </div>

                  <div className='flex flex-col justify-between h-auto'>
                    <h2 className='text-xl font-bold text-primary group-hover:text-highlight transition-colors line-clamp-1 mb-2 font-heading'>
                      {post.title}
                    </h2>

                    <div className='text-lightText text-sm text-justify break-words line-clamp-5 overflow-hidden'>
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeHighlight]}>
                        {post.description}
                      </ReactMarkdown>
                    </div>

                    <span className='text-highlight text-sm font-semibold mt-3 hover:underline inline-block'>
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className='text-center text-lightText text-lg'>No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
