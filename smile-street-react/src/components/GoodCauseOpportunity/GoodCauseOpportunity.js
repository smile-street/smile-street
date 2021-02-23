import React from "react";
import CustomizedHook from "./AutoCompleteTag";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { TextField, Button } from "@material-ui/core";
import MaterialUIDatePickers from "./DatePickerStarting";
import MaterialUIDatePickersEnding from "./DatePickerEnding";

const GoodCauseOpportunity = () => {
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
      "&:hover": {},
    },
  }));

  const classes = useStyles();

  return (
    <Container>
      <form>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="outlined-multiline-static"
                  label="Description of opportunity"
                  multiline
                  rows={4}
                  defaultValue="Few words describing an opportunity"
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <CustomizedHook />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MaterialUIDatePickers />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MaterialUIDatePickersEnding />
              </Grid>

              <Grid item xs={12} sm={12}>
                <Button variant="contained" className={classes.buttonColor}>
                  Add availblity
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </form>
    </Container>
  );
};

export default GoodCauseOpportunity;
