import React from 'react';
import './BlogCard.css'

const BlogCard = (props) => {

    const {title,content} = props.data;
    
    return <div className='blogCard'>
        <h2>{title}</h2>

    </div>
}

export default BlogCard;