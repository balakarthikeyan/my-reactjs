import React from 'react'
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

export default function Footer() {
  return (
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              &copy; 2019 Balakarthikeyan
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
  )
}
