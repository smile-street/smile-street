import React from "react";
import CustomizedHook from "./AutoCompleteTag";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { TextField, Button } from "@material-ui/core";

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
      "&:hover": {
        background: "#449f80",
      },
    },
  }));

  const classes = useStyles();

  return (
    <Container>
      <form>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <TextField
                  id="outlined-multiline-static"
                  label="Description of opportunity"
                  multiline
                  rows={4}
                  defaultValue="Few words describing an opportunity"
                  variant="outlined"
                  fullWidth
                />
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <CustomizedHook />
              </Paper>
            </Grid>
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
                  placeholder="Contact Number"
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
                  type="password"
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
                  type="password"
                  placeholder="Confirm Password"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Button variant="contained" className={classes.buttonColor}>
                Add availblity
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </Container>
  );
};

export default GoodCauseOpportunity;
