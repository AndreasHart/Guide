import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class ActivityList extends Component {
  constructor(props) {
    super(props);
      this.state = { search: '' };

  }


// to limit ie: 20 characters,
//can change to: event.target.value.substr(0, 20)
updateSearch(event) {
  this.setState({search: event.target.value});
}

  render() {

    return(

      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <header>
              <h1>Guide</h1>
              <AccountsUIWrapper />
            </header>
          </div>
        </div>
      </nav>

    );
  }
}