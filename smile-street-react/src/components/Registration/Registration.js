import React from "react";
import { 
  makeStyles,
  Paper,
  Grid,
  Container,
  TextField, 
  Button, 
} from "@material-ui/core";
import PageHeading from '../PageHeading/PageHeading';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
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
              style={{ margin: 8 }}
              fullWidth
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="first name"
              label="First Name"
              style={{ margin: 8 }}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="last name"
              label="Last Name"
              style={{ margin: 8 }}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="email"
              label="Email Address"
              style={{ margin: 8 }}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="contact number"
              label="Contact Number"
              style={{ margin: 8 }}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="password"
              label="Password"
              style={{ margin: 8 }}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="confirm password"
              label="Confrim Password"
              style={{ margin: 8 }}
              fullWidth
            />
              
            <Grid item xs={12} sm={12}>
              <Button variant="contained" className={classes.button}>
                Add availblity
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
