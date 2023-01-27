import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeButton from '../../components/Buttons/HomeButton';
import SubmitButton from '../../components/Buttons/SubmitButton';
import IconBox from '../../components/IconBox/IconBox';
import { postBlog } from '../../utils/api';
import './CreateBlog.css';


const initialBlog={
    title:"",
    content:""
}

const CreateBlog = () => {

    const [blog,setBlog] = useState(initialBlog);
    const navigate = useNavigate();

    const changeHandler =(e)=>{
        const {name,value} = e.target;
        setBlog({...blog,[name]:value});
    }

    const submitBlog =()=>{
        console.log(blog)
        postBlog(blog)
        .then((res)=>navigate('/'))
        .catch(err=>alert('Not Posted'))
    }


    return (
        <div id='createBlog'>
            <IconBox/>
            <input onChange={changeHandler} value={blog.title} name='title' type='text' id='blogHeading' className='inputField' placeholder='Enter Blog Title' />
            <textarea onChange={changeHandler} name='content' value={blog.content} type='text' id='contentBox' className='inputField' placeholder='Enter Blog Content' />
            <HomeButton/>
            <SubmitButton submitBlog={submitBlog}/>
        </div>
    )
}

export default CreateBlog