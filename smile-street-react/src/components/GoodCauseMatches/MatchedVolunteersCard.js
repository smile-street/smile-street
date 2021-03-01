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
import testData from "../../../src/testData.json";

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

export default function MatchVolunteersCard({ name, interest, availability }) {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2"></Typography>

            <List component="nav" aria-label="secondary mailbox folders">
              <div>
                <ListItem>
                  <ListItemText primary={name} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary={interest} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary={availability} />
                </ListItem>
              </div>
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
