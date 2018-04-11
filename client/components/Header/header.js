import React, { Component } from 'react';
import NavbarHeader from './navbar-header'

class Header extends Component {
  render () {
    return (
      <header className={"header" + " " + this.props.type}>
        <img src="" alt="My-avatar" />
        <NavbarHeader />
      </header>
    )
  }
};

export default Header;
