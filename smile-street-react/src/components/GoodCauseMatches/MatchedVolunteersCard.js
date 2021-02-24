import React from "react";
import {
  Button,
  Container,
  Card,
  CardActionArea, 
  CardActions, 
  CardContent, 
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

export default function MatchVolunteersCard() {
  const classes = useStyles();
  return (
    <Container>
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          
          </Typography>
          <ul>
            <li>Volunteer Name</li>
            <li>Skills</li>
            <li>Availability</li>
         
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
          Reach Out
        </Button>
     
      </CardActions>
    </Card>
    </Container>
  );
}
