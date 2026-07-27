import React from 'react';


function getNum() {
	return (Math.random() * 10)
}

function getRand() {
	return Math.floor(Math.random() * 10)
}

class Label extends React.Component {
	render() {
		return (
			<h1>Name: {this.props.name} </h1>
		)
	}
}

class ScreenName extends React.Component {
	render() {
		return (
			<h3>Username:{this.props.user} </h3>
		)
	}
}

class NumberTest extends React.Component {
	render() {
		return (
			<h3>#Number:{this.props.getNumber} </h3>
		)
	}
}

class ClassComponent extends React.Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<Label name={this.props.list.name} />
				<ScreenName user={this.props.list.email} />
				<NumberTest getNumber={getNum()} />
				<h1>Calling Function directly {getRand()} ! </h1><hr />
			</div>
		)
	}
}

export default ClassComponent