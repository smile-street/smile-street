import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, 
        Grid, 
        Container, 
        Paper, 
        FormControlLabel, 
        RadioGroup, 
        Checkbox 
} from "@material-ui/core";
import InterestSquares from "./InterestSquares";
//import InterestSquares from "./components/VolunteerInterests/InterestSquares";
import SkillsAutoComplete from "../VolunteerInterests/SkillsAutoComplete";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  box: {
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
    "&:hover": {
      background: "#449f80",
    },
  },
}));

export default function VolunteerInterests() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.root}>
        <Paper>
          <Grid container >
            <Grid item xs={4} className={classes.paper}>
              <InterestSquares />
            </Grid>
            <Grid item xs={4}>
              <InterestSquares />
            </Grid>
            <Grid item xs={4}>
              <InterestSquares />
            </Grid>
            <Grid item xs={4}>
              <InterestSquares />
            </Grid>
            <Grid item xs={4} >
              <InterestSquares />
            </Grid>
            <Grid item xs={4} >
              <InterestSquares />
            </Grid>
            <Grid item xs={4} >
              <InterestSquares />
            </Grid>
            <Grid item xs={4} >
              <InterestSquares />
            </Grid>
            <Grid item xs={4} >
              <InterestSquares />
            </Grid>
          </Grid>
        

        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <SkillsAutoComplete />
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <RadioGroup>
                <FormControlLabel
                  value="i want a daily notification about my matchs"
                  control={<Checkbox />}
                  label="I want a daily notification about my matches"
                />
                <FormControlLabel
                  value="i want weekly notifications."
                  control={<Checkbox />}
                  label="I want weekly notifications."
                />
              </RadioGroup>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Button variant="contained" className={classes.buttonColor}>
                Done
              </Button>
            </Grid>
          </Grid>
        </Paper>
        </Paper>
      </Container>
    </div>
  );
}
