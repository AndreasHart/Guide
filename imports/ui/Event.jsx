import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import Participants from './Participants'
import Interest from './InterestInParticipating.jsx'
import ShowProfile from './ShowProfile.jsx'
import ShowGuideProfile from './ShowGuideProfile.jsx'


export default class Event extends Component {
  constructor(props) {
    super(props);


    this.state = {
    showModal: false,
    eventId:'',
    }
  }
  componentWillMount() {
    this.setState({eventId:this.props.event._id});

  }
  componentwMount() {
    this.setState({eventId:this.props.event._id});
  }

  render() {

    console.log("in events", this.props.event);
    function anyParticipants(participant){
        console.log("participant",participant)
        if(participant && participant.length > 0 ){
        return <Participants users={participant}/>
      }
    }

    function deleteThisEvent(id) {
     Meteor.call('events.remove', id);
  }

    function interestedUser(eventId){
      console.log(eventId);
    if(Meteor.userId){
      let userId = Meteor.userId();
      let info = {
        'userId': userId,
        'eventId':eventId,
      }
      Meteor.call('addParticipants', info);
  }}

    function areTheyRegistered(participants,eventId){
      let show = true;
      if(participants.length > 0){
      let currentUserId = Meteor.userId();

      participants.forEach((each)=>{

        if(each === currentUserId){
          show = false;
        }
      })
    } if(show){return (  <button type="button" data={eventId} className="btn btn-primary " onClick={()=>interestedUser(eventId)}  >
                  Interested!
                </button>
                )}
  }

  function areTheyTheOwner(ownerId,eventId){
    if(ownerId === Meteor.userId()){
      return (<button className="delete" data={eventId} onClick={()=>deleteThisEvent(eventId)}>
                &times;
              </button>);
    }
  }
    return (
        <div>
          <div className="col-sm-4">
            <div className="card card-block">
              {areTheyTheOwner(this.props.event.owner,this.props.event._id)}
              <h3 className="card-title">{this.props.event.text.activity}</h3>
              <p className="card-text">Where: {this.props.event.text.location}
                <br/>When: {this.props.event.text.startTime.toString()}



                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target={'#'+this.props.event._id}>
                  More Details
                </button>
              </p>
            </div>
            <div className="modal fade" id={this.props.event._id} tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-body col-xs-6">

                    Address: {this.props.event.text.address}<br/>
                    Participants: Min: {this.props.event.text.min} Max: {this.props.event.text.max} <br/>
                    Price: ${this.props.event.text.price} <br/>
                    Participants Registered: {this.props.event.participants ? this.props.event.participants.length : "0! Be the first to register!"}
                    <ShowGuideProfile userId={this.props.event.owner}/>


                  </div>
                  <div className="modal-body col-xs-6">
                    <img className="avatar" src='https://cdn1.iconfinder.com/data/icons/trycons/32/user-512.png'/>

                   </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    {this.props.event.participants ? areTheyRegistered(this.props.event.participants,this.props.event._id) :
                    <button type="button" className="btn btn-primary " onClick={()=>interestedUser(this.props.event._id)} >
                      Join Event
                    </button>
                  }
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

    );
  }
};

Event.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  event: PropTypes.object.isRequired,

};
 // <Modal.Header closeButton>
 //                      <Modal.Title>Modal heading</Modal.Title>
 //                    </Modal.Header>
 //                    <Modal.Body>
 //                      <h4>Text in a modal</h4>
 //                      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>


 //                      <hr />

 //                      <h4>Overflowing text to show scroll behavior</h4>
 //                      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
 //                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
 //                      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
 //                      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
 //                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
 //                      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
 //                      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
 //                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
 //                      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
 //                    </Modal.Body>
 //                    <Modal.Footer>
 //                      <button onClick={this.close}>Close</button>
 //                    </Modal.Footer>

  //   <Modal
  //   showModal={this.state.showModal}
  //   title="Confirm"
  //   onCancel={this.toggleModal}
  //   cancelLabel="Cancel"
  //   onConfirm={this.deleteItem}
  //   confirmLabel="Delete"
  // ><p>Please confirm the deletion: </p>
  //         </Modal>

 // <div className="collapse" id={this.props.event._id}>
 //                <div className="card card-block">
                // <br/>Till: {this.props.event.text.endTime.toString()}

                  // {anyParticipants(this.props.event.participants)}
                //<img src="http://image.flaticon.com/icons/svg/64/64096.svg"  class="img-circle"/>

                  //<Interest eventId={this.props.event._id} />


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