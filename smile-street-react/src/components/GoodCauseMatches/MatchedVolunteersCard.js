import react from "react";
import {
  Paper,
  Button,
  Grid,
  Container,
  Card,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MenuList from "@material-ui/core/MenuList";

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
  },
}));

function MatchVolunteersCard() {
  const classes = useStyles();
  return (
    <Container>
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          
          </Typography>
          <ul>
            <li>Volunteer Name</li>
            <li>Skills</li>
            <li>Availability</li>
         
          </ul>
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
export default MatchVolunteersCard;
