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

import GoodCauseProfileButton from "./GoodCauseProfileButton";
import MatchedVolunteersCard from "./MatchedVolunteersCard";

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

const GoodCauseMatches = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.root}>
      <Grid container spacing={1}>

<GoodCauseProfileButton/>

      </Grid>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <MatchedVolunteersCard />
          </Grid>

          <Grid item xs={4}>
            <MatchedVolunteersCard />
          </Grid>

          <Grid item xs={4}>
            <MatchedVolunteersCard />
          </Grid>

          <Grid item xs={4}>
            <MatchedVolunteersCard />
          </Grid>
          <Grid item xs={4}>
            <MatchedVolunteersCard />
          </Grid>
          <Grid item xs={4}>
            <MatchedVolunteersCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default GoodCauseMatches;
