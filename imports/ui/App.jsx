import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Events } from '../api/events.js';
import Event from './Event.jsx';
import ListEvent from './ListEvent.jsx';
import NewEvent from './NewEvent';

import InterestInParticipating from './InterestInParticipating';

import { Profiles } from '../api/profiles.js';
import Profile from './Profile.jsx';
import GuideProfile from './GuideProfile.jsx';
import ShowProfile from './ShowProfile.jsx';

import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import ActivityList from './ActivityList.jsx';
import NewActivityTag from './NewActivityTag.jsx';
import NavBar from './NavBar.jsx';
import Modal from './Modal.jsx';

import Seed from './Seed.jsx'

import { Tracker } from 'meteor/tracker'

// App component - represents the whole app
 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }
  // Tracker.autorun(function () {
  //   if (!Meteor.user()) {
  //    Flowrouter.go('/')
  //   }

  // });

  setVar() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }
  // console.log("in app", 'Meteor.loginButtons.dropdownVisible');
  render() {




    let newEvent
      if (this.props.currentUser) {
        newEvent = <NewEvent/>
      }

    return (
      <div>
        <NavBar/>
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center">
            <h1 className="lead">Our Guides. Your Adventure.</h1>
            {Meteor.user() ? "" :<button className="sign_up_button btn btn-default" onClick={this.setVar}>Sign Up</button>}
          </div>
        </div>
        <div>
          {this.props.content}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  currentUser: PropTypes.object,

};

export default createContainer(() => {

Meteor.subscribe('users');

  return {
   currentUser:  Meteor.user(),

  };
}, App);





