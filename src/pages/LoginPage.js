import React from 'react';
import CreateForm from '../components/CreateForm';

export default function LoginPage(props) {
    const inputList = [
        {
            name: 'name',
            type: 'text',
        },
        {
            name: 'email',
            type: 'email',
        },
        {
            name: 'login',
            type: 'submit',
        },
    ]

    return (
        CreateForm(inputList)
    )
}