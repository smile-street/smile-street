import React, { useState } from "react";
import {
  makeStyles,
  Paper,
  Grid,
  Container,
  TextField,
  Button,
} from "@material-ui/core";
import GoodCauseName from './GoodCauseName';
import PageHeading from "../PageHeading/PageHeading";

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
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  form: {
    width: "100%",
  },
  buttonColor: {
    backgroundColor: "#53bd98",
    color: "white",
    background: "#449f80",

    "&:hover": {
      background: "#449f80",
    },
  },
}));


export default function GoodCauseDetails() {
  const [goodCauseNumber, setGoodCauseNumber] = useState('')
  const classes = useStyles();
  
  function updateGoodCauseName(value) {
    setGoodCauseNumber(value);
    console.log(value);

  }
  
  return (
    <Container component="main">
      <Paper className={classes.paper}>
        <Container maxWidth="xs">
          <PageHeading heading="Good Cause Details" />
          <Grid container spacing={3}>
            <TextField
              variant="outlined"
              margin="normal"
              id="title"
              label="Charity Registration Number"
              className={classes.root}
              fullWidth
              autoFocus
              value={goodCauseNumber}
              onChange={(event) => updateGoodCauseName(event.target.value)}
            />
            <GoodCauseName className={classes.root} number={goodCauseNumber}/>
            <TextField
              variant="outlined"
              margin="normal"
              id="last name"
              label="Add a few words describing your good cause"
              className={classes.root}
              fullWidth
              multiline
              rows="6"
            />

            <Grid item xs={12} sm={12}>
              <Button variant="contained" className={classes.buttonColor}>
                Add Opportunity
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
