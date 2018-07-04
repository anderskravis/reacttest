import React, { Component } from 'react';
import TopNav from '../../components/TopNav.js';
import './Builder.css';

class Builder extends Component {


  render() {
    return (
			<div>
			<TopNav/>
      <div className="container">

					<h2>Meeting schedule</h2>

					<div className="calendar">


						<div className="times">
							<span>2pm</span>
							<span>3pm</span>
						</div>

						<div className="block-holder">

							<div className="block-row">
								<div className="block">
									<h3>Block Name</h3>
									<span className="block-time">30 mins</span>
									<p className="block-description">This is the meeting description</p>
								</div>
							</div>

							<div className="block-row">
								<div className="block">
									<h3>Block Name</h3>
									<span className="block-time">30 mins</span>
									<p className="block-description">This is the meeting description</p>
								</div>
							</div>

							<div className="block-row">
								<div className="block-placeholder">
									<p>Add a block</p>
								</div>
							</div>

							<div className="block-row">
							</div>

						</div>

					</div>

      </div>
			</div>
    );
  }
}

export default Builder;
