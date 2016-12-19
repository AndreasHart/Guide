import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import NavBar from './NavBar.jsx';
import Button from './EventModal.jsx';


export default class NewEvent extends Component {
  constructor(props){
    super(props);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateActivity = this.updateActivity.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.updateLatitude = this.updateLatitude.bind(this);
    this.updateLongitude = this.updateLongitude.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updateStartTime = this.updateStartTime.bind(this);
    this.updateEndTime = this.updateEndTime.bind(this);
    this.updateMin = this.updateMin.bind(this);
    this.updateMax = this.updateMax.bind(this);
    this.updatePrice = this.updatePrice.bind(this);

    this.state = {
    title:"",
    activity:"",
    location:"",
    address:"",
    latitude:"",
    longtitude:"",
    date:"",
    startTime:"",
    endTime:"",
    min:"",
    max:"",
    price:""
    }
  }

  handleNewEventSubmit() {
    let t = this.state
    if(t.title && t.activity && t.location && t.address && t.date && t.startTime && t.endTime && t.price ){
      Meteor.call('events.insert', this.state);
      FlowRouter.go('/')
    }else{
      alert('Please Fill out all required fields');
    }

  }


  updateTitle(e) {this.setState({title: e.target.value});}
  updateActivity(e) {this.setState({activity: e.target.value});}
  updateLocation(e) {this.setState({location: e.target.value});}
  updateAddress(e) {this.setState({address: e.target.value});}
  updateLatitude(e) {this.setState({latitude: e.target.value});}
  updateLongitude(e) {this.setState({longitude: e.target.value});}
  updateDate(e) {this.setState({date: e.target.value});}
  updateStartTime(e) {this.setState({startTime: e.target.value});}
  updateEndTime(e) {this.setState({endTime: e.target.value});}
  updateMin(e) {this.setState({min: e.target.value});}
  updateMax(e) {this.setState({max: e.target.value});}
  updatePrice(e) {this.setState({price: e.target.value});}



  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
//{ Meteor.user() ? (
    return (
      <div>
        <NavBar/>
        <form className= "new_event container form-horizontal" onSubmit={this.handleNewEventSubmit.bind(this)}>
          <div className="form-group">
            <div className="col-sm-offset-4 col-sm-4">
              <h3>Complete To Add Your Event</h3>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputTitle1" className="col-sm-offset-2 col-sm-2 control-label">Title*:</label>
            <div className="col-sm-4">
              <input className="form-control" id="inputTitle1" type="text"  value={this.state.title}  onChange={this.updateTitle} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputActivity1" className="col-sm-offset-2 col-sm-2 control-label">Activity*:</label>
            <div className="col-sm-4">
              <input className="form-control" id="inputActivity1" type="text"  value={this.state.activity}  onChange={this.updateActivity} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputLocation1" className=" col-sm-offset-2 col-sm-2 control-label">Location Name*:</label>
            <div className="col-sm-4">
              <input className="form-control" id="inputLocation1" type="text"  value={this.state.location}  onChange={this.updateLocation} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress1" className="col-sm-offset-2 col-sm-2 control-label">Address*:</label>
            <div className="col-sm-4">
              <input className="form-control" id="inputAddress1" type="text"  value={this.state.address}  onChange={this.updateAddress} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputLatitude1" className="col-sm-offset-2 col-sm-2 control-label">Latitude:</label>
            <div className="col-sm-4">
              <input className="form-control" id="inputLatitude1" type="number" value={this.state.latitude}  onChange={this.updateLatitude} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputLongtitude1" className="col-sm-offset-2 col-sm-2 control-label">Longtitude:</label>
            <div className="col-sm-4">
              <input className="form-control" id="inputLongtitude1" type="number" value={this.state.longitude}  onChange={this.updateLongtitude} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputDate1" className="col-sm-offset-2 col-sm-2 control-label">Date:</label>
            <div className="col-sm-4">
              <input className="form-control" id="inputDate1" type="date" value={this.state.date} onChange={this.updateDate}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputStart1" className="col-sm-offset-2 col-sm-2 control-label">Start Time*:</label>
            <div className="col-sm-4">
              <input className="form-control" id="inputStart1" type="time" value={this.state.startTime} onChange={this.updateStartTime}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputEnd1" className="col-sm-offset-2 col-sm-2 control-label">End Time*:</label>
            <div className="col-sm-4">
              <input className="form-control" id="inputEnd1" type="time" value={this.state.endTime} onChange={this.updateEndTime}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputMin1" className="col-sm-offset-2 col-sm-2 control-label">Min Participants:</label>
            <div className="col-sm-4">
              <input className="form-control" id="inputMin1" type="number" min="0" value={this.state.min}  onChange={this.updateMin} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputMax1" className="col-sm-offset-2 col-sm-2 control-label">Max Participants:</label>
            <div className="col-sm-4">
              <input className="form-control" id="inputMax1" type="number" min="0" value={this.state.max}  onChange={this.updateMax} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPrice1" className="col-sm-offset-2 col-sm-2 control-label">Price*:</label>
            <div className="col-sm-4">
              <input className="form-control" id="inputPrice1" type="number" min="0" value={this.state.price}  onChange={this.updatePrice} />
            </div>
          </div>
          <label className="col-sm-offset-2 col-sm-2 control-label ">* Required Field</label>
          <div className="form-group">
            <div className="col-sm-offset-4 col-sm-4">
              <input className="btn btn-default" type="submit" />
            </div>
          </div>
        </form>

      </div>

    );

  }
}

NewEvent.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required

  // showPrivateButton: React.PropTypes.bool.isRequired,
};
// )
//       :<div className="jumbotron"><h1>Please Login To Add A New Event</h1></div>}
