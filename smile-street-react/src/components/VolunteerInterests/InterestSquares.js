import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, 
        Card, 
        CardActionArea, 
        CardActions, 
        CardContent, 
        CardMedia, 
        FormControlLabel, 
        RadioGroup, 
        Checkbox 
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
}));

const InterestSquares = (props) => {
  const classes = useStyles();
  return (
      <Grid container spacing={3}>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea className={classes.root}>
            <CardMedia
              className={classes.media}
              component="img"
              height="100%"
              image={props.image}
              title={props.skill}
            />
              <CardContent>
                  {props.title}
              </CardContent>

            </CardActionArea>
            <CardActions>
              <RadioGroup>
                <FormControlLabel
                  value="cBOX"
                  control={<Checkbox />}
                //label=""
                />
              </RadioGroup>
            </CardActions>
          </Card>

        </Grid>
      </Grid>
  );
};

export default InterestSquares;
