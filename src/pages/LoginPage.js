import React from 'react';
import CreateForm from '../components/CreateForm';
import CreateIcon from '../components/CreateIcon';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.inputList = [
            {
                name: 'email',
                type: 'email',
                placeholder: 'paštas@elektroninis.lt',
                label: 'EL.PAŠTAS',
            },
            {
                name: 'password',
                type: 'password',
                placeholder: 'Slaptažodis',
                label: 'SLAPTAŽODIS',
            },
            {
                name: 'login',
                type: 'submit',
                placeholder: 'PRISIJUNGTI',
                label: '/allposts',
            },
        ]

        this.iconList = [
            {
                name: 'loginIcon',
                url: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
                link: '',
            },
            {
                name: 'registerIcon',
                url: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z',
                link: '/register',
            },
        ]

        this.fetchMethod = {
            type: 'login',
            link: 'login',
            method: 'POST',
            path: '/noticeboard',
        }

    }

    render() {
        return (
            <div className='formBox'>
                <div>PRISIJUNGIMAS</div>
                <CreateIcon icon={this.iconList[0]} />
                <CreateForm inputs={this.inputList} fetchMethod={this.fetchMethod} />
                <div>Pirmą kartą?</div>
                <CreateIcon icon={this.iconList[1]} />
            </div>
        )
    }
}