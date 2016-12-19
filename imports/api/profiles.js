import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Class } from 'meteor/jagi:astronomy';


//export const Users = new Mongo.Collection('users');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('users', function usersPublication() {
    return Meteor.users.find({});
  });
}

Meteor.methods({

  'profiles.editUserProfile'(info) {

    // Make sure the user is logged in before inserting his profile


    console.log( 'profiles.addUserProfile', info );
    user = Meteor.users.find(this.userId)
    //console.log('user:::::::', user)
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    console.log('ID', this.userId)
    Meteor.users.update({_id:this.userId}, {$set:{info}});
    Roles.addUsersToRoles(this.userId , 'user');
  },

  'profiles.editGuideProfile'(guideInfo) {

    // Make sure the user is logged in before inserting his profile

    //console.log( 'profiles.addUserProfile', text );
    user = Meteor.users.find(this.userId);
    //console.log('user:::::::', user)
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    console.log('ID', this.userId)
    Meteor.users.update(this.userId, {$set:{guideInfo}});
    Roles.addUsersToRoles(this.userId , 'guide');
  }
});