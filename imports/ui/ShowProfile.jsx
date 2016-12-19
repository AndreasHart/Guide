'use strict'

import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';


import { createContainer } from 'meteor/react-meteor-data';


class ShowProfile extends Component {


  constructor(props){
    super(props);
    this.state = {
      userId:"",
    }
  }


  componentDidMount() {


  }

   render() {


    function findUser(id){
      Meteor.subscribe("users");
      Meteor.subscribe("allusers");
      let user = Meteor.users.find({ '_id': id }).fetch();
        if(user[0].info && user[0].info.dob ){
          console.log('inside', user);
          return showProfile(user);
        }else if( user[0].profile && user[0].profile.name && !user[0].info){

          return showMinProfile(user);
        }

      };


    function showProfile(user) {
        console.log('show profile', user[0]);
        return ( <span className='text'>
                  <div>Name: {user[0].info.name} </div> <div> {user[0].info.lastName} </div><br/>
                  <div>Bio: {user[0].info.bio} </div><br/>
                  <div>Interests: {user[0].info.interests} </div><br/>
                </span>
                );
          };



    function showMinProfile(user) {
        console.log('show porfile', user[0]);
        return ( <span className='text'>
                  <div>{user[0].profile.name} </div>
                </span>
                );
          };



     function showGuideProfile() {
      if(currentUser){
        return <span className="text">
        <div>Name: {currentUser.info.firstName} </div> <div> {currentUser.info.lastName} </div><br/>
        <div>Date of Birth: {currentUser.info.dob} </div><br/>
        <div>Bio: {currentUser.info.bio} </div><br/>
        <div>Interests: {currentUser.info.interests} </div><br/>
        </span>
      }
     };


     return(

      <div className='col-xs-12 container'>
      <a>{console.log("this",this)}</a>
      <a>{findUser(this.props.userId)}</a>
      </div>

    );
  }
}


ShowProfile.propTypes = {
  currentUser: PropTypes.object,
   user: PropTypes.object,
  _id: PropTypes.object,
};

export default createContainer(() => {

Meteor.subscribe("userData");
Meteor.subscribe("users");
Meteor.subscribe("allUsers");

  return {
//console.log(this.props.content.props.userId);
   users: Meteor.users.find({},{sort:{_id:-1}}).fetch(),
  };
}, ShowProfile);

 // <div>Date of Birth: {user[0].info.dob.toDateString} </div><br/>