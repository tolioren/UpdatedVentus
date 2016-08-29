import { Meteor } from 'meteor/meteor';
import { Thumbs, Curriculums } from '../../../both/collections/curriculums.collection';

Meteor.publish('thumbs', function(ids: string[]) {
  return Thumbs.find({
    originalStore: 'curriculums',
    originalId: {
      $in: ids
    }
  });
});

Meteor.publish('curriculums', function() {
  return Curriculums.find({});
});