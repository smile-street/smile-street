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
import Popper from "@material-ui/core/Popper";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MenuList from "@material-ui/core/MenuList";
import MatchCard from "./MatchCard.js";
import Profilebutton from "./Profilebutton.js";

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

const VolunteerMatches = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Profilebutton />
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <MatchCard />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <MatchCard />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <MatchCard />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <MatchCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default VolunteerMatches;
