import React from 'react';
import CreateInput from './CreateInput';

export default class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.credentials = {}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // this.setState({value: event.target.value});
        console.log(this.state);
        console.log('asdasd');
    }

    handleSubmit(event) {
        //fetch

        alert('you submited: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.props.inputs.map(input => 
                <CreateInput change={this.handleChange} name={input.name} type={input.type} placeholder={input.placeholder} label={input.label}/>
                )}
            </form>
        )
    }
}