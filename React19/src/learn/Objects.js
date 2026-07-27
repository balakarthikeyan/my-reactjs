import React from 'react';

class Objects extends React.Component {
	render() {
		return (
			<div>
				<h1>Name: {this.props.user.name}</h1>
				<h3>Email ID: {this.props.user.email}</h3>
			</div>
		)
	}
}

export default Objects;