
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddBookmarks = (blog)=>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (id , time) =>{
    const newTime = (readingTime + time)
    setReadingTime(newTime)
    const remaining = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remaining)
  }
  return (
    <>
      <Header></Header>
      <div className='justify-between max-w-5xl mx-auto my-6 md:flex gap-7'>
      <Blogs
      handleAddBookmarks={handleAddBookmarks}
      handleMarkAsRead ={handleMarkAsRead}
      ></Blogs>
      <Bookmarks
      readingTime ={readingTime}
       bookmarks={bookmarks} ></Bookmarks>
      </div>
    </>
  )
}

export default App
