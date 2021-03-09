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

export default function MatchVolunteersCard(props) {
  const classes = useStyles();
  console.log(props)

  return (
    <Container>
      <Card className={classes.root}>
        <CardActionArea onClick={()=>props.reachOut(props.name)}>
          <CardContent>
            <Typography variant="h6" component="h3">{props.name}</Typography>
            <List>
              <div>
                <ListItem>
                  <ListItemText primary={props.interest} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary={props.skill} />
                </ListItem>
              </div>
            </List>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
