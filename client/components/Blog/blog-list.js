import React, { Component } from 'react';
import { Blogs } from '../../../imports/collections/blogs';
import { createContainer } from 'meteor/react-meteor-data'

class BlogListDrafts extends Component {

  renderBlogs() {
    if (!this.props.blogs) {
      return <p>Loading..</p>
    } else  {
      return this.props.blogs.map((blog) => {
        return (
            <div className="col-md-12">
              <div className="card" key={blog._id} style={{ backgroundColor: "#fff" ,boxShadow: '0 0 40px -6px #777', padding: '30px', borderRadius: '5px', marginBottom: '20px', width: '100%'}}>
                <div className="card-body">
                  <h1>{blog.title}</h1>
                  <h3>{blog.content}</h3>
                  <button className="btn btn-primary" style={{margin: '20px'}}>Edit</button>
                </div>
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
  Meteor.subscribe('PublishedBlogs')

  return { blogs: Blogs.find({}).fetch() }
}, BlogListDrafts);
