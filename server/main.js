import { Meteor } from 'meteor/meteor';
import { Blogs } from '../imports/collections/blogs'

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('blogs', function() {
    return Blogs.find({}, { limit: 5 })
  })
});
