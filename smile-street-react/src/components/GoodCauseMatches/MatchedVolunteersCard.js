import React from "react";
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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
    background: "#449f80",

    "&:hover": {
      background: "#449f80",
    },
  },
}));
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function MatchVolunteersCard() {
  const classes = useStyles();
  return (
    <Container>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2"></Typography>

            <List component="nav" aria-label="secondary mailbox folders">
              <ListItemLink href="#simple-list">
                <ListItemText primary="Name" />
              </ListItemLink>
              <Divider />
              <ListItemLink href="#simple-list">
                <ListItemText primary="Skills" />
              </ListItemLink>
              <Divider />
              <ListItemLink href="#simple-list">
                <ListItemText primary="Availability" />
              </ListItemLink>
            </List>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.buttonColor}
          >
            Reach Out
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
