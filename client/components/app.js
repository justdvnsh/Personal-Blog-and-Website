import React, { Component } from 'react';
import Header from './Header/header';
import BlogList from './Blog/blog-list';
import { createContainer } from 'meteor/react-meteor-data';
import { Blogs } from '../../imports/collections/blogs'

class App extends Component {
  render () {
    console.log(']app]',this.props)

    return (
      <div>
        <Header type="green"/>
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
  Meteor.subscribe('PublishedBlogs')

  return { blogs: Blogs.find({}).fetch() }
}, App);
