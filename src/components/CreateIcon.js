import React from 'react';
import { Link }from 'react-router-dom'


export default function CreateIcon(props) {
    
    const iconStyle = {
        color:'white',
    }

    return (
        (props.icon.link) ? 
        <Link style={iconStyle} to={props.icon.link}> 
            <div className='iconBox'>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={props.icon.url}></path>
                </svg>
            </div> 
        </Link>:
        <div className='iconBox'>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d={props.icon.url}></path>
        </svg>
    </div>
    )
}