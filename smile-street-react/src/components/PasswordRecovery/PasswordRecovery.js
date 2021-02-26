import React, { useState, useEffect } from "react";

import {
  makeStyles,
  Paper,
  Grid,
  Container,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@material-ui/core";
import PageHeading from "../PageHeading/PageHeading";
import { useHistory } from "react-router-dom";

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

export default function PasswordRecovery() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let history = useHistory();
  const handleBackToLogin = () => {
    history.push("/");
  };
  return (
    <Container component="main">
      <Paper className={classes.paper}>
        <Container maxWidth="xs">
          <PageHeading heading="Password Recovery Page" />
          <Grid container spacing={3}>
            <TextField
              variant="outlined"
              margin="normal"
              id="title"
              label="Enter you e-mail to reset the password"
              className={classes.root}
              fullWidth
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="first name"
              label="Enter your new password"
              className={classes.root}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="last name"
              label="Verify yoyr new passworddd"
              className={classes.root}
              fullWidth
            />

            <Grid item xs={12} sm={12}>
              <Button
                variant="contained"
                className={classes.buttonColor}
                onClick={handleClickOpen}
              >
                submit
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Varify your e-mail to continue login"}
                </DialogTitle>

                <DialogActions>
                  <Button onClick={handleBackToLogin} color="primary">
                    OK
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
