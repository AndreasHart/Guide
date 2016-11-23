import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Class } from 'meteor/jagi:astronomy';

const Activity = new Mongo.Collection('activities');

 Activity.schema = new SimpleSchema({
  id: {type:Number},
  name: {type: String},
  desc: {type: String}
})