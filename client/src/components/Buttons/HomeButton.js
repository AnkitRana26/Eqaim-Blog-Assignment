import React from 'react'
import { Link } from 'react-router-dom'
import './Buttons.css'
const HomeButton = () => {
    return (
        <div className='buttons topCorner homeButton'>
            <Link to='/'><svg width="50" height="40" viewBox="0 0 42 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 27L21 1L41 27" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.15384 32.9999V53H34.8461V32.9999" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
            </svg></Link>
        </div>

    )
}

export default HomeButton