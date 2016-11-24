import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Tasks } from '../api/tasks.js';
import Task from './Task.jsx';

import { Events } from '../api/events.js';
import ListEvent from './ListEvent.jsx';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

import { Profiles } from '../api/profiles.js';
import Profile from './Profile.jsx';
import GuideProfile from './GuideProfile.jsx';

import NewEvent from './NewEvent.jsx';

import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import ActivityList from './ActivityList.jsx';


// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCompleted: false,
    };
  }


  handleSubmit(event) {
    console.log(this);
    event.preventDefault();
    // Find the text field via the React ref

    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call('events.insert', text);
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }


  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }

    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;

      return (
        <Task
          key={task._id}
          task={task}
          showPrivateButton={showPrivateButton}
        />
      );
    });
  }

  renderEvents() {
    let filteredEvents = this.props.events;
    if (this.state.hideCompleted) {
      filteredEvents = filteredEvents.filter(event => !event.checked);
    }

    return filteredEvents.map((event) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = event.owner === currentUserId;

      return (
        <Event
          key={event._id}
          event={event}
          showPrivateButton={showPrivateButton}
        />
      );
    });
  }


  render() {

    return (
<<<<<<< HEAD
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <header>
                <h1>Guide List ({this.props.incompleteCount})</h1>

                <label className="hide-completed">
                <input
                  type="checkbox"
                  readOnly
                  checked={this.state.hideCompleted}
                  onClick={this.toggleHideCompleted.bind(this)}
                  />
                  Hide Completed Events
                </label>

                <AccountsUIWrapper />
              </header>
            </div>
          </div>
        </nav>
      <div className="container">
        <Profile/>
        <GuideProfile/>
<<<<<<< HEAD



=======
        <h3>Complete To Add Your Event</h3>
           { this.props.currentUser ? <NewEvent/> : "" }
        <div>
          {this.renderEvents()}
        </div>
        <div>
>>>>>>> 143ffcedeb8c7d2f8516e450c2547f26dd402ff2
          <ListEvent/>

        <br/>
        <div>
<<<<<<< HEAD
        <h1>Browse Events</h1>
        <h3>By Activity</h3>
=======
          <h1>Browse Events</h1>
          <h3>By Activity</h3>
          <ActivityList activities={activities}/>

>>>>>>> 143ffcedeb8c7d2f8516e450c2547f26dd402ff2
        </div>
      </div>

    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
  events: PropTypes.array.isRequired

};

export default createContainer(() => {

   Meteor.subscribe('tasks');
   Meteor.subscribe('users');
   Meteor.subscribe('events');

  return {
   events: Events.find({}, { sort: { createdAt: -1 } }).fetch(),
   tasks:  Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
   incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
   currentUser:  Meteor.user(),

  };
}, App);


 // <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
 //              <input
 //                type="text"
 //                ref="textInput"
 //                placeholder="Type to add new Events"
 //              />
 //            </form> : ''
