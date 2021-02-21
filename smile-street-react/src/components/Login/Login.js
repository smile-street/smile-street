import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(0.5),
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: "xs",
  },
  form: {
    width: '100%',
  },
  button: {
    backgroundColor: "#53bd98",
    color: "white",
    "&:hover": {
      background: "#449f80",
    },
    margin: theme.spacing(1, 0, 0),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container component="main">
      <Paper className={classes.paper}>
      <Container maxWidth="xs">
        <Typography component="h1" variant="h5">
            Sign in
        </Typography>
        <form className={classes.form}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Log in
          </Button>

          <Link href="#" variant="body2">
            Forgot password? Click here!
          </Link>
        </form>


            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Log in with Facebook
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Log in with Google
            </Button> 
      </Container>

      <Container maxWidth="xs" className={classes.paper}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Register as a Good Cause
        </Button>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Register as a Volunteer
        </Button>
      
      
      </Container>
      </Paper>
    </Container>
  );
};

