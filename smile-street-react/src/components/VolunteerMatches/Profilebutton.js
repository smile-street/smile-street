import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
  Select,
  FormControl,
  MenuItem,
  Grid,
  InputLabel,
  Paper,
  Link,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formElementSize: {
    minWidth: 300,
  },
  buttonColor: {
    backgroundColor: '#53bd98',
    color: 'white',
  },
}));

export default function Profilebutton() {
  const classes = useStyles();
  return (
    <Grid>
      <Grid item sm={4}></Grid>
      <Grid item sm={4} justify="center"></Grid>
      <Grid item sm={4} xs={12} justify="flex-end">
        <FormControl variant="filled" className={classes.formElementSize}>
          <InputLabel id="demo-simple-select-filled-label" sm={6}>
            My Account settings
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-filled"
          >
            <MenuItem value="">
              <em>Signed in as User</em>
            </MenuItem>
            <MenuItem value={10}><Link to ={"/V"}>Edit Profile</Link></MenuItem>
            <MenuItem value={10}>Edit Dates</MenuItem>
            <MenuItem value={10}>Location</MenuItem>
            <MenuItem value={10}>Skills</MenuItem>
            <MenuItem value={10}>Interests</MenuItem>
            <MenuItem value={10}>Delete Account</MenuItem>
            <MenuItem value={10}>Logout</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
