import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className='group bg-white rounded-lg shadow hover:shadow-xl transition duration-300'>
      <Link to={`/post/${post.id}`}>
        <img
          src={post.coverImage}
          alt={post.title}
          className='w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300'
        />
      </Link>
      <div className='p-4'>
        <h2 className='text-xl font-semibold text-gray-800'>{post.title}</h2>
        <p className='text-sm text-gray-500 mt-1'>#{post.tag}</p>
      </div>
    </div>
  );
};

export default BlogCard;
