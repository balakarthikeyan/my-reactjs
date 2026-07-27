import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const posts = [
  {
   title: "My first post",
   excerpt: "This is my first post with more content inside",
   image: "https://bit.ly/2WNi2Ml"
  },
 
  {
   title: "My second post",
   excerpt: "This is my second post with more content inside",
   image: "https://bit.ly/2WNi2Ml"
  },
 
  {
   title: "My third post",
   excerpt: "This is my third post with more content inside",
   image: "https://bit.ly/2WNi2Ml"
  },
 
  {
   title: "My fourth post",
   excerpt: "This is my fourth post with more content inside",
   image: "https://bit.ly/2WNi2Ml"
  },
 
  {
   title: "My fifth post",
   excerpt: "This is my fifth post with more content inside",
   image: "https://bit.ly/2WNi2Ml"
  },
 
  {
   title: "My sixth post",
   excerpt: "This is my sixth post with more content inside",
   image: "https://bit.ly/2WNi2Ml"
  }
 ]

function Posts(props) {
  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={20} justify="center">
        {posts.map(post => (
          <Grid item key={post.title}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={post.title}
                  height="140"
                  image={post.image}
                  title={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="#" target="_blank">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Posts;