import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
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
  buttonColor: {
    backgroundColor: "#53bd98",
    color: "white",
  },
}));

export default function MatchCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Match name
          </Typography>
          <ul>
            <li>Name</li>
            <li>Location</li>
            <li>Date</li>
            <li>Description</li>
          </ul>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.buttonColor}
        >
          Yes, Please
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.buttonColor}
        >
          No, Thanks
        </Button>
      </CardActions>
    </Card>
  );
}
