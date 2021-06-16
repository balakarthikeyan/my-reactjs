// By Express Way
const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.name}`);
  }
}

class Color extends React.Component {
  render() {
    const divStyle = {
      backgroundColor: this.props.name,
      color: 'white',
      fontSize: '20px',
      height: '100px',
      width: '100px'
    }
    return (
      <div style={divStyle}>{this.props.name}</div>
    )
  }
}

class Animal extends React.Component {
  render() {
    const divStyle = {
      fontSize: '20px',
      height: '100px',
      width: '100px',
      border: '1px solid black',
      borderRadius: '50%'
    }
    return (
      <div style={divStyle}>{this.props.name}</div>
    )
  }
}
module.exports = {
  Color: Color,
  Animal: Animal
};

ReactDOM.render(
  React.createElement(App, {name: 'World'}, null),
  document.getElementById("app")
);
