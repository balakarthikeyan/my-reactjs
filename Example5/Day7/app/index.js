import React , { Component } from "react";
import ReactDom from "react-dom";

import './css/style.css';
import Component1 from "./component/Component1";
import Persons from "./component/Persons";
class App extends Component {
    render() {
        const employees = [
            { "name": "Balakarthikeyan", "company" : "Unimoni", "exp" : "7+"},
            { "name": "Ramesh", "company" : "Hexaware", "exp" : "6+"},
            { "name": "Vivek", "company" : "Adlabs", "exp" : "8+"}
        ];
        return (
            <div>
                <h1> Hello world React JS </h1>                
                <Component1 personsObj = {employees}></Component1>
                <Persons></Persons>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById("main"))