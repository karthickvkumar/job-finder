import React, { Component } from 'react';
import axios from 'axios';

class RegisterPage extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      register : {
        first_name : "",
        last_name : '',
        email : '',
        password: ''
      },
      loading : false
    };
  }

  onHandleInput = (event) => {
    this.setState({
      register : {...this.state.register, [event.target.name] : event.target.value}
    })
  }

  createAccount(){
    const url = "https://reqres.in/api/register";
    const data = {
      "email": "eve.holt@reqres.in",
      "password": "pistol"
    }
    this.setState({
      loading : true
    })
    axios.post(url, data)
          .then((response) => {
            console.log(response)
            this.setState({
              loading : false
            })
          })
          .catch((error) => {
            console.log(error)
            this.setState({
              loading : false
            })
          })
  }

  render() {
    return (
      <div>
        <div>
        <h1>Welcome to FindJob Portal</h1>
        <h3>Create your new account</h3>
        <div className="center-form">
          <div>
            <label className="label-width">Enter First Name</label>
            <input type="text" name="first_name" placeholder="Please first name" onChange={this.onHandleInput}/>
          </div>
          <div>
            <label className="label-width">Enter Last Name</label>
            <input type="text" name="last_name" placeholder="Please last name" onChange={this.onHandleInput}/>
          </div>
          <div>
            <label className="label-width">Enter New Username</label>
            <input type="text" name="email" placeholder="Please enter username" onChange={this.onHandleInput}/>
          </div>
          <div>
            <label className="label-width">Enter New Password</label>
            <input type="password" name="password" placeholder="Please password" onChange={this.onHandleInput}/>
          </div>
          <div>
            <button className="btn head-btn1" onClick={() => { this.createAccount() }}>{this.state.loading ? "Loading.." : "Create My Account"}</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default RegisterPage;