import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class NavBar extends Component {
  constructor(props) {
    super(props);


  }


  render() {
    function areTheyAGuide(){
      let show;
      let user = Meteor.user();

      (user && user.guideInfo && user.info ) ? show = true : show = false;
      return show
    }

    return(
      <header>
        <h1><a href='/'>Guide Me</a></h1>
        <nav className="nav">
          <AccountsUIWrapper />
          <div className="btn-group nav-links">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
               <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
            </button>
            <ul className="dropdown-menu dropdown-menu-right">
              <li>{Meteor.user() ? (<a href='/editprofile'>Edit Profile</a>):''}</li>
              <li>{Meteor.user() ? (<a href='/my_events'>My Events</a>):''}</li>
              <li>{Meteor.user() ? (<a href='/guideapplication'>Become A Guide</a>):''}</li>
              <li>{areTheyAGuide() ? (<a href='/events/new'>New Event</a>):''}</li>
            </ul>
          </div>
        </nav>
      </header>

    );
  }
}