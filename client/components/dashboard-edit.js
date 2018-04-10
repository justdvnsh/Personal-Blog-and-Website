import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Blogs from '../../imports/collections/blogs';
import { createContainer } from 'meteor/react-meteor-data'

class DashboardEdit extends Component {
  submitHandler(event) {
    event.preventDefault();

    console.log(this.refs.title.value, this.refs.select.value, this.refs.tags.value, this.refs.content.value)

    Meteor.call('blogs.edit', this.refs.title.value, this.refs.select.value, this.refs.tags.value, this.refs.content.value)
  }

  render() {
    console.log(this.props)

    let dashboard = <p> You need to Login First..!</p>

    if (Meteor.userId()) {
       dashboard = (
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <div className="card">
              <div className="card-body">
                <h1>Blog Post</h1>
                <div className="form-group">
                  <form onSubmit={this.submitHandler.bind(this)}>
                    <input type="text" placeholder="Title..." ref="title" className="form-control"/><br />
                    <select ref="select" className="form-control">
                      <option>Blockchain</option>
                      <option>Developement</option>
                      <option>Behind-the-scenes</option>
                      <option>general</option>
                    </select><br />
                    <input type="text" ref="tags" className="form-control" placeholder="Tags..."/><br />
                    <textarea type="textarea" placeholder="asdasd" ref="content" /><br />
                    <button className="btn btn-success" type="submit">Save</button><br />
                  </form><br />
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
    let blog = Blogs.findOne({ _id: this.props.params.id })

    return { blog: blog }
}, DashboardEdit);
