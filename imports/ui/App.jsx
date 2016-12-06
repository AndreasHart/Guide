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



// App component - represents the whole app
 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

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
          <div className="container">
            <p className="display-3 glyphicon glyphicon-tree-conifer"></p>
            <h1 className="lead">Guide Me</h1>
            <img className='jumbo' src='https://scontent.fyhz1-1.fna.fbcdn.net/t31.0-8/1534864_10200952205441788_1971396802_o.jpg' />
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





