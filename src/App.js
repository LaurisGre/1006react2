import React from 'react';
import './App.css';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NoticeBoard from './pages/NoticeBoard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: '',
    }
  }

  render() {
    return(
      <Router>
        <Switch>
          <Route path='/login' exact component={LoginPage} />
          <Route path='/register' exact component={RegisterPage} />
          <Route path='/noticeboard' exact component={NoticeBoard} />
        </Switch>
      </Router>
    )
  }
}
