import React, { Component } from 'react';

// Stick with stateless function components unless you specifically need lifecycle methods

// React 16

// functional component

// export default function HelloWorld(props) {
// 	return (
// 		<>
// 			<h1>Welcome to React 16</h1>
// 			<div>Hello {props.name}</div>
// 		</>
// 	)
// }

// state component

// export default class HelloWorld extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1> Welcome to React 16</h1>
// 				<div>Hello {this.props.name}</div>
// 			</div>
// 		)
// 	}
// }

// React 19

export default function HelloWorld({ name }) {
	return (
		<div>
			<h1>Welcome to React 19</h1>
			<div>Hello {name}</div>
		</div>
	);
}