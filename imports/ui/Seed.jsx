'use strict'

import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import Dropzone from 'react-dropzone';

// import seed from '../server/methods/seed.js'

export default class Profile extends Component {
  constructor(props){
    super(props);
  }

  seedDatabase(e){
    console.log("target", e.target.dataset.collection);
    let collection = e.target.dataset.collection;
    console.log("collection", collection);
    Meteor.call( 'seedCollection', collection, ( error, response ) => {
      if ( error ) {
        console.log('in error');
        alert( error.reason, 'danger' );
      } else {
        alert( 'Collection seeded!', 'success' );
      }
    }
  )}


  clearDatabase(e){
    let collection = e.target.dataset.collection;
    console.log(collection);
    Meteor.call( 'clearCollection', collection, ( error, response ) => {
      if ( error ) {
        alert( error.reason, 'danger' );
      } else {
        alert( 'Collection cleared!', 'success' );
      }
    }
  )}


  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
      <div>
        <button data-collection="Users" onClick={this.seedDatabase} className="btn btn-success">Seed Users</button>
        <button data-collection="Users" onClick={this.clearDatabase} className="btn btn-danger">Clear Users</button>

        <button data-collection="Events" onClick={this.seedDatabase} className="btn btn-success">Seed Events</button>
        <button data-collection="Events" onClick={this.clearDatabase} className="btn btn-danger">Clear Events</button>
      </div>
      )
  }
}
