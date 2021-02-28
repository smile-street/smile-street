import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  
  Grid,
  Container,
} from "@material-ui/core";
import Profilebutton from "./Profilebutton.js";
import MatchCard from "./VolunteerMatches.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  buttonColor: {
    backgroundColor: "#53bd98",
    color: "white",
  },
}));

const VolunteerMatches = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Profilebutton />
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <MatchCard />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <MatchCard />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <MatchCard />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <MatchCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default VolunteerMatches;
