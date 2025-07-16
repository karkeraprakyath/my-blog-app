/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./../FireBase";
import BlogPost from "./BlogPost";

const PostPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true); 

      try {
        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
          setPost(null);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setPost(null);
      } finally {
        setLoading(false); 
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p className='text-center py-10 text-lg'>Loading...</p>;
  if (!post) return <p className='text-center py-10 text-lg'>Post not found</p>;

  return <BlogPost post={post} />;
};

export default PostPage;
