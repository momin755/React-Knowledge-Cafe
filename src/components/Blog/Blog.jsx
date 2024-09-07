import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddBookmarks, handleMarkAsRead }) => {
  const {
    id,
    author,
    author_img,
    hashtag,
    title,
    publish_date,
    reading_time,
    cover,
  } = blog;

  return (
    <div className="p-2 my-6 space-y-5 shadow-2xl rounded-xl">
      <img className="rounded-xl" src={cover} alt="cover-image" />
      <div className="flex justify-between my-3 place-items-center">
        <div className="flex gap-4">
          <div>
            <img className="w-14" src={author_img} alt="" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{author}</h1>
            <p className="font-semibold text-1xl">{publish_date}</p>
          </div>
        </div>
        <div className="flex gap-2 place-items-center">
          <span>
            <b>{reading_time} min read</b>
          </span>
          <button onClick={() => handleAddBookmarks(blog)}>
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h1 className="pb-3 text-3xl font-bold">{title}</h1>
      <a href="" className="font-light">
        <b>#{hashtag}</b>
      </a>
      <br />
      <button
      onClick={()=>handleMarkAsRead(id, reading_time)}
      className="text-[#6047EC] underline">
        <b>Mark as Read</b>
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handleAddBookmarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func
  
};

export default Blog;
