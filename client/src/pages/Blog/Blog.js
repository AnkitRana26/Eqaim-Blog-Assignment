import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import HomeButton from '../../components/Buttons/HomeButton';
import Loader from '../../components/Loader/Loader';
import { fetchBlog } from '../../utils/api';
import "./Blog.css"

const Blog = () => {
    const [blog, setBlog] = useState();
    const {id} = useParams();
    
    useEffect(()=>{
        fetchBlog(id)
        .then(res=>setBlog(res))
        .catch(err=>console.log('Error'));
    },[])

    return (
        
            !blog?<Loader/>:<div id='blog'>
                <h1>{blog.title}</h1>
                <p>{blog.content}</p>
                <HomeButton/>
            </div>
        
    )
}

export default Blog