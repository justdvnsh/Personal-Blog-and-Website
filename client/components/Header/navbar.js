import React , { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-default navbar-custom" style={{position: 'absolute', bottom: '0', width: '80%', background: 'transparent', border: 'none',
                                                      textDecoration: 'none', left: '8%'}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/blockchain">Blockchain</a></li>
              <li><a href="/developement">Developement</a></li>
              <li><a href="/behind-the-scenes">Behind-the-Scenes</a></li>
              <li><a href="/about">About</a></li>
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

export default Navbar ;
