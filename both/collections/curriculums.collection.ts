import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { UploadFS } from 'meteor/jalik:ufs';
import { Thumbs, ThumbsStore } from './images.collection'

import { Thumb } from '../interfaces/image.interface';
import { curriculum } from '../interfaces/curriculum.interface';

export const Curriculums = new Mongo.Collection<curriculum>('curriculums');


export const CurriculumStore = new UploadFS.store.GridFS({
  collection: Curriculums,
  name: 'curriculums',
  filter: new UploadFS.Filter({
    contentTypes: ['curriculum/*']
  }),
  copyTo: [
    ThumbsStore
  ]
});


