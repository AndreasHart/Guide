import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import Dropzone from 'react-dropzone';
import GuideProfile from './GuideProfile.jsx'

import NavBar from './NavBar.jsx';

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateDob = this.updateDob.bind(this);
    this.updateBio = this.updateBio.bind(this);
    this.updateInterests = this.updateInterests.bind(this);

    this.state = {
    firstName:"",
    lastName:"",
    dob:"",
    bio:"",
    interests:"",
    files:""
    }
  }
componentDidMount(){
  Meteor.subscribe("userData");

  }

  onDrop(acceptedFiles, rejectedFiles) {
      console.log('Accepted files: ', acceptedFiles);
      console.log('Rejected files: ', rejectedFiles);
    }

  handleProfileSubmit() {
    Meteor.call('profiles.editUserProfile', this.state);
    FlowRouter.go('/');

  }

  updateFirstName(e) {this.setState({firstName: e.target.value});}
  updateLastName(e) {this.setState({lastName: e.target.value});}
  updateDob(e) {this.setState({dob: e.target.value});}
  updateBio(e) {this.setState({bio: e.target.value});}
  updateInterests(e) {this.setState({interests: e.target.value});}

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
      <div>
      <NavBar/>
      <div className="editProfile container">
        <form className= "form-horizontal" onSubmit={this.handleProfileSubmit.bind(this)}>
          <div className="form-group">
            <div className="col-sm-offset-5 col-sm-">
              <h3>Edit Your Profile</h3>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-5">
              <Dropzone onDrop={this.onDrop}>
                Try dropping some files here, or click to select files to upload.
              </Dropzone>

            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputFirstName" className="col-sm-offset-2 col-sm-2 control-label">First Name:</label>
            <div className="col-sm-4">
              <input className="form-control" id="inputFirstName" type="text"  value={this.state.firstName}  onChange={this.updateFirstName} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputLastName" className="col-sm-offset-2 col-sm-2 control-label">Last Name:</label>
            <div className="col-sm-4">
              <input className="form-control" id="inputLastName" type="text"  value={this.state.lastName}  onChange={this.updateLastName} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputDOB" className="col-sm-offset-2 col-sm-2 control-label">DOB:</label>
            <div className="col-sm-4">
              <input className="form-control" id="inputDOB" type="date" value={this.state.dob} onChange={this.updateDob} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputBio" className="col-sm-offset-2 col-sm-2 control-label">Bio:</label>
            <div className="col-sm-4">
              <textarea className="form-control" id="inputBio" type="text" value={this.state.bio} onChange={this.updateBio} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputInterests" className="col-sm-offset-2 col-sm-2 control-label">Interests:</label>
            <div className="col-sm-4">
              <textarea className="form-control" id="inputInterests" type="text" value={this.state.interests}  onChange={this.updateInterests} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-4 col-sm-4">
              <input className="btn btn-default" type="submit"/>
            </div>
          </div>
        </form>
      </div>
    </div>

    );
  }
}

Profile.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required

  // showPrivateButton: React.PropTypes.bool.isRequired,
};