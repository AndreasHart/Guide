import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

//import { Events } from '../../lib/collections/events.js';
import { Events } from '../api/events.js';
import Event from './Event.jsx';
import { createContainer } from 'meteor/react-meteor-data';

import NavBar from './NavBar.jsx';

class MyEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }
  componentDidMount() {
    console.log("did mount",this.props.events)

  }





render(){

  function amIParticipanting(value){

    if(value.participants && (value.participants.length > 0)){
    if(areTheyRegistered(value.participants,value._id)){ return value }
    }
  }
  //if
  function areTheyRegistered(participants,eventId){
      let show = false;
      let currentUserId = Meteor.userId();
      participants.forEach((each)=>{

        if(each === currentUserId){
          show = true;
        }
      })
      return show;
    }



      let filteredListEvent = [];

      // console.log('events object', this.props.events);
      if(this.props.events.length > 0){
      filteredListEvent = this.props.events.filter(amIParticipanting);

        }




    return (

        <div>
        <NavBar/>
        <div>{filteredListEvent.map((event) => {
          return <Event
            event={event}
            key={event._id}/>
          })}
        </div>
        </div>


    );
  }
}

MyEvents.PropTypes = {
  events: PropTypes.array.isRequired,
}

export default createContainer(() => {

   Meteor.subscribe('events');

  return {
   events: Events.find({}).fetch(),
   currentUser:  Meteor.user()
  };
}, MyEvents);

