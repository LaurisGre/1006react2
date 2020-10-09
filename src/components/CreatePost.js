import React from 'react';

export default class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: []
        }

        this.user = JSON.parse(localStorage.getItem('token'));
    }

    componentDidMount() {
        fetch(`http://rest.stecenka.lt/api/vartotojai`, 
            {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': this.user.token,
                },
                method: `GET`,
            }
        )
        .then(res => res.json())
        .then(data => {
            this.setState({
                userList: data
            })
        })
    }

    deletePost() {

        if(window.confirm('Are you sure you want to delete this post?')) {
            fetch(`http://rest.stecenka.lt/api/skelbimai/${this.props.id}`, 
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': this.user.token,
                    },
                    method: `DELETE`,
                }
            )
            .then(res => res.json())
        }
        
    }
    

    render() {

        const { userList } = this.state;

        return(
            <div className='postBox'>
                <div className='postTitle'>
                    {this.props.title}
                </div>
                <div className='postDetails'>
                    {userList.map(user => user.id === this.props.user ? <div>{user.name} {user.surname}</div> : '')}
                    <div>{this.props.date}</div>
                </div>
                <div className='postBody'>
                    <div>{this.props.body}</div>
                </div>
                {this.props.user === this.user.id ?
                    <button 
                        className='postDel' 
                        onClick={() => this.deletePost()}>
                        DELETE
                    </button> :
                    ''
                }
            </div>
        )
    }
}