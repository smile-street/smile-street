import React, {useState} from 'react';
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
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

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

export default function MatchVolunteersCard({volunteer}) {
  const classes = useStyles();

  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = () => setOpenDialog(false);
  const reachOut = () => setOpenDialog(true);

  return (
    <Container>
      <Card className={classes.root}>
        <CardActionArea onClick={() => reachOut()}>
          <CardContent>
            <Typography variant="h6" component="h3">
              {volunteer.name}
            </Typography>
            <List>
              <div>
                <ListItem>
                  <ListItemText primary={volunteer.interest} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary={volunteer.skill} />
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
        <DialogTitle id="Contact info title">{`Contact information for ${volunteer.name}`}</DialogTitle>
        <DialogContent id="Contact info details" dividers>
          <Typography gutterBottom>{`Number: ${volunteer.phone}`}</Typography>
          <Typography gutterBottom>{`email: ${volunteer.email}`}</Typography>
          <Typography gutterBottom>
            {`${volunteer.name} is interested in ${volunteer.interest}, and is skilled in ${volunteer.skill}`}
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
