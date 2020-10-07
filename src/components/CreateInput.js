import React from 'react';

export default function CreateInput(props) {
    return (
        (props.type === 'submit') ? 
        <div className='inputBox'>
            <input 
                name={props.name} 
                value={props.placeholder} 
                type={props.type}
            ></input>
        </div> :
        <div className='inputBox'>
            <h3>{props.label}</h3>
            <input 
                ref={props.aref} 
                name={props.name} 
                placeholder={props.placeholder} 
                type={props.type}
            ></input>
        </div>
    )
}