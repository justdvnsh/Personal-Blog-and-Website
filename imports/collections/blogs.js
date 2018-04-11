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
  },

  'blogs.update': function(id) {
    return Blogs.update(id, { $set: { published: true } })
  },

  'blogs.edit': function(id, title, category, tags, content) {
    return Blogs.update(id, { $set: { title, category , tags ,content } })
  },
});

export const Blogs = new Mongo.Collection('blogs');
