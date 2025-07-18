/** @format */

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./../FireBase";
import { Link } from "react-router-dom";

const BlogList = ({ selectedTag, searchQuery }) => {
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

        // Sort by createdAt timestamp (newest first)
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
    return <h2 className='text-center text-2xl font-bold py-10'>Loading...</h2>;
  }

  const filteredPosts = posts
    .filter((post) => selectedTag === "All" || post.tag === selectedTag)
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className='max-w-6xl mx-auto px-4 py-12'>
      <h1 className='text-4xl font-extrabold mb-10 text-center text-red-600'>
        All Blog Posts
      </h1>

      <div className='grid gap-10'>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id}>
              <div className='group flex flex-col md:flex-row bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden'>
                {/* Image */}
                <div className='md:w-1/2 w-full h-64 md:h-auto'>
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                </div>

                {/* Content */}
                <div className='relative p-6 md:w-1/2 flex flex-col justify-center'>
                  {/* Tag */}
                  <div className='absolute top-4 right-4 bg-[#FFFFFF] shadow-lg'>
                    <span className="bg-[#2563EB] text-white text-sm font-medium px-3 py-1  inline-block hover:bg-[#1D4ED8] transition">
                      {post.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className='text-2xl font-bold text-[#111827] dark:text-white mb-3 leading-snug group-hover:text-red-600 transition-colors'>
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className='text-[#6B7280] dark:text-gray-300 text-sm line-clamp-4'>
                    {post.description}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className='text-center text-gray-500 text-lg'>No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
