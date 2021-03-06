import React, { Component } from 'react';
import Header from './Header/header';
import BlogList from './Blog/blog-list';
import { Blogs } from '../../imports/collections/blogs'

import { createContainer } from 'meteor/react-meteor-data';

class General extends Component {
  render () {
    return (
      <div>
        <Header type="purple"/>
        <div className="container-fluid" style={{backgroundColor: '#ececec'}}>
          <div className="row" style={{ width: '100%'}}>
            <BlogList blogs={this.props.blogs}/>
          </div>
        </div>
      </div>
    )
  }
};

export default createContainer(() => {
  Meteor.subscribe('general')

  return { blogs: Blogs.find({}).fetch() }
}, General);
