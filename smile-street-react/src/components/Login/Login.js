import React from "react";

import {
  makeStyles,
  Button,
  TextField,
  Paper,
  Container,
  Grid,
  Divider,
} from "@material-ui/core";
import PageHeading from "../PageHeading/PageHeading";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#53bd98",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#449f80",
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#449f80",
    },

    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#449f80",
    },
    margin: 8,
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
  },
  TextField: {
    borderColor: "red",
    borderWidth: 4,
  },
}));

export default function Login() {
  const classes = useStyles();
  let history = useHistory();
  const handleClickRegistration = () => {
    history.push("/Registration");
  };

  return (
    <Container>
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
              className={classes.root}
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
              className={classes.root}
            />
            <Grid item xs={12} sm={12}>
              <Button
                type="submit"
                variant="contained"
                className={classes.button}
                style={{ margin: 8 }}
              >
                Log in
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} style={{ margin: 8 }}>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={12} style={{ margin: 8 }}>
              <Link
                to="/PasswordRecovery"
                variant="body2"
                style={{ margin: 8 }}
              >
                Forgot password? Click here!
              </Link>
            </Grid>
          </form>
          <Grid item xs={12} sm={12} style={{ margin: 8 }}>
            <Divider />
          </Grid>

          <Grid item xs={12} sm={12}>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              style={{ margin: 8 }}
            >
              Log in with Facebook
            </Button>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              style={{ margin: 8 }}
            >
              Log in with Google
            </Button>
          </Grid>

          <Grid item xs={12} sm={12} style={{ margin: 8 }}>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              onClick={handleClickRegistration}
            >
              Register as a Good Cause
            </Button>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              style={{ margin: 8 }}
              onClick={handleClickRegistration}
            >
              Register as a Volunteer
            </Button>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
