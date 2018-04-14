import React, { Component } from 'react';
import Header from './Header/header';
import BlogList from './Blog/blog-list';
import { createContainer } from 'meteor/react-meteor-data';
import { Blogs } from '../../imports/collections/blogs'
import Spinner from './spinner'


const PER_PAGE = 3

class App extends Component {

  componentWillMount() {
    this.page = 1
  }

  handleButtonClick() {
    Meteor.subscribe('PublishedBlogs',  PER_PAGE * (this.page + 1));
    this.page += 1;
  }

  render () {
    console.log(']app]',this.props)

    return (
      <div>
        <Header type="green"/>
          <BlogList blogs={this.props.blogs}/> 
          <center><button className='btn btn-default'
                  onClick={this.handleButtonClick.bind(this)}
                  style={{ boxShadow: '0 0 8px -6px #777', marginBottom: '50px', marginTop: '50px' }}>Load More...!</button></center>
      </div>
    )
  }
};

export default createContainer(() => {
  Meteor.subscribe('PublishedBlogs', PER_PAGE)

  return { blogs: Blogs.find({}).fetch() }
}, App);
