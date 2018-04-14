import React, { Component } from 'react';
import { Blogs } from '../../../imports/collections/blogs';
import { Link } from 'react-router-dom';
import Spinner from '../spinner'

class BlogList extends Component {

  renderBlogs() {
    if (!this.props.blogs) {
      return <Spinner />
    } else  {
      return this.props.blogs.map((blog, index) => {
          return (
              <div><br/>
                <Link to={ `/${blog.category}/${blog._id}` }>
                    <div className="thumbnail">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png" style={{ width: '100%',
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center center',
                                                        height: '5%'}}/>
                        <div className="caption">
                          <h3>{blog.title}</h3>
                          <ul className="list-group">
                            <li className="list-group-item">{blog.metaData}</li>
                          </ul>
                          <span className="span">Divyansh Dwivedi</span>
                        </div>
                      </div>
                  </Link>
              </div>
          )
      })
    }
  }

  render () {
    return (
      <div className="blog-list">
        {this.renderBlogs()}
      </div>
    )
  }
};

export default BlogList;
