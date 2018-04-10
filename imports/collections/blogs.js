import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'blogs.insert': function(title, category, tags, content) {
    return Blogs.insert({
      title: title,
      createdAt: new Date(),
      category: category,
      tags: tags,
      content: content,
      published: false,
      author: this.userID
    })
  }
});

export const Blogs = new Mongo.Collection('blogs');
