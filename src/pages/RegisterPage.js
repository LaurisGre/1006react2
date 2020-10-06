import React from 'react';
import CreateForm from '../components/CreateForm';

export default function LoginPage(props) {
    const inputList = [
        {
            name: 'name',
            type: 'text',
        },
        {
            name: 'surname',
            type: 'text',
        },
        {
            name: 'email',
            type: 'email',
        },
        {
            name: 'phone number',
            type: 'number',
        },
        {
            name: 'place of residence',
            type: 'text',
        },
        {
            name: 'register',
            type: 'submit',
        },
    ]

    return (
        CreateForm(inputList)
    )
}