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
      <h2 className='text-center text-2xl font-bold py-10 text-primary font-heading'>
        Loading...
      </h2>
    );
  }

  const filteredPosts = posts
    .filter((post) => selectedTag === "All" || post.tag === selectedTag)
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className='max-w-6xl mx-auto px-4 py-12 font-body'>
      <h1 className='text-4xl font-extrabold mb-10 text-center text-primary font-heading'>
        All Blog Posts
      </h1>

      <div className='grid gap-10'>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id}>
              <div className='group flex flex-col md:flex-row bg-background border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden min-h-[300px]'>

                {/* Image (30%) */}
                <div className='md:basis-[30%] w-full h-64 md:h-auto flex-shrink-0 overflow-hidden'>
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className='w-full h-full object-contain block'
                  />
                </div>

                {/* Content (70%) */}
                <div className='relative p-6 md:basis-[70%] flex flex-col justify-center min-h-[300px]'>
                  
                  {/* Tag */}
                  <div className='absolute top-4 right-4 bg-background shadow-md'>
                    <span className='bg-accent text-primary text-sm font-medium px-3 py-1 inline-block rounded-full hover:bg-highlight hover:text-white transition-all'>
                      {post.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className='flex flex-col justify-between h-auto'>
                    <h2 className='text-xl font-bold text-primary group-hover:text-highlight transition-colors line-clamp-1 mb-2 font-heading'>
                      {post.title}
                    </h2>

                    <p className='text-lightText text-sm text-justify line-clamp-5'>
                      {post.description}
                    </p>

                    <Link
                      to={`/blog/${post.id}`}
                      className='text-highlight text-sm font-semibold mt-3 hover:underline inline-block'
                    >
                      Read More →
                    </Link>
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
