import { Meteor } from 'meteor/meteor';
import { Blogs } from '../imports/collections/blogs'

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('blogs', function() {
    return Blogs.find({published: false}, { limit: 5 })
  })

  Meteor.publish('PublishedBlogs', function() {
    return Blogs.find({published: true}, { limit: 5 })
  })
});
