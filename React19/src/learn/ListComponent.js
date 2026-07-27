import React, { Component } from 'react';

// state component
export class StatComponent extends Component {
	render() {
		return (
			<div>
				<h1>State component List</h1>
				<ol>
					{this.props.friends.map((list, index) => (
						<li key={index}>{list}</li>
					))}
				</ol>
			</div>
		)
	}
}

// functional component
const FunComponent = (props) => {
	const { friends } = props
	return (
		<div>
			<h1>Functional component List</h1>
			{friends.map((list, index) => (
				<li key={index}>{list}</li>
			))}
		</div>
	)
}
export default FunComponent;