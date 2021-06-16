import React, { Component } from 'react';
import {Route, Switch, withRouter, Link} from "react-router-dom"
import jwt_decode from "jwt-decode"

import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  state ={
    userData : {
      email: "test", 
      password : "test",
    },
    isAuthenticated : false,
    currentUserInfo : {
      email : ""
    },
    alert: ""
  }  

  componentWillMount(){
    const userData = localStorage.getItem("isAuthenticated");
    if(userData){
      this.setState({
          isAuthenticated: true,
      })
    }
  }

  authCheck = (data) =>{
    if(data.email === this.state.userData.email && data.password === this.state.userData.password) {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0F1dGhlbnRpY2F0ZWQiOnRydWUsImVtYWlsIjoidGVzdCJ9.jJ2x1ULrkSB0MUvByHrB6izxb-kvHsyrg1LtMRNiUVs";
      const decodeData = jwt_decode(token);
      localStorage.setItem('token', decodeData);
      //console.log("token:", decodeData)
      this.setState({
        isAuthenticated:true,
        currentUserInfo:{
          email: data.email
        },
        alert : ""
      }, () => {
        localStorage.setItem('isAuthenticated', true);
        this.props.history.push("/dashboard")
      });
    } else {
      this.setState({
        alert : "Values are not matched"
      });
    }
  }
  
  logout = () =>{
    localStorage.removeItem('isAuthenticated');
    this.setState({
      isAuthenticated:false,
    }, () => {
      this.props.history.push("/")
    });  
  }
  
  render () { 
    return (
      
        <React.Fragment>
            <Header />
            <Navbar isAuthenticated={this.state.isAuthenticated} />
            {
              this.state.isAuthenticated && <Link className="right" to="#" onClick={this.logout}>Global Logout</Link>
            }
            <Switch>
              <Route path="/" exact exact render={
                (props) => <Home {...props} 
                                  isAuthenticated={this.state.isAuthenticated}
                                  />
               } />
              <Route path="/login" exact render={
                (props) => <Login {...props} 
                                  authCheck={this.authCheck}
                                  alert={this.state.alert}
                                  isAuthenticated={this.state.isAuthenticated}
                                  /> 
              } />
              <Route path="/about" exact exact render={
                (props) => <Aboutus {...props} 
                                  isAuthenticated={this.state.isAuthenticated}
                                  />
               } />
              <PrivateRoute path="/dashboard" exact component={Dashboard} isAuthenticated={this.state.isAuthenticated} /> 
              <Route path="*" render={() => <h1>Not Found</h1>} />
            </Switch>
        </React.Fragment>

    );
  }
}

export default withRouter(App);
