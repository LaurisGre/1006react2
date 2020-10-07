import React from 'react';
import CreateInput from './CreateInput';
import { useForm } from 'react-hook-form';
import CreateFetch from './CreateFetch';

export default function CreateForm(props) {

    const {register, handleSubmit, errors} = useForm()

    const onSubmit = (data) => {
        const bundleData = {
            credentials: data,
            method: props.fetchMethod
        }

        CreateFetch(bundleData);
        // console.log(data);
    }
   
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {props.inputs.map(input => 
                <CreateInput 
                    aref={register}
                    name={input.name} 
                    type={input.type} 
                    placeholder={input.placeholder} 
                    label={input.label}
                />
            )}
        </form>
    )
}