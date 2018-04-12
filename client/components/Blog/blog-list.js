import React, { Component } from 'react';
import { Blogs } from '../../../imports/collections/blogs';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

class BlogList extends Component {

  renderBlogs() {
    if (!this.props.blogs) {
      return <p>Loading..</p>
    } else  {
      return this.props.blogs.map((blog, index) => {

        if ( index === 0 || index%4 === 0 ) {
          return (
              <div className="col-md-12" key={blog._id}>
                <Link to={`/${blog.category}/${blog._id}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ backgroundColor: "#fff" ,boxShadow: '0 0 40px -6px #777', padding: '30px', borderRadius: '10px', marginBottom: '20px', width: '80%',marginLeft: '9.5%', height: '330px'}}>
                    <div className="card-body">
                      <div className="col-md-8">
                        <img src={ blog.coverImg } align="left" style={{ width: '100%', height: '100%', display: 'block' }}/>
                      </div>
                      <div className="col-md-4">
                        <h1 style={{ wordWrap: 'break-word'}}> {blog.title}</h1>
                        <p style={{ wordWrap: 'break-word', fontSize: '22px' }}>{ blog.metaData }</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
          )
        } else {
          return (
              <div className="col-md-4 custom-card" key={blog._id} style={{ width: '27%' }} >
                <Link to={`/${blog.category}/${blog._id}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ backgroundColor: "#fff" ,boxShadow: '0 0 40px -6px #777', padding: '30px', borderRadius: '10px', marginLeft: '36%', marginTop: '10%', marginBottom: '10%' ,width: '100%', height: '600px', wordWrap: "break-word"}}>
                    <div className="card-body">
                      <div className="row">
                        <img src={ blog.coverImg } align="left" style={{ width: '100%', height: '100%', display: 'block'}}/>
                      </div>
                      <div className="row">
                        <h1 style={{ wordWrap: 'break-word'}}>{blog.title}</h1>
                        <p style={{ wordWrap: 'break-word', fontSize: '22px' }}>{ blog.metaData }</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
          )
        }
      })
    }
  }

  render () {
    return (
      <div>
        <h1>{this.renderBlogs()}</h1>
      </div>
    )
  }
};

export default createContainer(() => {
  Meteor.subscribe('PublishedBlogs')

  return { blogs: Blogs.find({}).fetch() }
}, BlogList);
