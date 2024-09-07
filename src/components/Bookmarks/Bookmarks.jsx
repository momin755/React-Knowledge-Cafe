import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3">
        <h1 className="text-[20px] text-center bg-[#6047EC1A] py-3 mb-4 px-4 rounded-xl font-bold text-[#6047EC]">Spent time on read : {readingTime} min</h1>
      <div className="p-4 rounded-lg bg-slate-200">
      <h1 className="text-2xl font-bold">
        Bookmarked Blog: {bookmarks.length}
      </h1>
      {
        bookmarks.map((bookmark, idx) => <Bookmark 
        key={idx}
        readingTime={readingTime}
        bookmark={bookmark}
        ></Bookmark>)
      }
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.object,
  readingTime: PropTypes.object,
  
};

export default Bookmarks;
