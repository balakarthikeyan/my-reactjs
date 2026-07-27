import React from "react";
import PropTypes from 'prop-types';
import Axios from "axios";
import "./public/css/App.css";
import GitHubHome from './components/GitHubHome';
import GithubAvatar from './components/GithubAvatar'
import CourseList from './components/CourseList'
import Posts from './components/Posts';
import Timer from './components/Timer'
import Shop from './components/Shop'
import ConstructorExample from './ConstructorExample'
import ContactForm from './templates/ContactForm';
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import { Typography, Container } from "@mui/material";
import { Grid, GridList, GridListTile, Paper, GridListTileBar, ListSubheader } from "@mui/material";
import { Card, CardActions, CardContent, CardMedia, CardHeader } from '@mui/material';
import { Avatar, Box, Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AccountBox } from "@mui/icons-material"
import { deepOrange } from '@mui/material/colors';
import zoid from 'zoid'

// Styled wrapper replacing withStyles
const Root = styled("div")(({ theme }) => ({
  padding: "10px",
  margin: theme.spacing(2),
}));

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
    const records = this.state.posts;
    const { classes } = this.props;
    return (
      <>
        <Header />
        <CourseNavigation />
        <CourseList />
        <GitHubHome />
        <ConstructorExample />
        <GithubAvatar username={"balakarthikeyan"}/>
        <Container maxWidth="lg"><Posts/></Container>
        <Timer />
        <Container maxWidth="lg"><Shop/></Container>
        <Container maxWidth="lg"><ContactForm /></Container>
        <Footer />
      </>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object // no longer required, but kept for compatibility
};

export default App;
// export default withStyles(themeStyles, { withTheme: true })(App);
