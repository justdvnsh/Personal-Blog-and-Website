import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Blogs } from '../../imports/collections/blogs';
import { createContainer } from 'meteor/react-meteor-data';
import { markdown } from 'markdown'

class DashboardEdit extends Component {
  submitHandler(event) {
    event.preventDefault();

    console.log(this.refs.title.value, this.refs.select.value, this.refs.tags.value, this.refs.content.value)

    Meteor.call('blogs.edit', this.props.blog._id ,this.refs.title.value, this.refs.select.value, this.refs.tags.value, this.refs.content.value)
  }

  onEditorChange() {
    this.refs.preview.value = this.refs.content.value
  }

  render() {
    console.log(this.props)

    let dashboard = <p> You need to Login First..!</p>

    if (Meteor.userId() && this.props.blog) {
      const rawHTML = markdown.toHTML(this.props.blog.content)
       dashboard = (
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <div className="card">
              <div className="card-body">
                <h1>Blog Post Edit</h1>
                <div className="form-group">
                  <form onSubmit={this.submitHandler.bind(this)}>
                    <input type="text" ref="title" className="form-control" defaultValue={this.props.blog.title}  /><br />
                    <select ref="select" className="form-control" defaultValue={this.props.blog.category}>
                      <option>Blockchain</option>
                      <option>Developement</option>
                      <option>Behind-the-scenes</option>
                      <option>general</option>
                    </select><br />
                    <input type="text" ref="tags" className="form-control"  defaultValue={this.props.blog.tags} /><br />
                    <textarea type="textarea" ref="content" defaultValue={this.props.blog.content} className="form-control" onChange={() => this.onEditorChange()}/><br />
                    <button className="btn btn-success" type="submit">Save</button><br />
                  </form><br />
                </div><br />
                <div className="container">
                  <div dangerouslySetInnerHTML={{__html: rawHTML}} ref="preview"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return dashboard
  }
};

export default createContainer((props) => {
    Meteor.subscribe('blogs');
    Meteor.subscribe('PublishedBlogs');

    return { blog: Blogs.findOne(props.match.params.id) }
}, DashboardEdit);
