import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Tasks } from '../api/tasks.js';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

import Task from './Task.jsx';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import ActivityList from './ActivityList.jsx';

let activities = [{ id: 1, name: 'hiking'}, { id: 2, name: 'surfing'}];
// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCompleted: false,
    };
  }


  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    Meteor.call('tasks.insert', text);
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

  render() {
    console.log("this props:   ", this.props)
        console.log("this props activities:   ", this.props.activities)

    return (
      <div className="container">
        <header>
         <h1>Guide List ({this.props.incompleteCount})</h1>

           <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />
            Hide Completed Tasks
          </label>

          <AccountsUIWrapper />

           { this.props.currentUser ?
            <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="textInput"
                placeholder="Type to add new tasks"
              />
            </form> : ''
          }
        </header>




        <ul>
          {this.renderTasks()}
        </ul>

        <h1>Activity List</h1>
        <ActivityList activities={activities}/>

      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,


};

export default createContainer(() => {

   Meteor.subscribe('tasks');

  return {
   tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
   incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
   currentUser:  Meteor.user(),
   activities: activities.name,

  };
}, App);