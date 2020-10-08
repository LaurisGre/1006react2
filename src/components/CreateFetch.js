// import React from 'react';

export default function CreateFetch(props) {
    console.log(props)
    // console.log(props.credentials)
    // console.log(props.method)
    // console.log(props.method.link)
    // console.log(props.method.method)
    // console.log(props.method.path)

    const user = JSON.parse(localStorage.getItem('token'));

    fetch(`http://rest.stecenka.lt/${props.method.link}`, 
        {
            headers: {
                'Content-type': 'application/json',
                'Authorization': user.token,
            },
            method: `${props.method.method}`,
            body: JSON.stringify(props.credentials),
        }
    )
    .then(response => {
        if (response.ok) {
            console.log('fetchas veikia')
            return response.json()
        }
    })
    .then(token => {
        if (token) {
            localStorage.setItem('token', JSON.stringify(token));
        }
    })
}