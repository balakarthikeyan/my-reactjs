import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TypoGraphy from "@mui/material/Typography";
import { Home, Book, AccountBox } from '@mui/icons-material';
import { makeStyles } from "@mui/material/styles";

const useStyles = makeStyles(
  (theme) => ({
    icon: {
      marginTop: 10
    }
  })
);

function NavBar(props) {
  const classes = useStyles();
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <TypoGraphy color="inherit" component="a">
            Home <Home className={classes.icon} />
          </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
          <TypoGraphy color="inherit" component="a">
            Posts <Book className={classes.icon} />
          </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
          <TypoGraphy color="inherit" component="a">
            Contact <AccountBox className={classes.icon} />
          </TypoGraphy>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default NavBar;
