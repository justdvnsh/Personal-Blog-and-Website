import React, { Component } from 'react';
import Header from './Header/header';
import BlogList from './Blog/blog-list';
import { Blogs } from '../../imports/collections/blogs'

import { createContainer } from 'meteor/react-meteor-data';

class BehindTheScenes extends Component {
  render () {
    return (
      <div>
        <Header type="orange"/>
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
  Meteor.subscribe('BehindTheScenes')

  return { blogs: Blogs.find({}).fetch() }
}, BehindTheScenes);
