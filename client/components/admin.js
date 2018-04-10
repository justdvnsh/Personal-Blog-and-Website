import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router-dom'

class Admin extends Component {
  state = {
    authenticated: false
  }

  submitHandler(event) {
    event.preventDefault()

    var email = this.refs.email.value;
    var password = this.refs.password.value;
    Meteor.loginWithPassword(email, password, function(error){
      console.log(error);
      this.setState({ authenticated: true })
    });

    this.refs.email.value = '';
    this.refs.password.value = ''
    this.props.history.push('/dashboard')
    console.log(this.props)
  }

  logoutHandler() {
    Meteor.logout();
    this.setState({ authenticated: false })
  }


  render () {
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <h1><center>Admin Login</center></h1><br /><hr />
          <div className="card">
            <div className="card-body">
                <center>
                <form className="login" onSubmit={this.submitHandler.bind(this)}>
                    <p>Email: <input ref="email" type="email" name="email" className="form-control"/></p>
                    <p>Password: <input ref="password" type="password" name="password" className="form-control"/></p>
                    <p><button className="btn btn-default" type="submit">Login</button></p>
                </form>
                <button className="btn btn-default" onClick={this.logoutHandler.bind(this)}>Logout</button>
                </center>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Admin;
