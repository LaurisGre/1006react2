import React from 'react';
import CreateIcon from '../components/CreateIcon';
import CreatePost from '../components/CreatePost';

export default class NoticeBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: [],
        }
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
        ]

        this.fetchMethod = {
            link: 'api/skelbimai',
            method: 'GET',
            path: '/noticeboard',
        }

        this.user = JSON.parse(localStorage.getItem('token'));

    }

    componentDidMount() {
        fetch(`http://rest.stecenka.lt/api/skelbimai`, 
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
                postList: data
            })
        })
    }

    render() {

        const { postList } = this.state;
        console.log(postList);
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
                <div className='allPostPage'>
                    {postList.map(post => 
                        <CreatePost 
                            title={post.title}
                            user={post.user_id}
                            date={post.created_at}
                            body={post.body}
                            id={post.id}
                        />
                    )}
                </div>
            </div>
        )
    }

}