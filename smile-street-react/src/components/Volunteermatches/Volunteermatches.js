import React from "react";
import {
  Paper,
  Button,
  Grid,
  Container,
  Card,
  MenuItem,
  Menu,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./VolunteermatchesYes-No-Button.css";
import MenuList from "@material-ui/core/MenuList";
import MatchCard from "./MatchCard.js";

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
}));

const Volunteermatches = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <MatchCard />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {/* <MatchCard /> */}
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {/* <MatchCard /> */}
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {/* <MatchCard /> */}
        </Grid>
      </Grid>
      <Button aria-controls="simple-menu" aria-haspopup="true">
        Profile
      </Button>
      <Menu id="simple-menu" keepMounted>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Edit Dates</MenuItem>
        <MenuItem>Location</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Interests</MenuItem>
        <MenuItem>Delete Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Container>
  );
};

export default Volunteermatches;
