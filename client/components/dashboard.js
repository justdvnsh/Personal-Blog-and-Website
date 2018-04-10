import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class Dashboard extends Component {
  submitHandler(event) {
    event.preventDefault();

    console.log(this.refs.title.value, this.refs.select.value, this.refs.tags.value, this.refs.content.value)

    Meteor.call('blogs.insert', this.refs.title.value, this.refs.select.value, this.refs.tags.value, this.refs.content.value)
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <div className="card">
            <div className="card-body">
              <h1>Blog Post</h1>
              <div className="form-group">
                <form onSubmit={this.submitHandler.bind(this)}>
                  <input type="text" placeholder="Title..." ref="title" className="form-control"/><br />
                  <select ref="select">
                    <option>Blockchain</option>
                    <option>Developement</option>
                    <option>Behind-the-scenes</option>
                    <option>general</option>
                  </select><br />
                  <input type="text" ref="tags" className="form-control" placeholder="Tags..."/><br />
                  <textarea type="textarea" placeholder="asdasd" ref="content" /><br />
                  <button className="btn btn-success" type="submit"> POST</button><br />
                </form><br />
                <button className="btn btn-warning">Save as Draft</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Dashboard;
