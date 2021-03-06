import { Meteor } from 'meteor/meteor';
import { Blogs } from '../imports/collections/blogs'

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('blogs', function() {
    return Blogs.find({published: false})
  })

  Meteor.publish('PublishedBlogs', function(per_page) {
    return Blogs.find({published: true}, { limit: per_page })
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

  Meteor.publish('suggest', function(category) {
    return Blogs.find({ category: category }, { limit: 3 })
  })

});
