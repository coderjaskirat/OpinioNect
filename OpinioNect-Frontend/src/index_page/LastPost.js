import { useState } from 'react'
import BlogsData from '../blogs/BlogsData.js'

export default function LastBlog(){
    const [Blog, setBlog] = useState(BlogsData[0]);
    return(
        <div className='last-blog'>
            <h1 className='LastPost'>Last Post</h1>
            <h2>{Blog.heading}</h2>
            <p>{Blog.data}</p>
        </div>
    )
}