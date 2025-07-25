/** @format */

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./../FireBase";
import { Link } from "react-router-dom";

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
    <div className='max-w-6xl mx-auto px-4 py-10 font-body'>
      <h1 className='text-3xl md:text-4xl font-extrabold mb-8 text-center text-primary font-heading'>
        All Blog Posts
      </h1>

      <div className='grid gap-8'>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id}>
              <div className='group flex flex-col md:flex-row bg-background border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-auto md:h-80'>
                <div className='w-full md:w-1/2 h-52 md:h-full'>
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className='w-full h-full object-cover'
                  />
                </div>

                
                <div className='p-5 flex flex-col md:w-1/2 md:h-full justify-between'>
                  <div className='flex flex-col gap-3'>
                    <h2 className='text-lg md:text-xl font-bold text-primary  transition-colors font-heading line-clamp-2'>
                      {post.title}
                    </h2>

                    {Array.isArray(post.tag) && post.tag.length > 0 && (
                      <div className='flex flex-wrap gap-2'>
                        {post.tag.map((tag, index) => (
                          <span
                            key={index}
                            className='bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold'>
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <p
                      className='text-lightText text-sm line-clamp-3 md:line-clamp-4 lg:line-clamp-5'
                      title={post.description}>
                      {post.description}
                    </p>
                  </div>

                  <div className='pt-3'>
                    <span className='text-highlight text-sm font-semibold hover:underline'>
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
