import React from 'react';
import { Link }from 'react-router-dom';

export default function CreateInput(props) {
    if(props.type === 'submit') {
        return(
            // <Link to={props.label}>
                <div className='inputBox'>
                    <input 
                        name={props.name} 
                        value={props.placeholder} 
                        type={props.type}
                    ></input>
                </div>
            // </Link>
        )
    } else if (props.type === 'textarea') {
        return(
            <div className='inputBox'>
                <h3>{props.label}</h3>
                <textarea 
                    ref={props.aref} 
                    name={props.name} 
                    placeholder={props.placeholder}
                ></textarea>
            </div>
        )
    } else {
        return(
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
}
