import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container, Grid, Button } from "@material-ui/core";
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
  buttonColor: {
    backgroundColor: "#53bd98",
    color: "white",
    background: "#449f80",

    "&:hover": {
      background: "#449f80",
    },
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const [interests, setSelectedInterest] = useState(
    [
      { skill: "Conservation", image: "./images/interestImages/conservation.svg", selected: false },
      { skill: "Teaching", image: "./images/interestImages/teaching.svg", selected: false },
      { skill: "Public Health", image:  "./images/interestImages/public_health.svg", selected: false },
      { skill: "Empowerment", image: "./images/interestImages/empowerment.svg", selected: false },
      { skill: "Sports", image:  "./images/interestImages/sports.svg", selected: false },
      { skill: "Construction", image:  "./images/interestImages/construction.svg", selected: false },
      { skill: "Cooking", image:  "./images/interestImages/cooking.svg", selected: false },
      { skill: "Accessibility", image:  "./images/interestImages/accessibility.svg", selected: false },
      { skill: "Mental Health", image:  "./images/interestImages/mental_health.svg", selected: false },
      { skill: "Event Planning", image:  "./images/interestImages/event_planning.svg", selected: false },
      { skill: "Gardening", image:  "./images/interestImages/gardening.svg", selected: false },
      { skill: "Music", image:  "./images/interestImages/music.svg", selected: false },
    ]
  ); 

  return (
      <Container component="main">
        <Paper className={classes.paper}>
          <PageHeading heading="Select your interests" />
          <Grid container spacing={3}>
              {interests.map((interest) => {
                return (
                <Grid item xs={6} sm={3}>
                  <InterestSquares key={interest.skill} title={interest.skill} image={interest.image} />
                </Grid> )
              })}
          </Grid>
          <Grid item xs={12} sm={12}>
            <SkillsAutoComplete fullWidth />
          </Grid>
          <Grid item xs={12} sm={12}>
                <Button variant="contained" className={classes.buttonColor}>
                  Done
                </Button>
              </Grid>
        </Paper>
      </Container>
  );
}




  // <div>Icons made by <a href="https://www.flaticon.com/authors/mangsaabguru" title="mangsaabguru">mangsaabguru</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>








