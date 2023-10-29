import React from 'react'
import BlogsData from './BlogsData'
import Blog from './Blog.js'
export default function Blogs(props){

    const blog = BlogsData.map(data => {
        return(
            <Blog headline={data.heading} data={data.data}/>
        )
    });
    return(
        <div className={props.condition ? 'blogs-signup':'blogs-index'}>
            <h3 className='blog-heading'>Latest News</h3>
            <ul >
                {blog}
            </ul>
        </div>
    )
}