'use strict'

import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';


import { createContainer } from 'meteor/react-meteor-data';


class ShowGuideProfile extends Component {


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
        if(user[0] && user[0].guideInfo ){
          console.log('inside', user);
          console.log('inside', user[0].guideInfo);
          return showProfile(user);

      };
    }


    function showProfile(user) {
        console.log('show profile', user[0]);
        return (

          <ul className="show-guide" >
                  <li>Your Guide: {user[0].info.firstName} {user[0].info.lastName} </li>
                  <li>Bio: {user[0].info.bio} </li>
                  <li>Interests: {user[0].info.interests} </li>
                  <li>Certifications: {user[0].guideInfo.certifications} </li>
                  <li>Experience: {user[0].guideInfo.experience} </li>
                </ul>


                );
          };


     function showGuideProfile() {
      if(currentUser){
        return <span className="text">
        <div>Name:  </div> <div> {currentUser.info.lastName} </div><br/>
        <div>Bio: {currentUser.info.bio} </div><br/>
        <div>Interests: {currentUser.info.interests} </div><br/>

        </span>
      }
     };
//{currentUser.info.firstName}

     return(

      <div className='col-xs-12 container'>
      <div>{console.log("this",this)}</div>
      <div>{findUser(this.props.userId)}</div>
      </div>

    );
  }
}


ShowGuideProfile.propTypes = {
  currentUser: PropTypes.object,
  userId: PropTypes.string,

};

export default createContainer(() => {

Meteor.subscribe("userData");
Meteor.subscribe("users");
Meteor.subscribe("allUsers");

  return {
   users: Meteor.users.find({},{sort:{_id:-1}}).fetch(),
  };
}, ShowGuideProfile);

//<div>Date of Birth: {currentUser.info.dob} </div><br/>
//                  <li>Date of Birth: {user[0].info.dob.toDateString} </li>

