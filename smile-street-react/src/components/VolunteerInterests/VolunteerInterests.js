import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container, Grid } from "@material-ui/core";
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
          <PageHeading heading="Select your interests" />
          <SkillsAutoComplete />
          <Grid container spacing={3}>
              {interestList.map((interest) => {
                return (
                <Grid item xs={6} sm={3}>
                  <InterestSquares key={interest.skill} title={interest.skill} image={interest.image} />
                </Grid> )
              })}
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}


const interestList = [
  { skill: "Conservation", image: "./images/interestImages/accessibility.svg" },
  { skill: "Teaching", image: "./images/interestImages/teaching.svg" },
  { skill: "Public Health", image:  "./images/interestImages/public_health.svg"  },
  { skill: "Empowerment", image: "./images/interestImages/empowerment.svg" },
  { skill: "Sports", image:  "./images/interestImages/sports.svg"  },
  { skill: "Construction", image:  "./images/interestImages/construction.svg"  },
  { skill: "Cooking", image:  "./images/interestImages/cooking.svg"  },
  { skill: "Accessibility", image:  "./images/interestImages/accessibility.svg"  },
  { skill: "Mental Health", image:  "./images/interestImages/mental_health.svg"  },
  { skill: "Event Planning", image:  "./images/interestImages/event_planning.svg"  },
  { skill: "Gardening", image:  "./images/interestImages/gardening.svg"  },
  { skill: "Music", image:  "./images/interestImages/music.svg"  },

  // <div>Icons made by <a href="https://www.flaticon.com/authors/mangsaabguru" title="mangsaabguru">mangsaabguru</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>








];
