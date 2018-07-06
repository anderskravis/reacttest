import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopNav from '../../components/TopNav.js';
import './Builder.css';


function Application(props) {

	var BLOCKS = [
		{
			title: "👋 Test",
			description: "notes",
			id: 1,
		},
		{
			description: "notes 2",
			id: 2,
		},
		{
			title: "Test 3",
			description: "notes 3",
			id: 3,
		}
	];

    return (
			<div>
			<TopNav/>
      <div className="container">

					<h2>Meeting Schedule</h2>

					<Calendar blocks={BLOCKS} />

					<div className="go-section">
							<p>Ready to go? Send invites</p>
					</div>

      </div>
			</div>
    );
}

Application.propTypes = {
	blocks: PropTypes.array,
};

function Calendar(props) {

	return (
	<div className="calendar">


		<div className="times">
			<span>2pm</span>
			<span>3pm</span>
		</div>

		<div className="block-holder">

		{props.blocks.map(function(block) {
			return (
			<Block title={block.title}
			span={block.span}
			description={block.description}
			id={block.id}
			key={block.id}/>
			)
		})}

			<div className="block-row">
				<div className="block-placeholder">
					<p>Add a block</p>
				</div>
			</div>

		</div>

	</div>
);
}

class Block extends React.Component {

	constructor(props) {
	super(props);
	this.state = {
		span: 1,
	}
	this.changeSpan = this.changeSpan.bind(this);
}

changeSpan() {
	console.log('hi')
	this.setState({
        span : this.state.span + 1
    });
}

	render() {
		return (
			<div className="block-row">
				<div className="block" onClick={this.changeSpan}>
					<h3>{this.props.title}</h3>
					<span className="block-time">{this.state.span ? this.state.span + " mins" : ""}</span>
					<p className="block-description">{this.props.description}</p>
				</div>
			</div>
		)
	}
}

Block.propTypes = {
  title: PropTypes.string.isRequired,
	description: PropTypes.string,
	id: PropTypes.number.isRequired,
};

Block.defaultProps = {
  title: "Block Name",
	description: "Add meeting notes"
};


export default Application;
