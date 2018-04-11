import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Blogs } from '../../imports/collections/blogs'

import BlogDetail from './Blog/blog-detail';
import NavbarBlog from './Header/navbar-blog'

class GeneralSingle extends Component {
  render () {
    return (
      <div style={{ backgroundColor: "#fff" , height: '100vh' }}>
        <NavbarBlog color='purple'/><br /><br />
        <BlogDetail props={this.props} />
      </div>
    )
  }
};


export default GeneralSingle;
