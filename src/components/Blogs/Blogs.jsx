import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleAddBookmarks, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className='w-2/3'>
            {
                blogs.map((blog,idx) => <Blog
                handleAddBookmarks={handleAddBookmarks}
                handleMarkAsRead={handleMarkAsRead}
                key={idx}
                blog={blog}
                ></Blog> )
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmarks : PropTypes.func,
    handleMarkAsRead:PropTypes.func
};

export default Blogs;