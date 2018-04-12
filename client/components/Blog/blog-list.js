import React, { Component } from 'react';
import { Blogs } from '../../../imports/collections/blogs';
import { Link } from 'react-router-dom';

class BlogList extends Component {

  renderBlogs() {
    if (!this.props.blogs) {
      return <p>Loading..</p>
    } else  {
      return this.props.blogs.map((blog, index) => {

        if ( index === 0 || index%4 === 0 ) {
          return (
              <div className="col-sm-12 col-xs-12" key={blog._id}>
                <Link to={`/${blog.category}/${blog._id}`} style={{ textDecoration: 'none' }}>
                  <div className="card card-mobile-xs-12" >
                    <div className="card-body">
                      <div className="col-xs-8">
                        {
                           blog.coverImg ? <img src={ blog.coverImg } align="left" className="card-img"/> : <img src="" className="xs-12-img-not-found"/>
                        }
                      </div>
                      <div className="col-xs-4" style={{  padding: '10px' }}>
                        <span style={{ color: '#777', fontSize: '15px', textTransform: 'capitalize' }}>{ blog.category }</span>
                        <h1 style={{ wordWrap: 'break-word'}} className="blog-list-h1"> {blog.title}</h1>
                        <p style={{ wordWrap: 'break-word', fontSize: '18px', color: 'black' }}>{ blog.metaData }</p>
                        <span style={{ textTransform: 'capitalize', fontSize: '15px', color: 'rgba(77,166,255, 0.8)', fontWeight: 'bold' }}>Divyansh Dwivedi</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
          )
        } else {
          return (
              <div className="col-sm-4  custom-card col-xs-6" key={blog._id} >
                <Link to={`/${blog.category}/${blog._id}`} style={{ textDecoration: 'none' }}>
                  <div className="card card-mobile-xs-4" >
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

export default BlogList;
