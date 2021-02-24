import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, 
        Container, 
        Card, 
        CardActionArea, 
        CardActions, 
        CardContent, 
        Typography, 
        FormControlLabel, 
        RadioGroup, 
        Checkbox 
      } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  box: {
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
      <Grid container spacing={3}>
        <Grid item>
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

        </Grid>
      </Grid>
    </Container>
  );
};

export default InterestSquares;
