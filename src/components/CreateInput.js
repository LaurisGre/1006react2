import React from 'react';

export default function CreateInput(props) {
    console.log(props);
    return (
        (props.type === 'submit') ? 
        <input id={props.name} value={props.placeholder} type={props.type}></input> :
        <div className='inputBox'>
            <h3>{props.label}</h3>
            <input onChange={() => props.change()} id={props.name} placeholder={props.placeholder} type={props.type}></input>
        </div>
    )
}