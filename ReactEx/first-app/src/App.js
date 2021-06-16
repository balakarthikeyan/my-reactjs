import React from "react";
import PropTypes from 'prop-types';
import Axios from "axios";
import "./public/css/App.css";
// import GitHubHome from './components/GitHubHome';
// import GithubAvatar from './components/GithubAvatar'
// import CourseList from './components/CourseList'
// import Posts from './components/Posts';
// import Timer from './components/Timer'
// import Shop from './components/Shop'
// import ConstructorExample from './ConstructorExample'
import ContactForm from './templates/ContactForm';
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import { Typography, Container } from "@material-ui/core";
import { Grid, GridList, GridListTile, Paper, GridListTileBar, ListSubheader } from "@material-ui/core";
import { Card, CardActions, CardContent, CardMedia, CardHeader} from '@material-ui/core';
import { Avatar, Box, Button, IconButton  } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { AccountBox  } from "@material-ui/icons"
import { deepOrange } from '@material-ui/core/colors';
// import zoid from 'zoid'

const themeStyles = (theme) => ({
  root: {
    padding: "10px",
    margin: theme.spacing(2),
  }
});

// var MyLoginComponent = zoid.create({
//   tag: 'my-login-component',
//   url: 'http://www.my-site.com/my-login-component'
// });

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
  }

  render() {
    const  records  = this.state.posts;
    const { classes } = this.props;
    return (
      <>
        <Header />
        {/* <MyLoginComponent/> */}
        {/* <CourseNavigation /> */}
        {/* <CourseList /> */}
        {/* <GitHubHome /> */}
        {/* <ConstructorExample /> */}
        {/* <GithubAvatar username={"balakarthikeyan"}/> */}
        {/* <Container maxWidth="lg"><Posts/></Container> */}
        {/* <Timer /> */}
        {/* <Container maxWidth="lg"><Shop/></Container> */}
        <Container maxWidth="lg"><ContactForm/></Container>
        <Footer />      
      </>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(themeStyles, { withTheme: true })(App);
