import React from 'react'
import { Link } from 'react-router-dom';
import BlogCard from '../../components/BlogCard/BlogCard';
import CreateBlogButton from '../../components/Buttons/CreateBlogButton';
import './Home.css'


const data =[
    {
        id:1,
        title:"Blog 1",
        content:"This is 1 Blog and Good Blog"
    },
    {
        id:2,
        title:"Blog 2",
        content:"This is 2 Blog and Good Blog"
    },
    {
        id:3,
        title:"Blog 3",
        content:"This is 3 Blog and Good Blog"
    },
    {
        id:4,
        title:"Blog 4",
        content:"This is 4 Blog and Good Blog"
    },
    {
        id:5,
        title:"Blog 5",
        content:"This is 5 Blog and Good Blog"
    }

]

const Home = () => {
  return (
    <div id='blogContainer'>
        {
            data.map(ele=>{
                return <Link to={`/blog/${ele.id}`}><BlogCard key={ele.id} data={ele}/></Link>
            })
        }

        <CreateBlogButton/>
    </div>
  )
}

export default Home