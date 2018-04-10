import React , { Component } from 'react';
import BlogListDrafts from './Blog/blog-list-drafts';
import { Meteor } from 'meteor/meteor'

class Drafts extends Component {
  render () {
    let drafts = <p>You need to Login First</p>

    if(Meteor.userId()) {
      drafts = <BlogListDrafts />
    }
    return drafts;
  }
};

export default Drafts;
