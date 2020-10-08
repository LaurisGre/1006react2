import React from 'react';
import CreateIcon from '../components/CreateIcon';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AllPostsPage from './AllPostsPage';
import NewPostPage from './NewPostPage';

export default class NoticeBoard extends React.Component {
    constructor(props) {
        super(props);
    
        this.iconList = [
            {
                name: 'allPosts',
                url: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
                link: '/noticeboard/allposts',
            },
            {
                name: 'newPost',
                url: 'M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                link: '/noticeboard/newpost',
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
                <div>
                    <Router>
                        <Switch>
                            <Route path='/noticeboard/:allposts' exact component={AllPostsPage} />
                            <Route path='/noticeboard/:newpost' exact component={NewPostPage} />
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }

}

// TO DO
// create icons with links to "ALL POSTS" & "NEW POST"
// create a post creator "CREATEPOST"
// create two new pages for displaying all posts and creating a new post
// link those pages to the icons