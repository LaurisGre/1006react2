import React from 'react';

export default function CreateInput(props) {
    return (
        (props.type === 'submit') ? 
        <input id={props.name}  value={props.name}type={props.type}></input> :
        <input id={props.name} placeholder={props.name} type={props.type}>
        </input>
    )
}