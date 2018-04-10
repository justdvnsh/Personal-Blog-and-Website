import React, { Component } from 'react';
import { Blogs } from '../../../imports/collections/blogs';
import { createContainer } from 'meteor/react-meteor-data'

class BlogListDrafts extends Component {

  publishPost(id) {
    Meteor.call('blogs.update', id)
  }

  editPost(id) {
    this.props.history.push(`/dashboard/edit/${id}`)
  }

  renderBlogs() {
    if (!this.props.blogs) {
      return <p>Loading..</p>
    } else  {
      console.log(this.props)
      return this.props.blogs.map((blog) => {
        return (
          <div className="card" key={blog._id} style={{boxShadow: '0 0 40px -6px #777', padding: '30px', borderRadius: '20px', marginBottom: '20px'}}>
            <div className="card-body">
              <h1>{blog.title}</h1>
              <h3>{blog.content}</h3>
              <button className="btn btn-primary" style={{margin: '20px'}} onClick={() => this.editPost(blog._id)}>Edit</button>
              <button className="btn btn-info" onClick={() => this.publishPost(blog._id)}>Publish</button>
            </div>
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
}, BlogListDrafts);
