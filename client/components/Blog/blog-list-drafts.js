import React, { Component } from 'react';
import { Blogs } from '../../../imports/collections/blogs';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import Spinner from '../spinner';
import Header from '../Header/header'

class BlogListDrafts extends Component {

  publishPost(id) {
    Meteor.call('blogs.update', id)
  }

  editPost(id) {
    this.props.routes.history.push(`/dashboard/edit/${id}`)
  }

  deletePost(blog) {
    Meteor.call('blogs.remove', blog)
  }

  renderBlogs() {
    if (!this.props.blogs) {
      return <Spinner />
    } else  {
      return this.props.blogs.map((blog, index) => {
        return (
          <div className="col-sm-12" key={ blog._id } style={{ marginLeft: '1.5%' }}><br/>
            <div className="item-1" >
                  <Link to={ `/${blog.category}/${blog._id}` } className="card" style={{  textDecoration: 'none'  }}>
                    <div className="thumb" style={{ backgroundImage: `url(${blog.coverImg})`}}></div>
                    <article>
                      <h1>{blog.title}</h1>
                      <span>Divyansh Dwivedi<br/>
                      <button className="btn btn-primary"   onClick={() => this.editPost(blog._id)}>Edit</button>
                      <button className="btn btn-info"   onClick={() => this.publishPost(blog._id)}>Publish</button>
                      <button className="btn btn-danger" onClick={() => this.deletePost(blog)}>Delete</button></span>
                    </article>
                  </Link>
            </div>
          </div>
        )
      })
    }
  }

  render () {
    return (
      <div>
        <Header type="red"/>
        <h1>{this.renderBlogs()}</h1>
      </div>
    )
  }
  };

export default createContainer(() => {
  Meteor.subscribe('blogs')

  return { blogs: Blogs.find({}).fetch() }
}, BlogListDrafts);
