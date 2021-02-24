import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Container, Grid, Paper } from "@material-ui/core";

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

export default function PasswordRecovery() {
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
                placeholder="Enter e-mail to verify your password"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-full-width"
                style={{ margin: 8 }}
                placeholder="Enter new password"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-full-width"
                style={{ margin: 8 }}
                placeholder="Confirm new password"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />

            </Grid>

            <Grid item xs={12} sm={12}>
              <Button variant="contained" className={classes.buttonColor}>
                Reset Password
              </Button>
            </Grid>
          </Grid>

        </Paper>
      </Container>
    </div>

  );
}
