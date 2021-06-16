import React from "react";
import PropTypes from 'prop-types';
import Axios from "axios";
import "./public/css/App.css";
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import { Typography, Container } from "@material-ui/core";
import { Grid, GridList, GridListTile, Paper, GridListTileBar, ListSubheader } from "@material-ui/core";
import { Card, CardActions, CardContent, CardMedia, CardHeader} from '@material-ui/core';
import { Avatar, Box, Button, IconButton  } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { AccountBox  } from "@material-ui/icons"
import { ImgMediaCard } from './templates/CardComponent'
import { deepOrange } from '@material-ui/core/colors';

const themeStyles = (theme) => ({
  root: {
    padding: "10px",
    margin: 10,
  },
  paper: {
    maxWidth: 400,
    padding: theme.spacing(2),
  },
  avatar: {
    height: 50,
    width: 50,
    margin: "auto"
  },
  icon: {
    height: 30,
    width: 30
  },
  iconColor: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  gridList: {
    backgroundColor: "#CCCCCC",
  },
  gridListTile: {
    backgroundColor: "#909090",
  },
  grid:{
    backgroundColor: "#909090",
  },
  gridItem: {
    backgroundColor: "#454545",
    color: "#FFFFFF",
    borderStyle: "solid",
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  }
});

class MaterialExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      photos: [],
    };
  }

  componentDidMount() {
    const apiUrl1 = "https://jsonplaceholder.typicode.com/posts?userId=1";
    Axios.get(apiUrl1)
      .then((response) => {
        this.setState({
          posts: response.data,
        });
        console.log(this.state.posts);
      })
      .catch((error) => console.log("This is your posts", error));

      const apiUrl2 = "https://jsonplaceholder.typicode.com/photos?albumId=1";
      Axios.get(apiUrl2)
        .then((response) => {
          this.setState({
            photos: response.data,
          });
          console.log(this.state.photos);
        })
        .catch((error) => console.log("This is your photos", error));
  }

  render() {
    const  records  = this.state.posts;
    var  photo  = this.state.photos;
    const  photos  = photo.splice(0, 6);
    const { classes } = this.props;
    return (
      <>
        <Header />
        <Container maxWidth="md">
          <div className={classes.root}> 
            <Box component="div" color="text.primary" m={1} p={1}>
              <Typography> Div Me !! </Typography>
              <Box component="span" color="text.primary" m={1}>
                <Button> Span Me !! </Button>
              </Box>          
            </Box>          
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar>W</Avatar>
                </Grid>
                <Grid item xs>
                  <Typography>Truncation should be conditionally applicable on this long line of text
    as this is a much longer line than what the container can support.</Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar>W</Avatar>
                </Grid>
                <Grid item xs>
                  <Typography>Truncation should be conditionally applicable on this long line of text
    as this is a much longer line than what the container can support.</Typography>
                </Grid>
              </Grid>
            </Paper>            
          </div>
        </Container>

        <Container maxWidth="md">
          <div className={classes.root}>
              <Typography variant="h2" gutterBottom>Gird with CardActionArea</Typography>
          </div>        
          <Grid container direction="row" justify="space-evenly" spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} lg={3} xl={3}>  
              <ImgMediaCard/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} xl={3}>  
              <ImgMediaCard/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} xl={3}>  
              <ImgMediaCard/>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="md">
          <div className={classes.root}>
            <Typography variant="h5" gutterBottom>Gird with Paper</Typography>
          </div>
          <Grid container direction="row" justify="space-evenly" spacing={1} className={classes.grid}>
            { records.map((row, index) => (
              <Grid item xs={12} sm={6} lg={3} xl={3} className={classes.gridItem} id={index} noWrap>
                <Paper className={classes.paper}>
                  <Avatar classes={{
                      avatar: classes.avatar,
                      square: classes.square,
                    }} variant="square">
                    <AccountBox className={classes.icon}  />
                  </Avatar>
                  <Typography component="p" gutterBottom >{row.title}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container maxWidth="md">
          <div className={classes.root}>
            <Typography variant="h5" gutterBottom>Gird Card without CardActionArea</Typography>
          </div>
          <Grid container direction="row" justify="flex-start" spacing={2} alignItems="flex-start" className={classes.grid}>
            { records.map((row, index) => (
              <Grid item xs={12} sm={6} lg={3} xl={3} className={classes.gridItem} id={index}>
                  <Card>
                    <CardHeader title={row.title} />
                    <CardMedia
                      component="img"
                      alt={row.title}
                      height="150"
                      image="https://via.placeholder.com/150/92c952 "
                      title={row.title}
                    />               
                    <CardContent>
                        <Typography component="p">
                            {row.body}
                        </Typography>
                    </CardContent>                    
                    <CardActions>
                      <Button size="small" color="primary" variant="outlined">
                        Read more
                      </Button>
                    </CardActions>
                  </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    
        <Container maxWidth="md">
          <GridList className={classes.gridList} cols={3} spacing={2}>
            <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
              <ListSubheader component="div">Gallery</ListSubheader>
            </GridListTile>            
            {photos.map((row, index) => (
              <GridListTile className={classes.gridListTile} key={index} >
                <img src={row.url} alt={row.title} />
                <GridListTileBar
                  title={row.title}
                  subtitle={<span>by: Balakarthikeyan</span>}
                  actionIcon={
                    <IconButton aria-label={`Information about ${row.title}`} className={classes.iconColor}>
                      <AccountBox />
                    </IconButton>
                  }
                  noWrap
                />                  
              </GridListTile>
            ))}
          </GridList>
        </Container>  

        <Footer />      
      </>
    );
  }
}

MaterialExample.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(themeStyles, { withTheme: true })(MaterialExample);
