import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container, Grid, Button, GridList, GridListTile, GridListTileBar } from "@material-ui/core";
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


export default function VolunteerInterests() {
  const classes = useStyles();
  const [interests, setSelectedInterest] = useState(
    [
      { key: 1, skill: "Conservation", image: "./images/interestImages/conservation.svg", selected: false },
      { key: 2, skill: "Teaching", image: "./images/interestImages/teaching.svg", selected: false },
      { key: 3, skill: "Public Health", image:  "./images/interestImages/public_health.svg", selected: false },
      { key: 4, skill: "Empowerment", image: "./images/interestImages/empowerment.svg", selected: false },
      { key: 5, skill: "Sports", image:  "./images/interestImages/sports.svg", selected: false },
      { key: 6, skill: "Construction", image:  "./images/interestImages/construction.svg", selected: false },
      { key: 7, skill: "Cooking", image:  "./images/interestImages/cooking.svg", selected: false },
      { key: 8, skill: "Accessibility", image:  "./images/interestImages/accessibility.svg", selected: false },
      { key: 9, skill: "Mental Health", image:  "./images/interestImages/mental_health.svg", selected: false },
      { key: 10, skill: "Event Planning", image:  "./images/interestImages/event_planning.svg", selected: false },
      { key: 11, skill: "Gardening", image:  "./images/interestImages/gardening.svg", selected: false },
      { key: 12, skill: "Music", image:  "./images/interestImages/music.svg", selected: false },
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
                  <InterestSquares key={interest.key} title={interest.skill} image={interest.image} />
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
