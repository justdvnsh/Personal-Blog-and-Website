import React , { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Blogs } from '../../../imports/collections/blogs';
import { Link } from 'react-router-dom';
import { MarkdownPreview } from 'react-marked-markdown';

class BlogDetail extends Component {
  render () {
    console.log(this.props )

    let blog = <p> Loading </p>

    if (this.props.blog) {
      blog = (
        <div className="container-fluid" >
          <div className="row">
            <div className="col-md-12">
              <div className="container-fluid" style={{  width: '85%', borderRadius: '5px'}}>
                <center><p> 28 Feb 2018 / <Link to={`/${this.props.blog.category}`}>{ this.props.blog.category } </Link></p></center>
                <h1>{ this.props.blog.title }</h1>
                <hr />
                <br />
                <MarkdownPreview
                      value={this.props.blog.content}
                      markedOptions={{
                        gfm: true,
                        tables: true,
                        breaks: false,
                        pedantic: false,
                        sanitize: true,
                        smartLists: true,
                        smartypants: false
                       }} />
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
