import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className='group bg-background rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200'>
      <Link to={`/post/${post.id}`}>
        <img
          src={post.coverImage}
          alt={post.title}
          className='w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300'
        />
      </Link>

      <div className='p-4 font-body'>
        <h2 className='text-xl font-semibold text-primary group-hover:text-highlight transition-colors duration-200'>
          {post.title}
        </h2>
        <p className='text-sm text-lightText mt-1'>#{post.tag}</p>
      </div>
    </div>
  );
};

export default BlogCard;
