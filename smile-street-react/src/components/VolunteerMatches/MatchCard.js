import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

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
    background: '#449f80',

    '&:hover': {
      background: '#449f80',
    },
  },
  acceptedItem: {
    backgroundColor: 'red',
  },
}));

const MatchCard = ({id, GoodCause, Description, Dates, accepted}) => {
  const classes = useStyles();
  const handleAccepeted = () => {
    console.log(id);
  };
  const handleRejected = () => {
    console.log(id);
  };

  return (
    <Grid item xs={12} sm={4}>
      {
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {GoodCause}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {Description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.buttonColor}
              onClick={handleRejected}
            >
              Yes Please
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.buttonColor}
              onClick={handleAccepeted}
            >
              No Thankyou
            </Button>
          </CardActions>
        </Card>
      }
    </Grid>
  );
};
export default MatchCard;
