import React from 'react';

export default function CreateIcon(props) {
    return (
        <div className='iconBox' onClick={() => props.icon.action()}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d={props.icon.url}></path>
            </svg>
        </div>
    )
}