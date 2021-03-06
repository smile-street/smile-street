import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Paper, Grid, Container } from "@material-ui/core";
import AutoCompleteTag from "./AutoCompleteTag";
import MaterialUIDatePickers from "./DatePickerStarting";
import MaterialUIDatePickersEnding from "./DatePickerEnding";

const GoodCauseOpportunity = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#53bd98",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#449f80",
      },

      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "#449f80",
      },

      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "#449f80",
      },
      margin: 8,
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
    textField: {
      borderWidth: "1px",
      borderColor: " #449f80 !important",
    },
  }));

  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [opportunities, setOpportunities] = useState([])
  // const [skills, setSkills] = useState('');
  // const [date, setDate] = useState('');
  // const [dates, setDates] = useState([]);

  function addOpportunity() {
    const opportunity = {
      "title": title,
      "description": description,
    }
    const newOpportunities =  opportunities.concat(opportunity)
    setOpportunities(newOpportunities)
    setTitle('')
    setDescription('')
  }

  function handleDone(){
    if (!opportunities.length) {
      console.log('you must add at least one opportunity?')
    }
    else { console.log(opportunities) }
  }

  return (
    <Container>
      <form>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  // margin="normal"
                  id="title"
                  label="Opportunity title"
                  name="title"
                  autoFocus
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  style={{ width: "60%" }}
                  className={classes.root}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="description"
                  label="Brief description of the opportunity"
                  multiline
                  rows={6}
                  variant="outlined"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  style={{ width: "60%" }}
                  className={classes.root}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <AutoCompleteTag fullWidth />
              </Grid>
              <Grid item xs={12} sm={12}>
                <MaterialUIDatePickers />
              </Grid>
              <Grid item xs={12} sm={12}>
                <MaterialUIDatePickersEnding />
              </Grid>

              <Grid item xs={12} sm={12}>
                <Button 
                  variant="contained" 
                  className={classes.buttonColor}
                  onClick={addOpportunity}
                >
                  Add Opportunity
                </Button>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button 
                  variant="contained" 
                  className={classes.buttonColor}
                  onClick={handleDone}
                >
                  Done
                </Button>

              </Grid>
            </Grid>
          </Paper>
        </div>
      </form>
    </Container>
  );
};

export default GoodCauseOpportunity;
