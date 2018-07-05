import React, { Component } from 'react';
import TopNav from '../../components/TopNav.js';
import './Builder.css';

function Block(props) {
	return (
	<div className="block-row">
		<div className="block">
			<h3>{props.title}</h3>
			<span className="block-time">{props.span ? props.span + " mins" : ""}</span>
			<p className="block-description">{props.description}</p>
		</div>
	</div>
);

Block.propTypes = {
  title: React.PropTypes.string,
	span: React.PropTypes.number,
	description: React.PropTypes.string
};

Block.defaultProps = {
  title: "Block Name",
	span: 0,
	description: "Add meeting notes"
};

}

function Application() {

    return (
			<div>
			<TopNav/>
      <div className="container">

					<h2>Title</h2>

					<div className="calendar">


						<div className="times">
							<span>2pm</span>
							<span>3pm</span>
						</div>

						<div className="block-holder">

							<Block title="hi" span={15} description="meeting notes"/>

							<Block title="hey" />

							<div className="block-row">
								<div className="block-placeholder">
									<p>Add a block</p>
								</div>
							</div>

							<div className="block-row">
							</div>

						</div>

					</div>

					<div className="go-section">
							<p>Ready to go? Send invites</p>
					</div>

      </div>
			</div>
    );
}


export default Application;
