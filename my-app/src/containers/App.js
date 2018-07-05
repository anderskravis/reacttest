import React, { PureComponent } from 'react';
import Builder from './builder/Builder.js';

function App() {

	var BLOCKS = [
		{
			title: "test",
			span: 5,
			description: "notes",
		},
		{
			title: "test2",
			span: 10,
			description: "notes2",
		},
		{
			title: "test3",
			span: 15,
			description: "notes3",
		}
	];
		return (
			<Builder blocks={BLOCKS}/>
		)
}

export default App
