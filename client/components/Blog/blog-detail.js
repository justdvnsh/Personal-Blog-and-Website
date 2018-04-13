import React , { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Blogs } from '../../../imports/collections/blogs';
import { Link } from 'react-router-dom';
import { MarkdownPreview } from 'react-marked-markdown';
import Spinner from '../spinner';


class BlogDetail extends Component {

  unpublish(id) {
    Meteor.call('blogs.unpublish', id)
  }

  render () {
    console.log(this.props )

    let blog = (
        <Spinner />
      )

    if (this.props.blog) {
      blog = (
        <div>
          <div className="container-fluid" >
            <div className="row">
              <div className="col-md-12">
                <div className="container-fluid" style={{  width: '85%', borderRadius: '5px'}}>
                  <center><p style={{ marginTop: '60px' }}> 28 Feb 2018 / <Link to={`/${this.props.blog.category}`}>{ this.props.blog.category } </Link></p></center>
                  <h1 style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '0px', fontSize: '48px'}}>{ this.props.blog.title }</h1><br/>
                  <div className="row">
                      {
                        Meteor.userId() ? (
                          <button className="btn btn-danger" onClick={() => this.unpublish(this.props.blog._id)}>Unpublish</button>
                        ) : null
                      }
                    <div className=" col-md-8 col-md-offset-2">
                      <img src = { this.props.blog.coverImg } style={{ width:  '100%', height: '100%', position: 'relative' }} />
                    </div>
                  </div>
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
