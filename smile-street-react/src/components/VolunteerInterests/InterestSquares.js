import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, 
        Card, 
        CardActionArea, 
        CardContent, 
        CardMedia, 
        Typography
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
    "&:hover": {
      background: "#449f80",
    },
  },
  selected: {
    backgroundColor: "#449f80",
  },
}));

const InterestSquares = (props) => {
  const classes = useStyles();
  return (
      <Grid container spacing={3}>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea className={classes.root} 
                            onClick={() => props.selectInterest(props.id)}>
            <CardMedia
              // className={classes.media}
              component="img"
              height="100%"
              image={props.image}
              title={props.skill}
              className={props.selected ? "selected" : "unselected"}
            />
              <CardContent>
                <Typography variant="h6">
                  {props.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
  );
};

export default InterestSquares;
