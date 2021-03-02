import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Grid,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContentText,
  DialogContent,
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

const MatchCard = ({
  id,
  GoodCause,
  Description,
  Dates,
  accepted,
  deleteMatchCard,
  handleAgree,
}) => {
  const classes = useStyles();

  const handleAccepted = () => {
    console.log(id);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpenNo = () => {
    setOpen(true);
  };
  const handleClickOpenYes = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid item xs={12} sm={4}>
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
            onClick={handleAccepted}
          >
            Yes Please
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.buttonColor}
            onClick={handleClickOpenNo}
          >
            No Thankyou
          </Button>
        </CardActions>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Are you sure you want to reject this opportunity?'}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok, I am not sure
          </Button>
          <Button onClick={() => handleAgree(id)} color="primary" autoFocus>
            Yes,Delete it
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
export default MatchCard;
