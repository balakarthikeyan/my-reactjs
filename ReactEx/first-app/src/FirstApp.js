import React , { Component } from "react";
import PropTypes from 'prop-types';
import './public/css/App.css';
import SampleComponent from "./components/SampleComponent";
import MapAndFilter from "./components/MapAndFilter";

class FirstApp extends Component {
    render() {
        return (
            <div>
                <h1> Hello world React JS </h1>                
                <SampleComponent employeesObj = {this.props.employees}></SampleComponent>
                <MapAndFilter></MapAndFilter>
            </div>
        )
    }
}

FirstApp.propTypes = {
    employees : PropTypes.array
}

FirstApp.defaultProps = {  
    employees: [
        { "name": "Balakarthikeyan", "company" : "Unimoni", "exp" : "7+"},
        { "name": "Ramesh", "company" : "Hexaware", "exp" : "6+"},
        { "name": "Vivek", "company" : "Adlabs", "exp" : "8+"}
    ] 
}  

export default FirstApp;