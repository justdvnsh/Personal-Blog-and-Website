import React , { Component } from 'react';
import BlogListDrafts from './Blog/blog-list-drafts';
import { Meteor } from 'meteor/meteor';
import Spinner from './spinner'

class Drafts extends Component {
  render () {
    let drafts = <Spinner />

    if(Meteor.userId()) {
      drafts = <BlogListDrafts routes={this.props}/>
    }
    return drafts;
  }
};

export default Drafts;
