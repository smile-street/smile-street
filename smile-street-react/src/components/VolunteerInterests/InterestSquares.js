import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
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
  buttonColor: {
    backgroundColor: '#53bd98',
    color: 'white',
    '&:hover': {
      background: '#449f80',
    },
  },
  // media: {
  //   // backgroundColor: "#449f80",
  //   backgroundColor: props => props.selected ? "#449f80" : null,
  // },
}));

const InterestSquares = (props) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Card className={classes.root}>
          <CardActionArea
            className={classes.root}
            onClick={() => props.selectInterest(props.id)}
          >
            <CardMedia
              component="img"
              image={props.image}
              title={props.skill}
              style={{backgroundColor: props.selected ? '#449f80' : null}}
            />
            <CardContent>
              <Typography variant="h6">{props.title}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default InterestSquares;
