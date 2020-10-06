import React from 'react';
import CreateInput from './CreateInput';

export default function CreateForm(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {value: ''};

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleChange(event) {
    //     this.setState({value: event.target.value});
    // }

    // handleSubmit(event) {
    //     alert('you submited: ' + this.state.value);
    //     event.preventDefault();
    // }


    return (
        <form>
            {props.map(input => 
            <CreateInput name={input.name} type={input.type} />
            )}
            {/* <label for='username'>Username</label>
            <label for='password'>Password</label> */}
        </form>
    )
}