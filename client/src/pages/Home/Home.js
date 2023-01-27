import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import BlogCard from '../../components/BlogCard/BlogCard';
import CreateBlogButton from '../../components/Buttons/CreateBlogButton';
import { fetchBlogs } from '../../utils/api';
import './Home.css'


const Home = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        fetchBlogs()
            .then(blogs => setBlogs(blogs))
            .catch(err => console.log('Error'));


    }, [])

    return (
        <>
            {

                blogs.length == 0 ? <div id='emptyBlogContainer'>
                    Post Some Blogs To See Blogs
                </div> : <div id='blogContainer'>
                    {
                        blogs.map(ele => {
                            return <Link to={`/blog/${ele._id}`}><BlogCard key={ele.id} data={ele} /></Link>
                        })
                    }

                </div>
            }
            <CreateBlogButton />
        </>
    )
}

export default Home