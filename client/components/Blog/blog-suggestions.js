import React, { Component } from 'react';
import { Blogs } from '../../../imports/collections/blogs';
import { createContainer } from 'meteor/react-meteor-data';

class BlogSuggestions extends Component {

  renderBlogs() {
    return this.props.blogs.map((blog) => {
      <div className="col-xs-4">
        <div className="card" style={{ boxShadow: '0 0 40px -6px #777' }}>
          <div className="card-body">
            <div className="row">
              <div className="col-xs-12">
              {
                blog.coverImg ? <img src={ blog.coverImg } align="left" className='card-img'/> : <img src="" className="xs-4-img-not-found"/>
              }
              </div>
            </div>
            <div className="row" style={{ padding: '30px' }}>
              <span style={{ color: '#777', fontSize: '15px', textTransform: 'capitalize' }}>{ blog.category }</span>
              <h1 style={{ wordWrap: 'break-word'}} className="blog-list-h1">{blog.title}</h1>
              <p style={{ wordWrap: 'break-word', fontSize: '18px', color: 'black' }}>{ blog.metaData }</p>
              <span style={{ textTransform: 'capitalize', fontSize: '15px', color: 'rgba(77,166,255, 0.8)', fontWeight: 'bold' }}>Divyansh Dwivedi</span>
            </div>
          </div>
        </div>
      </div>
    })
  }

  render () {
    console.log('[Suggest]',this.props)

    return (
      <div className="container-fluid" style={{ backgroundColor: '#ececec' }}>
        <div className="row">
          {this.renderBlogs()}
        </div>
      </div>
    )
  }
};

export default createContainer((props) => {
  Meteor.subscribe('developement-suggest')

  return { blogs: Blogs.find({}).fetch() }
}, BlogSuggestions)
