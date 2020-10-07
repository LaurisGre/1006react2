import React from 'react';
import { user } from '../user';

export default function CreateFetch(props) {
    console.log(props)
    console.log(props.credentials)
    console.log(props.method)
    console.log(props.method.link)
    console.log(props.method.method);

    // fetch(`http://lenta.stecenka.lt/${props.method.link}`, 
    //     {
    //         headers: {'Content-type': 'application/json'},
    //         method: {props.method.method},
    //         body: JSON.stringify(props.credentials)
    //     }
    // )
    // .then(response => {
    //     if (response.ok) {
    //         console.log(props)
    //         console.log(response.json())
    //         return response.json()
    //     }
    // })
    // .then(token => {
    //     if (token) {
    //         localStorage.setItem('token', token);
    //         user.token = 'Bearer' + token;
    //         console.log(user.token);
    //     }
    // })
}