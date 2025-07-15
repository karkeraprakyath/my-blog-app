// src/components/BlogList.jsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./../FireBase"; // adjust path if needed

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCol = collection(db, "posts");
        const postSnapshot = await getDocs(postsCol);
        const postList = postSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log('Fetched posts from Firestore:', postList);
        setPosts(postList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>All Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "40px" }}>
         <h2>{post["title "]}</h2>
{post["coverImage "] && (
  <img
    src={post["coverImage "]}
    alt={post["title "]}
    style={{ maxWidth: "100%", height: "auto" }}
  />
)}
<p>{post["description "]}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
