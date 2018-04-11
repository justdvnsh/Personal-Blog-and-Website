import React , { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Blogs } from '../../../imports/collections/blogs';
import { Link } from 'react-router-dom';
import {markdown} from 'markdown';

class BlogDetail extends Component {
  render () {
    console.log(this.props )

    let blog = <p> Loading </p>

    if (this.props.blog) {

      const rawHTML = markdown.toHTML(this.props.blog.content)

      blog = (
        <div className="container-fluid" >
          <div className="row">
            <div className="col-md-12">
              <div className="container-fluid" style={{  width: '85%', borderRadius: '5px'}}>
                <center><p> 28 Feb 2018 / <Link to={`/${this.props.blog.category}`}>{ this.props.blog.category } </Link></p></center>
                <h1>{ this.props.blog.title }</h1>
                <hr />
                <br />
                <div dangerouslySetInnerHTML={{__html: rawHTML}} ref="preview">

                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return blog;
  }
};

export default createContainer((props) => {
  Meteor.subscribe('PublishedBlogs');
  Meteor.subscribe('blogs');

  return { blog: Blogs.findOne(props.props.match.params.id) }
}, BlogDetail)
