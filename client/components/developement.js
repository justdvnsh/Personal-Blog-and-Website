import React, { Component } from 'react';
import Header from './Header/header';
import BlogList from './Blog/blog-list'

class Developement extends Component {
  render () {
    return (
      <div>
        <Header type="orange"/>
        <div className="container-fluid" style={{backgroundColor: '#ececec'}}>
          <div className="row" style={{ width: '100%'}}>
            <BlogList />
          </div>
        </div>
      </div>
    )
  }
};

export default Developement;
