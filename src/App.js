import React from 'react';
import './App.css';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = 'login'
  }

  render() {
    if (this.state === 'token') {
      return (console.log('token'),
      <div>asdas</div>)
    } else if (this.state === 'login') {
      return <LoginPage />
    } else if (this.state === 'register') {
      return <RegisterPage />
    }
  }
}
