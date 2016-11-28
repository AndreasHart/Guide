import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import App from '../imports/ui/App.jsx';

import ListEvent from '../imports/ui/ListEvent.jsx';
import Event from '../imports/ui/Event.jsx';

import NewEvent from '../imports/ui/NewEvent.jsx';
import Profile from '../imports/ui/Profile.jsx';


FlowRouter.route('/', {
    name: 'root',
    action: function (){
        console.log("This is my root:");
        ReactLayout.render(App, {content: <ListEvent />});
    }
});

FlowRouter.route('/events', {
    name: 'events',
    action: function (){

      ReactLayout.render(ListEvent, {content: <ListEvent />});
    }
});


FlowRouter.route('/events/new', {
    name: 'events_new',
    action: function (){
        console.log("This is my /events/new:");
        ReactLayout.render(NewEvent, {content: <NewEvent />});
    }
});
FlowRouter.route('/user/:_id', {
    name: 'profile',
    action: function (params){
        console.log("This is my /user/:_id:", params);
        ReactLayout.render(Profile, {content: <Profile _id={params._id}/>});
    }
});

FlowRouter.route('/events/:_id', {
    name: 'event_id',
    action: function (params){
 console.log("This is my /events/:_id:", params);
        ReactLayout.render(Event, {content: <Event _id={params._id} />});
    }
});
