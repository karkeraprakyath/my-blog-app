import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./../FireBase";

const BlogList = () => {
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
        console.log("Fetched posts from Firestore:", postList);
        setPosts(postList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <h2 className="text-center text-2xl font-bold py-10">Loading...</h2>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-10 text-center">
        All Blog Posts
      </h1>

      <div className="grid gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {post.tag}
              </span>
            </div>

            
            <div className="flex flex-col md:flex-row">
             
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full md:w-1/2 h-48 object-cover"
              />

              
              <div className="p-4 md:w-1/2">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
