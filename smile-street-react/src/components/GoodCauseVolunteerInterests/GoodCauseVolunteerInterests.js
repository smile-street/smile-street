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

function GoodCauseVolunteerInterests() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      width: "100%",
      alignContent: "center",
    },
    buttonColor: {
      backgroundColor: "#53bd98",
      color: "white",
      margin: 10,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <ButtonGroup
                variant="contained"
                className={classes.buttonColor}
                aria-label="contained primary button group"
              >
                <Button className={classes.buttonColor}>Exercise</Button>
                <Button className={classes.buttonColor}>Art</Button>
                <Button className={classes.buttonColor}>Carpentry</Button>
              </ButtonGroup>

              <ButtonGroup
                variant="contained"
                className={classes.buttonColor}
                aria-label="contained primary button group"
              >
                <Button className={classes.buttonColor}>Cooking</Button>
                <Button className={classes.buttonColor}>Reading</Button>
                <Button className={classes.buttonColor}>Coding</Button>
              </ButtonGroup>

              <ButtonGroup
                variant="contained"
                className={classes.buttonColor}
                aria-label="contained primary button group"
              >
                <Button className={classes.buttonColor}>Interest</Button>
                <Button className={classes.buttonColor}>Interest</Button>
                <Button className={classes.buttonColor}>Interest</Button>
              </ButtonGroup>

              <TextField
                id="standard-full-width"
                style={{ margin: 8 }}
                label="Add Skills"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                multiline
                rowsMax={25}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <RadioGroup>
                <FormControlLabel
                  value="I want a daily notification about my matchs"
                  control={<Radio />}
                  label="I want a daily notification about my matches"
                />
                <FormControlLabel
                  value="No match notifcations required"
                  control={<Radio />}
                  label="no notification required"
                />
              </RadioGroup>
            </Grid>

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

export default GoodCauseVolunteerInterests;
