import React from "react";
import {
  makeStyles,
  Paper,
  Grid,
  Container,
  TextField,
  Button,
} from "@material-ui/core";
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

export default function Registration() {
  const classes = useStyles();
  return (
    <Container component="main">
      <Paper className={classes.paper}>
        <Container maxWidth="xs">
          <PageHeading heading="Registration" />
          <Grid container spacing={3}>
            <TextField
              variant="outlined"
              margin="normal"
              id="title"
              label="Title"
              className={classes.root}
              fullWidth
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="first name"
              label="First Name"
              className={classes.root}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="last name"
              label="Last Name"
              className={classes.root}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="email"
              label="Email Address"
              className={classes.root}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="contact number"
              label="Contact Number"
              className={classes.root}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="password"
              label="Password"
              className={classes.root}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="confirm password"
              label="Confrim Password"
              className={classes.root}
              fullWidth
            />

            <Grid item xs={12} sm={12}>
              <Button variant="contained" className={classes.buttonColor}>
                Add availblity
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
