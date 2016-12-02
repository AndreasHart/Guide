import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.updateCerts = this.updateCerts.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
    this.updateWhy = this.updateWhy.bind(this);
    this.updatePlan = this.updatePlan.bind(this);

    this.state = {
    certifications:"",
    experience:"",
    why:"",
    plan:""
    }
  }

  handleProfileSubmit() {
    Meteor.call('profiles.editGuideProfile', this.state);
  }

  updateCerts(e) {this.setState({certifications: e.target.value});}
  updateExperience(e) {this.setState({experience: e.target.value});}
  updateWhy(e) {this.setState({why: e.target.value});}
  updatePlan(e) {this.setState({plan: e.target.value});}


  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (


      <div id="accordion" role="tablist" aria-multiselectable="true">
        <div className="header" role="tab" id="headingOne">
          <h5 className="col-sm-offset-2 mb-0">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Become a Guide
            </a>
          </h5>
        </div>
        <div id="collapseOne" className="collapse in" role="tabpanel" aria-labelledby="headingOne">
          <div className="block">
            <form className= "form-horizontal profile" onSubmit={this.handleProfileSubmit.bind(this)}>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-9">
                  <strong>Edit Your Guide Profile</strong>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputOutline" className="col-sm-2 control-label">Please outline your plan for events:</label>
                <div className="col-sm-9">
                  <textarea className="form-control" id="inputOutline" type="text" value={this.state.plan}  onChange={this.updatePlan} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputCertifications" className="col-sm-2 control-label">Certifications:</label>
                <div className="col-sm-9">
                  <textarea className="form-control" id="inputCertifications" type="text" value={this.state.certifications}  onChange={this.updateCerts} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputExperience" className="col-sm-2 control-label">Experience:</label>
                <div className="col-sm-9">
                  <textarea className="form-control" id="inputExperience" type="text" value={this.state.experience}  onChange={this.updateExperience} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputDrive" className="col-sm-2 control-label">What drives you?:</label>
                <div className="col-sm-9">
                  <textarea className="form-control" id="inputDrive" type="text" value={this.state.why} onChange={this.updateWhy} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-9">
                  <input className="btn btn-default" type="submit"/>
                </div>
              </div>
            </form>
          </div>
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