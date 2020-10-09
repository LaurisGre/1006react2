import React from 'react';
import './App.css';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AllPostsPage from './pages/AllPostsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewPostPage from './pages/NewPostPage';

export default class App extends React.Component {

  render() {
    return(
      <Router>
        <Switch>
          <Route path='/' exact component={LoginPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/register' exact component={RegisterPage} />
          <Route path='/allposts' exact component={AllPostsPage} />
          <Route path='/newpost' exact component={NewPostPage} />
        </Switch>
      </Router>
    )
  }
}
