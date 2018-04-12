import React, { Component } from 'react';
import NavbarHeader from './navbar-header'

class Header extends Component {
  render () {
    return (
      <header className={"header" + " " + this.props.type}>
        <img src="/img/avatar-my.png" alt="My-avatar" className= "header-img" style={{ height: '35%', borderRadius: '100%', align: 'center', marginLeft: '44.5%', marginTop: '5%'}}/>
        <h2><center>
          <span style={{ fontWeight: 'bold', fontSize: '32px' , color: '#fff', letterSpacing: '1.0rem' }}>Divyansh Dwivedi</span><br />
          <span style={{ fontSize: '18px', color: '#ececec' , letterSpacing: '0.5rem'}} >Contributing something to humanity</span>
        </center></h2>
        <NavbarHeader />
      </header>
    )
  }
};

export default Header;
