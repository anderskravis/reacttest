import React, { PureComponent } from 'react';
import Builder from './builder/Builder.js';

function App() {

	var BLOCKS = [
		{
			title: "👋 Test",
			span: 15,
			description: "notes",
		},
		{
			title: "Test 2",
			span: 15,
			description: "notes 2",
		},
		{
			title: "Test 3",
			span: 15,
			description: "notes 3",
		}
	];
		return (
			<Builder blocks={BLOCKS}/>
		)
}

export default App
