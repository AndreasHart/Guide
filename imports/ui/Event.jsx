import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import Participants from './Participants.jsx'
import Interest from './InterestInParticipating.jsx'
import ShowProfile from './ShowProfile.jsx'


export default class Event extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {

  }

  deleteThisEvent() {
    Meteor.call('events.remove', this.props.event._id);
  }


  render() {

    console.log("in events", this.props.event);
    debugger;
    function anyParticipants(participant){
        console.log("participant",participant)
        if(participant && participant.length > 0 ){
        return <Participants users={participant}/>
      }
    }

    return (

      <div >
        <div>
          <div className="col-sm-4">
            <div className="card card-block">
              <button className="delete" onClick={this.deleteThisEvent.bind(this)}>
                &times;
              </button>
              <h3 className="card-title">{this.props.event.text.activity}</h3>
              <p className="card-text">Where: {this.props.event.text.location}<button type="button" className="btn btn-default">Map</button>
                <br/>When: {this.props.event.text.startTime.toString()}
                <br/>Till: {this.props.event.text.endTime.toString()}
              </p>
              <p>
                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target={"#" + this.props.event._id} aria-expanded="false" aria-controls="collapseExample">
                  More info
                </button>
              </p>
              <div className="collapse" id={this.props.event._id}>
                <div className="card card-block">
                  Address: {this.props.event.text.address}<br/>
                  Participants: Min: {this.props.event.text.min} Max: {this.props.event.text.max} <br/>
                  Price: ${this.props.event.text.price} <br/>
                  <button type="button" className="btn btn-default">Interested?</button>
                  <Interest eventId={this.props.event._id} />
                  Participants Registered: {this.props.event.participants ? this.props.event.participants.length : "Be the first to register!" }
                  {anyParticipants(this.props.event.participants)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  event: PropTypes.object.isRequired,
};
        //<button className="delete" onClick={this.deleteThisEvent.bind(this)}>
        //   &times;
        // </button>

        // <span className="text">
        // <div>Activity: {this.props.event.text.activity} </div><br/>
        // <div>Where: {this.props.event.text.location}<button type="button" className="btn btn-default">Map</button> </div><br/>
        // <div>Address: {this.props.event.text.address} </div><br/>
        // <div>When: {this.props.event.text.startTime.toString()} </div><br/>
        // <div>Till: {this.props.event.text.endTime.toString()} </div><br/>
        // <div>Participants Min: {this.props.event.text.min} Max: {this.props.event.text.max} </div><br/>
        // <div type="float">Price: ${this.props.event.text.price} </div><br/>
        // <button type="button" className="btn btn-default">Interested?</button>
        // </span>

        // <Interest eventId={this.props.event._id} />
        // <ShowProfile userId='D3MePQtPMruFtBq88'/>