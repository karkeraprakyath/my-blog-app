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

  if (loading) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[60vh] text-center font-body'>
        <span className='text-sm text-gray-400 mt-2 mb-6'>Loading...</span>
        <span className='w-10 h-10 inline-block border-4 border-gray-300 border-l-yellow-600 border-t-yellow-600 rounded-full animate-spin'></span>
      </div>
    );
  }

  if (!post)
    return (
      <p className='text-center py-12 text-lg text-lightText font-body'>
        Post not found.
      </p>
    );

  return <BlogPost post={post} />;
};

export default PostPage;
