import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { MarkdownPreview } from 'react-marked-markdown'

class Dashboard extends Component {

  state = {
    value: ''
  }

  submitHandler(event) {
    event.preventDefault();

    let tags = this.refs.tags.value.split(' ')
    console.log(this.refs.title.value, this.refs.select.value, tags, this.refs.content.value)

    Meteor.call('blogs.insert', this.refs.title.value, this.refs.select.value, tags, this.refs.coverImg.value,  this.refs.metaData.value  ,this.refs.content.value)
  }

  handleTextChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    console.log(this.props, Meteor.userId())

    let dashboard = <p> You need to Login First..!</p>

    if (Meteor.userId()) {
       dashboard = (
        <div className="container" >
          <div className="col-md-8 col-md-offset-2">
            <div className="card">
              <div className="card-body">
                <h1>Blog Post</h1>
                <div className="form-group">
                  <form onSubmit={this.submitHandler.bind(this)}>
                    <input type="text" placeholder="Title..." ref="title" className="form-control"/><br />
                    <select ref="select" className="form-control">
                      <option>blockchain</option>
                      <option>developement</option>
                      <option>behind-the-scenes</option>
                      <option>general</option>
                    </select><br />
                    <input type="text" ref="tags" className="form-control" placeholder="Tags..."/><br />
                    <input type="text" ref="coverImg" className="form-control" placeholder="Img Path" onChange={this.handleTextChange.bind(this)}/><br />
                    <textarea type="textarea" placeholder="meta data..." ref="metaData" className="form-control" onChange={this.handleTextChange.bind(this)}/><br />
                    <textarea type="textarea" placeholder="Contetn..." ref="content" className="form-control" onChange={this.handleTextChange.bind(this)}/><br />
                    <button className="btn btn-success" type="submit">Save</button><br />
                  </form><br />
                </div>
                <MarkdownPreview value={this.state.value}   markedOptions={{
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
    return dashboard
  }
};

export default Dashboard;
