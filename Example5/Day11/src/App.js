import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  state = {
    userData: {
      email: "test@gmail.com",
      password: "123456",
    },
    isAuthenticated: false,
    currentUserInfo: {
      email: ""
    },
    alert: ""
  }

  componentWillMount() {
    const userData = localStorage.getItem("isAuthenticated");
    if (userData) {
      this.setState({
        isAuthenticated: true,
      })
    }
  }

  authCheck = (data, navigate) => {
    if (data.email === this.state.userData.email && data.password === this.state.userData.password) {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0F1dGhlbnRpY2F0ZWQiOnRydWUsImVtYWlsIjoidGVzdCJ9.jJ2x1ULrkSB0MUvByHrB6izxb-kvHsyrg1LtMRNiUVs";
      const decodeData = jwtDecode(token);
      localStorage.setItem('token', JSON.stringify(decodeData));
      //console.log("token:", decodeData)
      this.setState({
        isAuthenticated: true,
        currentUserInfo: {
          email: data.email
        },
        alert: ""
      }, () => {
        localStorage.setItem('isAuthenticated', true);
        navigate("/dashboard");
      });
    } else {
      this.setState({
        alert: "Values are not matched"
      });
    }
  }

  logout = (navigate) => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('token');
    this.setState({ isAuthenticated: false }, () => {
      navigate("/");
    });
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Navbar isAuthenticated={this.state.isAuthenticated} logout={this.logout} />
          <Routes>
            <Route path="/" element={<Home isAuthenticated={this.state.isAuthenticated} />} />
            <Route path="/login" element={<Login authCheck={this.authCheck} alert={this.state.alert} isAuthenticated={this.state.isAuthenticated} />} />
            <Route path="/about" element={<Aboutus isAuthenticated={this.state.isAuthenticated} />} logout={this.logout} />
            <Route element={<PrivateRoute isAuthenticated={this.state.isAuthenticated} />}>
              <Route path="/dashboard" element={<Dashboard />} logout={this.logout} />
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
