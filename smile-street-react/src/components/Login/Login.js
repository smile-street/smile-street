import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
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
  justifyButton: {
    alignContent: "center",
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <Container>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.justifyButton}>
              <Paper className={classes.paper} justifyContent="center">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  justifyContent="center"
                  className={classes.buttonColor}
                >
                  Log in
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <Link href="#" variant="body2">
                  Forgot password? Click here!
                </Link>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.buttonColor}
                >
                  Log in with Facebook
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.buttonColor}
                >
                  Log in with Google
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.buttonColor}
                >
                  Register as a Good Cause
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.buttonColor}
                >
                  Register as a Volunteer
                </Button>
              </Paper>
            </Grid>
          </Grid>
    </Container>
  );
};

export default Login;