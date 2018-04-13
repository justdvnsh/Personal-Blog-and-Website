import React , { Component } from 'react';
import { Link } from 'react-router-dom'

class NavbarBlog extends Component {
  render () {
    return (
      <nav className={"navbar navbar-default" + " " + this.props.color} style={{position: 'absolute', top: '0', width: '100%', border: 'none',
                                                                        textDecoration: 'none', height: '10px'}}>
        <div className="container-fluid navbar-custom">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse " id="bs-example-navbar-collapse-1" style={{ width: '85%', marginLeft:'7%' }}>
            <ul className="nav navbar-nav ">
              <li><a href="/">Home</a></li>
              <li><a href="/blockchain">Blockchain</a></li>
              <li><a href="/behind-the-scenes">Behind-the-Scenes</a></li>
              <li><a href="/general">General</a></li>
              <li><a href="https://justdvnsh.github.io">About</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right" >
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Insta</a></li>
              <li><a href="#">Steemit</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default NavbarBlog ;
