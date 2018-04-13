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
                  <div className="col-sm-12" key={ blog._id } style={{ marginLeft: '1.5%' }}><br/>
                    <div className="item-1" >
                          <Link to={ `/${blog.category}/${blog._id}` } className="card" style={{  textDecoration: 'none'  }}>
                            <div className="thumb" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png)'}}></div>
                            <article>
                              <h1>{blog.title}</h1>
                              <span>Divyansh Dwivedi</span>
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
        <h1>{this.renderBlogs()}</h1>
      </div>
    )
  }
};

export default BlogList;
