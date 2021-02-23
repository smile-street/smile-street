import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { TextField, Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Checkbox } from "@material-ui/core";
import InterestSquares from "./InterestSquares";
import CustomizedHook from "../GoodCauseOpportunity/AutoCompleteTag";
//import InterestSquares from "./components/VolunteerInterests/InterestSquares";
import SkillsAutoComplete from "../VolunteerInterests/SkillsAutoComplete";
import Box from "@material-ui/core/Box";

function VolunteerInterests() {
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

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.root}>
        

          <Grid container spacing={1}>
            <Grid item xs={4}>
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
      </Container>
    </div>
  );
}

export default VolunteerInterests;
