import React from 'react';
import { Paper, Button, Grid, Container, Card } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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
    "&:hover": {
      background: "#449f80",
    },
  },
}));

const VolunteermatchesYesNoButton = () => {
  const classes = useStyles();
  return (

    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Match name
          </Typography>
          <ul>
            <li>Name</li>
            <li>Location</li>
            <li>Date</li>
            <li>Description</li>
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
                  Yes, Please
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.buttonColor}
                >
                  No, Thanks
                </Button>
      </CardActions>
    </Card>
        </Grid>

        
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            Match 2
          </Paper>
        </Grid>
        </Grid>
    </Container>







    // <div className="mui-container mui--text-center">
    //   <div className="mui-panel">
    //     <legend className="mui--text-center"> My Matches</legend>
    //     <div>
    //       <button className="mui-btn mui--text-right">Edit</button>
    //       <div>

    //         <div className="mui-panel">
    //           <div className="mui--text-left mui-col-xs-6 mui-col-6">
    //             <p>Good cause name:</p>
    //             <p>Location:</p>
    //             <p>Dates:</p>
    //             <p>Description:</p>
    //           </div>
    //           <button class="mui--divider-right mui-btn mui-btn--large mui-btn--raised">
    //             Yes, Please
    //           </button>
    //           <button class="mui--divider-right mui-btn mui-btn--large mui-btn--raised">
    //             No, Thanks
    //           </button>
    //         </div>


    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default VolunteermatchesYesNoButton;
