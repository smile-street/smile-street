import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MatchVolunteersCard from "./MatchedVolunteersCard";
import PageHeading from "../PageHeading/PageHeading";
import GoodCauseProfileButton from "./GoodCauseProfileButton";
import testData from "../../../src/testData.json";

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
          <GoodCauseProfileButton />
          {testData.map((item) => {
            return (
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <MatchVolunteersCard
                    name={item.name}
                    interest={item.interest}
                    availability={item.availability}
                  />
                </Grid>
              </Grid>
            );
          })}
        </Paper>
      </Container>
    </div>
  );
}
