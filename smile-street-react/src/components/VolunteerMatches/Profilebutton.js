import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Select,
  TextField,
  FormControl,
  MenuItem,
  Container,
  Grid,
  Paper,
  InputLabel,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  formElementSize: {
    minWidth: 300,
  },
  buttonColor: {
    backgroundColor: "#53bd98",
    color: "white",
  },
}));

function Profilebutton() {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6}>
      {/* <Paper className={classes.paper}> */}
      <FormControl variant="filled" className={classes.formElementSize}>
        <InputLabel id="demo-simple-select-filled-label" sm={6}>
          My Account settings
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
        >
          <MenuItem value="">
            <em>Signed in as User</em>
          </MenuItem>
          <MenuItem value={10}>Edit Profile</MenuItem>
          <MenuItem value={10}>Edit Dates</MenuItem>
          <MenuItem value={10}>Location</MenuItem>
          <MenuItem value={10}>Skills</MenuItem>
          <MenuItem value={10}>Interests</MenuItem>
          <MenuItem value={10}>Delete Account</MenuItem>
          <MenuItem value={10}>Logout</MenuItem>
        </Select>
      </FormControl>
      {/* </Paper> */}
    </Grid>
  );
}
export default Profilebutton;
