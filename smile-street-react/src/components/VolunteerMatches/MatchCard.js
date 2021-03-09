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
  handleAccepted,
}) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpenNo = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteItem = () => {
    handleAgree(id);
    handleClose();
  };
  const acceptItem = () => {
    handleAccepted(id);
    handleClose();
  };
  console.log(accepted);

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
          {accepted === false && (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.buttonColor}
              onClick={() => acceptItem()}
            >
              Yes Please
            </Button>
          )}
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
          <Button onClick={handleClose} className={classes.buttonColor}>
            Ok, I am not sure
          </Button>
          <Button onClick={() => deleteItem()} className={classes.buttonColor}>
            Yes,Delete it
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
export default MatchCard;
