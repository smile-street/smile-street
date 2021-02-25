import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import InterestSquares from "./InterestSquares";
import SkillsAutoComplete from "./SkillsAutoComplete";
import PageHeading from "../PageHeading/PageHeading";

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

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container component="main">
        <Paper className={classes.paper}>
          <PageHeading heading="Here is the list of available volunteer  matches" />
          <SkillsAutoComplete />
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <InterestSquares />
            </Grid>
            <Grid item xs={6} sm={3}>
              <InterestSquares />
            </Grid>
            <Grid item xs={6} sm={3}>
              <InterestSquares />
            </Grid>
            <Grid item xs={6} sm={3}>
              <InterestSquares />
            </Grid>
            <Grid item xs={6} sm={3}>
              <InterestSquares />
            </Grid>
            <Grid item xs={6} sm={3}>
              <InterestSquares />
            </Grid>
            <Grid item xs={6} sm={3}>
              <InterestSquares />
            </Grid>
            <Grid item xs={6} sm={3}>
              <InterestSquares />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
