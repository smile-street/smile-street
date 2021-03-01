import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MatchCard from "./MatchCard";
import PageHeading from "../PageHeading/PageHeading";
import Profilebutton from "./Profilebutton";
import goodCauseDisplayDetailsMock from "../../../src/goodCauseDisplayDetailsMock.json";

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

export default function VolunteerMatches() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container component="main">
        <Paper className={classes.paper}>
          <PageHeading heading="Here is the list of available volunteer  matches" />
          <Profilebutton />
          <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {goodCauseDisplayDetailsMock.map((item) => {
              return (
                <Grid item xs={12} sm={4}>
                  <MatchCard
                    GoodCause={item.GoodCause}
                    Description={item.Description}
                    Dates={item.Dates}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
