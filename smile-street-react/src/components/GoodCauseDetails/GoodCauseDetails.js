import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Paper, Grid, Container } from "@material-ui/core";

export default function GoodCauseDetails() {
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
      "&:hover": {
        background: "#449f80",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-full-width"
                style={{ margin: 8 }}
                placeholder="charity registration number"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-full-width"
                style={{ margin: 8 }}
                label="charity registered name"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                  readOnly: true,
                }}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-full-width"
                style={{ margin: 8 }}
                placeholder="Please describe your organisation & charitable aims"
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
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Button variant="contained" className={classes.buttonColor}>
                Add Volunteering Oportunities
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
