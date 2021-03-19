import React from 'react';
import {useState} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {
  Paper,
  Grid,
  Container,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from '@material-ui/core';
import PageHeading from '../PageHeading/PageHeading';
import Validation from './Validation';
import locations from './locations.json';
import useStyle from '../Style/Style';

export default function VolunteerAvailability() {
  const classes = useStyle();
  const history = useHistory();
  const [errors, setErrors] = useState({Validation});
  const [info, setInfo] = useState({
      employer_name: '',
      location: '',
      numberOfDays: '',
      startDate: '',
      endDate: '',
  });

  const handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setInfo({...info, [e.target.name]: e.target.value,});
  };

  const handleSubmit = (e) => {
    setErrors(Validation(info));
    e.preventDefault();
    const updateInfo = [{...info}, 
      {
      employer_name: info.employer_name,
      location: info.location,
      numberOfDays: info.numberOfDays,
      startDate: info.startDate,
      endDate: info.endDate,
      }
    ];
    setInfo(updateInfo);
    console.log('Your state after submission is', info); 
    history.push({pathname: '/VolunteerInterests'});
  };

  return (
    <Container component="main">
      <Paper className={classes.paper}>
        <Container maxWidth="xs">
          <PageHeading heading="Volunteer Availability" />

          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                margin="normal"
                fullWidth
                autoFocus
                name="employer_name"
                label="Employers Name"
                variant="outlined"
                value={info.employer_name}
                onChange={handleChange}
                className={classes.root}
              />
              {errors.employer_name}
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControl variant="outlined" fullWidth>  
                <InputLabel id="location-label">Select your location</InputLabel>
                <Select
                  labelId="location-label"
                  label="Select your location"
                  
                  id="location"
                  name='location'
                  style={{margin: 8}}
                  className={classes.root}
                  value={info.location}
                  onChange={handleChange}
                >
                  {locations.map(location => {
                    return(
                      <MenuItem value={location.name}>{location.name}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputLabel>
                How many days are you available?
              </InputLabel>
              <Select
                label="Available days"
                fullWidth
                id="numberOfDays"
                style={{margin: 8}}
                variant="outlined"
                className={classes.root}
                name="numberOfDays"
                onChange={handleChange}
                value={info.numberOfDays}
              >
                <MenuItem value={'1'}>1</MenuItem>
                <MenuItem value={'2'}>2</MenuItem>
                <MenuItem value={'3'}>3</MenuItem>
                <MenuItem value={'4'}>4</MenuItem>
                <MenuItem value={'5'}>5</MenuItem>
                <MenuItem value={'6'}>6</MenuItem>
                <MenuItem value={'7'}>7</MenuItem>
                <MenuItem value={'8'}>8</MenuItem>
                <MenuItem value={'9'}>9</MenuItem>
                <MenuItem value={'10'}>10</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputLabel>
                Select your available dates
              </InputLabel>
              <TextField
                margin="normal"
                fullWidth
                autoFocus
                value={info.startDate}
                variant="outlined"
                id="date"
                label="Start Data"
                type="date"
                defaultValue="2017-05-24"
                className={classes.root}
                name="startDate"
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                margin="normal"
                fullWidth
                autoFocus
                id="date"
                label="End Date"
                variant="outlined"
                type="date"
                defaultValue="2017-05-24"
                className={classes.root}
                name="endDate"
                value={info.endDate}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                className={classes.button}
                onClick={handleSubmit}
              >
                Add Skills
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
