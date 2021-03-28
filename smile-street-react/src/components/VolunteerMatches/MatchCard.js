import React, {useState} from 'react';
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
  opportunityname,
  description,
  date,
  accepted,
  handleAgree,
  handleAccepted,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openYes, setOpenYes] = useState(false);
  const opportunityDate = new Date(date);

  const handleClickOpenNo = () => {
    setOpen(true);
  };
  const handleClickOpenYes = () => {
    setOpenYes(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseYes = () => {
    setOpenYes(false);
  };
  const deleteItem = () => {
    handleAgree(id);
    handleClose();
  };
  const acceptItem = () => {
    handleAccepted(id);
    handleCloseYes();
  };

  return (
    <Grid item xs={12} sm={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" component="h2">
              {opportunityname}
            </Typography>
            <Typography gutterBottom color="textSecondary">
              {opportunityDate.toLocaleDateString("en-GB")}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
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
              onClick={handleClickOpenYes}
            >
              Yes, Please
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.buttonColor}
              onClick={handleClickOpenNo}
            >
              No, Thanks
            </Button>
          </CardActions>
      </Card>

      <Dialog
        open={open}
        onClose={handleCloseYes}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Are you sure you want to reject this opportunity?'}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} className={classes.buttonColor}>
            I changed my mind
          </Button>
          <Button onClick={() => deleteItem()} className={classes.buttonColor}>
            Yes, Delete it
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openYes}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-accept">
          {'Thank you for your interest!'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {'The Good Cause has been notified and they will be in touch soon.'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => acceptItem()} className={classes.buttonColor}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
export default MatchCard;
