import React, { Component } from 'react';
import logo from './public/images/logo.svg';
import './public/css/App.css';
import ListEmployees from "./components/ListEmployees";
import CreateEmployee from "./components/CreateEmployee";

class EmployeeApp extends Component {
    state = {
      employees : [
        { "name": "Balakarthikeyan", "company" : "Unimoni", "experience" : "7+", "email" : "bala@gmail.com", "phone":"+91 975124228"},
        { "name": "Ramesh", "company" : "Hexaware", "experience" : "6+", "email" : "ramesh@gmail.com", "phone":"+91 962922963"},
        { "name": "Vivek", "company" : "Adlabs", "experience" : "8+", "email" : "vivek@gmail.com", "phone":"+91 9842343283"}
      ],
      showForm : false
    }
    deleteEmployee = (arg) => {
      const newEmployees = this.state.employees.filter((emp)=>{ return arg.email !== emp.email})
      this.setState({
        employees:newEmployees
      })
    }
    showCreateForm = () => {
      this.setState({
        showForm : true
      })
    }
    showAllEmployees = () => {
      this.setState({
        showForm : false
      })
    }
    saveEmployeeForm = (employee) => {
      this.setState({
        employees : [...this.state.employees, employee]
      }, ()=>{
        console.log(this.state)
      })
    } 
    render() { 
      return ( 
        <div className="App">
          <header className="App-header">
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              <img src={logo} className="App-logo" alt="logo" width="50" />
              <span>Learn React</span>
            </a>
          </header>
          <main>
            <h1>Hello React Application</h1>
            <button className="right" onClick={()=> this.showCreateForm()} >Add Employee</button>
            {
              this.state.showForm ? <CreateEmployee saveEmpFunction = {this.saveEmployeeForm} showAllFunction = {this.showAllEmployees} /> : <ListEmployees data = {this.state.employees} deleteEmpFunction = {this.deleteEmployee} />
            }
          </main>
        </div>
      );
    }
}

export default EmployeeApp;