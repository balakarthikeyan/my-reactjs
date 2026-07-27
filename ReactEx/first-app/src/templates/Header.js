/* import React from 'react';
import logo from '../public/images/logo.svg';
import '../public/css/App.css';
function Headers() {
    return (
        <>
            <header className="App-header">
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    <img src={logo} className="App-logo" alt="logo" width="50" />
                    <span>My application</span>
                </a>
            </header>
        </>
    );
} */
import React from 'react'
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/material/styles';
import NavBar from './NavBar';
const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
  },
}));

const Header = () => {
  const classes = useStyles();
    return(
        <>
        <AppBar position="static" color="primary">
          <Container maxWidth="lg">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>            
              <Typography variant="h6" color="inherit" className={classes.title}>
                Material UI Demo
              </Typography>
              <NavBar />
              <Button color="inherit">Login</Button>
            </Toolbar>           
          </Container>
        </AppBar>
        </>
    )
}
export default Header;