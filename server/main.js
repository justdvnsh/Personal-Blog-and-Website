import { Meteor } from 'meteor/meteor';
import { Blogs } from '../imports/collections/blogs'

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('blogs', function() {
    return Blogs.find({published: false})
  })

  Meteor.publish('PublishedBlogs', function() {
    return Blogs.find({published: true})
  })

  Meteor.publish('blockchain', function() {
    return Blogs.find({ category: 'blockchain' })
  })

  Meteor.publish('developement', function() {
    return Blogs.find({ category: 'developement' })
  })

  Meteor.publish('BehindTheScenes', function() {
    return Blogs.find({ category: 'behind-the-scenes' })
  })

  Meteor.publish('general', function() {
    return Blogs.find({ category: 'general' })
  })

});
