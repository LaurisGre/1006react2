import React from 'react';
import CreateIcon from '../components/CreateIcon';
import CreateForm from '../components/CreateForm';

export default class NoticeBoard extends React.Component {
    constructor(props) {
        super(props);
    
        this.inputList = [
            {
                name: 'title',
                type: 'text',
                placeholder: 'Parduodu, o gal ir ieškau ...',
                label: 'ANTRAŠTĖ',
            },
            {
                name: 'body',
                type: 'textarea',
                placeholder: 'Kokia tavo žinia?',
                label: 'SKELBIMAS',
            },
            {
                name: 'post',
                type: 'submit',
                placeholder: 'SKELBTI',
                label: '/allposts',
            },
        ];

        this.iconList = [
            {
                name: 'allPosts',
                url: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
                link: '/allposts',
            },
            {
                name: 'newPost',
                url: 'M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                link: '/newpost',
            },
            {
                name: 'logout',
                url: 'M6 18L18 6M6 6l12 12',
                link: '/login',
            },
            {
                name: 'new message',
                url: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
                link: '/newpost',
                
            }
        ]

        this.fetchMethod = {
            type: 'newPost',
            link: 'api/skelbimai',
            method: 'POST',
            path: '/allposts',
        }

    }

    render() {
        return(
            <div className='mainBoard'>
                <nav>
                        <div className='navIcon'>
                            <CreateIcon icon={this.iconList[0]} />
                            All Posts
                        </div>
                        <div className='navIcon'>
                            <CreateIcon icon={this.iconList[1]} />
                            New Post
                        </div>
                        <div className='navIcon'>
                            <CreateIcon icon={this.iconList[2]} />
                            Log Out
                        </div>
                    </nav>
                <div className='newPostPage'>
                    <div className='formBox, newPost'>
                        <CreateIcon icon={this.iconList[3]} />
                        <CreateForm inputs={this.inputList} fetchMethod={this.fetchMethod} />
                    </div>
                </div>
            </div>
        )
    }

}