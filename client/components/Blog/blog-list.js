import React, { Component } from 'react';
import { Blogs } from '../../../imports/collections/blogs';
import { createContainer } from 'meteor/react-meteor-data'

class BlogList extends Component {

  renderBlogs() {
    if (!this.props.blogs) {
      return <p>Loading..</p>
    } else  {
      return this.props.blogs.map((blog) => {
        return (
          <div className="card" key={blog._id}>
            <h1>{blog.title}</h1>
            <h3>{blog.content}</h3>
          </div>
        )
      })
    }
  }

  render () {
    return (
      <div className="container">
        <h1>{this.renderBlogs()}</h1>
      </div>
    )
  }
};

export default createContainer(() => {
  Meteor.subscribe('blogs')

  return { blogs: Blogs.find({}).fetch() }
}, BlogList);
