import React, { Component } from 'react';
import './TopNav.css';

class TopNav extends Component {
  render() {
    return (
      <div className="topNav">
          <div className="topNav-left">
						<h1> Meeting Name </h1>
						<div className="button"> Set time </div>
						<div className="button"> Add invites </div>
					</div>
      </div>
    );
  }
}

export default TopNav;
