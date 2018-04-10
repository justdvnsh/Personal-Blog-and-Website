import React, { Component } from 'react';
import Navbar from './Header/navbar';
import Header from './Header/header';
import BlogList from './Blog/blog-list'

class App extends Component {
  render () {
    return (
      <div>
      <Header type="green"/>
      <BlogList />
      </div>
    )
  }
};

export default App;
