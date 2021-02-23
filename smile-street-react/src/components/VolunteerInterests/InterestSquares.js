import React from "react";
import { Paper, Button, Grid, Container, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Checkbox } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

box:{
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
    "&:hover": {
      background: "#449f80",
    },
  },
}));

const InterestSquares = () => {
  const classes = useStyles();
  return (
    <Container>
      
       
          <Card className={classes.root}>
            <CardActionArea className={classes.root}>
              <CardContent >
                <Typography gutterBottom variant="h5" component="h2">
                  Gardening
                </Typography>
              </CardContent>
            
            </CardActionArea>
            <CardActions>
             
              <RadioGroup>
                <FormControlLabel
                  value="cBOX"
                  control={<Checkbox />}
                  //label=""
                />
              </RadioGroup>
            </CardActions>
          </Card>
      
        
  
    </Container>
  );
};
export default InterestSquares;
