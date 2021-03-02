import React from 'react';
import {
  Button,
  Container,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
} from '@material-ui/core';
import PageHeading from '../PageHeading/PageHeading';
import Profilebutton from './Profilebutton';
import {makeStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import goodCauseDisplayDetailsMock from '../../goodCauseDisplayDetailsMock.json';

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

export default function MatchCard({GoodCause, Description, Dates}) {
  const classes = useStyles();
  const [openYesCard, setOpenYesCard] = React.useState(false);
  const [openNoCard, setOpenNoCard] = React.useState(false);
  const [accepted, setAccepted] = React.useState(false);
  const [data, setData] = React.useState(goodCauseDisplayDetailsMock);

  const handleClickYes = () => {
    setOpenYesCard(true);
  };
  const handleClickNo = () => {
    setOpenNoCard(true);
    setAccepted(false);
  };
  const handleCloseYes = () => {
    setOpenYesCard(false);
  };

  const handleCloseNo = () => {
    setOpenNoCard(false);
  };

  return (
    <Container>
      <Paper className={classes.paper}>
        <PageHeading heading="Here is the list of available volunteer  matches" />
        <Profilebutton />
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {data.map((item) => {
            return (
              <Grid item xs={12} sm={4}>
                {
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.GoodCause}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.Description}
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
                        onClick={handleClickYes}
                      >
                        Yes Please
                      </Button>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.buttonColor}
                        onClick={handleClickNo}
                      >
                        No Thankyou
                      </Button>
                    </CardActions>
                  </Card>
                }
              </Grid>
            );
          })}
          <Dialog
            open={openYesCard}
            onClose={handleClickYes}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {'Thank you for accepting. Good Cause will reach out soon.'}
            </DialogTitle>

            <DialogActions>
              <Button onClick={handleCloseYes} color="primary" autoFocus>
                OK
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={openNoCard}
            onClose={handleCloseNo}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {'No worries.We will try for another match'}
            </DialogTitle>

            <DialogActions>
              <Button onClick={handleCloseNo} color="primary" autoFocus>
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Paper>
    </Container>
  );
}
