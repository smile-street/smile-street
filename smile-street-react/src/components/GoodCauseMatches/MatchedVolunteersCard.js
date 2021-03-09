import React, { useState } from 'react';
import {
  Button,
  Container,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
  },
  buttonColor: {
    backgroundColor: '#53bd98',
    color: 'white',
    background: '#449f80',
    '&:hover': {
      background: '#449f80',
    },
  },
}));

export default function MatchVolunteersCard(props) {
  const classes = useStyles();

  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = () => setOpenDialog(false);
  const reachOut = () => setOpenDialog(true);



  return (
    <Container>
      <Card className={classes.root}>
        <CardActionArea onClick={() => reachOut()}>
          <CardContent>
            <Typography variant="h6" component="h3">{props.volunteer.name}</Typography>
            <List>
              <div>
                <ListItem>
                  <ListItemText primary={props.volunteer.interest} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary={props.volunteer.skill} />
                </ListItem>
              </div>
            </List>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="Contact info title"
        aria-describedby="Contact info details"
      >
        <DialogTitle id="Contact info title">{`Contact information for ${props.volunteer.name}`}</DialogTitle>
        <DialogContent id="Contact info details" dividers>
          <Typography gutterBottom>
            {`Number: ${props.volunteer.phone}`}
          </Typography>
          <Typography gutterBottom>
            {`email: ${props.volunteer.email}`}
          </Typography>
          <Typography gutterBottom>
            {`${props.volunteer.name} is interested in ${props.volunteer.interest}, and is skilled in ${props.volunteer.skill}`}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} className={classes.buttonColor}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
