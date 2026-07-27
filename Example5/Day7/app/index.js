import React , { Component } from "react";
import ReactDom from "react-dom";

import './css/style.css';
import CustomComponent from "./component/CustomComponent";
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
                <CustomComponent personsObj = {employees}></CustomComponent>
                <Persons></Persons>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById("main"))