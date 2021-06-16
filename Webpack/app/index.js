import React, { Component } from "react";
import ReactDom from "react-dom";
import './css/style.css';
import Components from "./component/Components";
import Persons from "./component/Persons";
const employees = [
  { name: "Balakarthikeyan", company: "Unimoni", exp: "7+", email: "Balakarthikeyan@gmail.com", isFriend: true},
  { name: "Ramesh", company: "Hexaware", exp: "6+", email: "Ramesh@gmail.com", isFriend: false },
  { name: "Vivek", company: "Adlabs", exp: "8+", email: "Vivek@gmail.com", isFriend: false },
  { name: "Sathis", company: "Cts", exp: "10+", email: "Sathis@gmail.com", isFriend: true },
];
class App extends Component {
    render() {
        // Declarative variable
        // let toyBox = {item1:'car', item2:'ball', item3: 'frisbee'};
        // let {item1, item2} = toyBox;
        // let {item3 : item4} = toyBox;
        const { list, name } = this.props;
        var myStyle = {
            borderColor: "#000055",
            margin: "10px",
        };
        return (
            <div>
                <h1> Hello {name}, Welcome to React JS </h1>
                <hr style={myStyle} />
                <HelloWorld message="Form Stateless Functional Component" />
                <Components personsObj={list}></Components>
                <h2 data-todoHeading="todo">Person Compoent</h2>
                <Persons friends={employees}></Persons>
            </div>
        );
    }
}

// stateless functional component
function HelloWorld(props) {
    return <>{props.name}</>;
}

ReactDom.render(
    <App name="wavelabs" list={employees} />,
    document.getElementById("main")
);
