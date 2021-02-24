import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Select,
  FormControl,
  MenuItem,
  Grid,
  InputLabel,
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

export default function GoodCauseProfileButton() {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        {/* <Paper className={classes.paper}> */}
        <FormControl variant="filled" className={classes.formElementSize}>
          <InputLabel id="demo-simple-select-filled-label" sm={6}>
            Account
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
          >
            <MenuItem value="">
              <em>Signed in as User</em>
            </MenuItem>
            <MenuItem value={10}>Edit Opportunities</MenuItem>
            <MenuItem value={10}>Edit Profile</MenuItem>
            <MenuItem value={10}>Delete Account</MenuItem>
          </Select>
        </FormControl>
        {/* </Paper> */}
      </Grid>
    </Grid>
  );
}
