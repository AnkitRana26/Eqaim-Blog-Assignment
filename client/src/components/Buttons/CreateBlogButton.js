import React from 'react';
import { Link } from 'react-router-dom';
import './Buttons.css'

const CreateBlogButton = () => {
    return (
        <div className='buttons createBlog'><Link to="/create"><svg width="42" height="42" viewBox="0 0 42 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31 5H37C38.0609 5 39.0783 5.42143 39.8284 6.17157C40.5786 6.92172 41 7.93913 41 9V49C41 50.0609 40.5786 51.0783 39.8284 51.8284C39.0783 52.5786 38.0609 53 37 53H5C3.93913 53 2.92172 52.5786 2.17157 51.8284C1.42143 51.0783 1 50.0609 1 49V9C1 7.93913 1.42143 6.92172 2.17157 6.17157C2.92172 5.42143 3.93913 5 5 5H11" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M27 1H15C12.7909 1 11 2.79086 11 5V7C11 9.20914 12.7909 11 15 11H27C29.2091 11 31 9.20914 31 7V5C31 2.79086 29.2091 1 27 1Z" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21 23V39" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M29 31H13" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
        </svg></Link>
        </div>
    )
}

export default CreateBlogButton