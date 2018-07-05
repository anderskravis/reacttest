import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
}

Block.propTypes = {
  title: PropTypes.string.isRequired,
	span: PropTypes.number.isRequired,
	description: PropTypes.string
};

Block.defaultProps = {
  title: "Block Name",
	span: 1,
	description: "Add meeting notes"
};


function Application(props) {


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

						{props.blocks.map(function(block) {
							return <Block title={block.title} span={block.span} description={block.description}/>
						})}

							<div className="block-row">
								<div className="block-placeholder">
									<p>Add a block</p>
								</div>
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

Application.propTypes = {
	players: PropTypes.array.isRequired,
};



export default Application;
