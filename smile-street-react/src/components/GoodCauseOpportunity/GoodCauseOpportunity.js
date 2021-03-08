import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Paper, Grid, Container } from "@material-ui/core";
import AutoCompleteTag from "./AutoCompleteTag";
import PageHeading from '../PageHeading/PageHeading';
import DatePicker from "./DatePicker";

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
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [skills, setSkills] = useState('');

  function addOpportunity() {
    const opportunity = {
      "title": title,
      "description": description,
      "date" : {
        "start": startDate,
        "end": endDate,
      },
      "skills": skills
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
    <Container component="main" className={classes.root}>
      <Paper className={classes.paper}>
        <Container maxWidth="xs">
          <PageHeading heading="Add Opportunity" />
            <Grid container spacing={3}>
                <TextField
                  variant="outlined"
                  id="title"
                  label="Opportunity title"
                  name="title"
                  autoFocus
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  className={classes.root}
                />
                <TextField
                  id="description"
                  label="Brief description of the opportunity"
                  multiline
                  rows={6}
                  variant="outlined"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  className={classes.root}
                />

              <Grid item xs={12} sm={12}>
                <AutoCompleteTag fullWidth setSkills={setSkills} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePicker 
                  id={"Start Date"}
                  setDate={setStartDate}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePicker 
                  id={"End Date"}
                  setDate={setEndDate}
                />
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
                  Submit
                </Button>

              </Grid>
            </Grid>
          </Container>
        </Paper>
    </Container>
  );
};

export default GoodCauseOpportunity;
