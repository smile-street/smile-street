import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Register from "../Register/Register";

const Login = () => {
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
    },
    justifyButton: {
      justifySelf: "center",
    },
  }));

  const classes = useStyles();

  return (
    <Container>
      <form>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <TextField
                  id="standard-full-width"
                  style={{ margin: 8 }}
                  placeholder="E-mail"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <TextField
                  id="standard-full-width"
                  style={{ margin: 8 }}
                  placeholder="Password"
                  fullWidth
                  password
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
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
                  className={classes.buttonColor}
                  justifySelf="center"
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.buttonColor}
              justify="center"
            >
              Log in with Facebook
            </Button>

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
        </div>
      </form>
    </Container>
  );
};

export default Login;
