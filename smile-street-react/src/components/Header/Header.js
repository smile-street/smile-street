import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Header = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();
  return (
    <>
      <Container>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <img
                  src="../images/SmileStreetLogo.png"
                  alt="logo"
                  width="100%"
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Header;
