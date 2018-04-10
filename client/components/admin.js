import React, { Component } from 'react';
import {Blaze} from 'meteor/blaze';
import {Template} from 'meteor/templating';
import ReactDOM from 'react-dom';

class Admin extends Component {
  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.login))
  }

  componentWillUnmount() {
    Blaze.remove(this.view)
  }

  render () {
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <h1><center>Admin Login</center></h1><br /><hr />
          <div className="card">
            <div className="card-body">
                <center><div ref="login"></div></center>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Admin;
