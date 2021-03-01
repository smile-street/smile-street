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

export default function MatchCard() {
  const classes = useStyles();
  return (
    <Container>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2"></Typography>

            <List component="nav" aria-label="secondary mailbox folders">
              <ListItem>
                <ListItemText primary="Good Cause" />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Description of opportunity" />
              </ListItem>
              <Divider />
              <ListItem href="#simple-list">
                <ListItemText primary="Dates" />
              </ListItem>
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
            Yes Please
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.buttonColor}
          >
            No Thankyou
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
