import { Meteor } from 'meteor/meteor';
import '../imports/api/events.js';
import '../imports/api/profiles.js';
import '../imports/api/participants.js';
Meteor.startup(() => {
  // code to run on server at startup

  });

Meteor.publish(null, function (){
  return Meteor.roles.find({})
})


Meteor.publish("allUsers", function () {
  return Meteor.users.find({},{fields: {'info': 1, 'guideInfo': 1}});
});

Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'info': 1, 'guideInfo': 1}});
  } else {
    this.ready();
  }
});

// Enable cross origin requests for all endpoints
JsonRoutes.setResponseHeaders({
  "Cache-Control": "no-store",
  "Pragma": "no-cache",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
});
