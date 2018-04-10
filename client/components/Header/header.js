import React, { Component } from 'react';
import Navbar from './navbar'

class Header extends Component {
  render () {
    return (
      <header className={"header" + " " + this.props.type}>
        <img src="" alt="My-avatar" />
        <Navbar />
      </header>
    )
  }
};

export default Header;
