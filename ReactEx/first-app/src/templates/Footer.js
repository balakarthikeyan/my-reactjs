import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            &copy; {new Date().getFullYear()} Balakarthikeyan
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}