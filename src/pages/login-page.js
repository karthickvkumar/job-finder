import React, { Component } from 'react';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to FindJob Portal</h1>
        <div className="center-form">
          <div>
            <label className="label-width">Enter User Name</label>
            <input type="text" placeholder="Please enter username"/>
          </div>
          <div>
            <label className="label-width">Enter Password</label>
            <input type="password" placeholder="Please password"/>
          </div>
          <div>
            <button className="btn head-btn1">Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;