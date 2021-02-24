import React from "react";

import { 
  makeStyles, 
  Button, 
  TextField,
  Link, 
  Paper, 
  Container,
} from "@material-ui/core";
import PageHeading from '../PageHeading/PageHeading';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(0.5),
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "xs",
  },
  form: {
    width: "100%",
  },
  button: {
    backgroundColor: "#53bd98",
    color: "white",
    "&:hover": {
      background: "#449f80",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    buttonColor: {
      backgroundColor: "#53bd98",
      color: "white",
    },
    justifyButton: {
      justifySelf: "center",
    },
  },
}));

export default function Login() {
  const classes = useStyles();

  return (

    <Container component="main">
      <Paper className={classes.paper}>
      <Container maxWidth="xs">
        <PageHeading heading="Log In" />
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
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
              justify="center"
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
}
