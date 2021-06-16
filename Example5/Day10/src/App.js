import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Header from './components/Header';
import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import Login from './components/Login';
import User from './components/User';
import OnClick from './components/OnClick';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <Router>
      <React.Fragment>
          <Header />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/about" exact component={Aboutus} />
            <Route path="/user/:id" exact component={User} />
            <Route path="/sidebar" component={Sidebar} />
            <Route path="/onclick" component={OnClick} />
            <Route path="*" render={() => <h1>Not Found</h1>} />
          </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
