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
import DatePicker from '../DatePicker/DatePicker';
import Validation from './Validation';
import locations from './locations.json';
import useStyle from '../Style/Style';
import axios from 'axios';

export default function VolunteerAvailability() {
  const classes = useStyle();
  const initialFormState = {
    employername: '',
    location: '',
    numberofdays: '',
    startdate: '',
    enddate: '',
  };
  const history = useHistory();

  const userRole = useLocation().state.userRole;
  const volunteer_id = useLocation().state.userId;
  const [errors, setErrors] = useState({Validation});
  const [info, setInfo] = useState(initialFormState);
  const [startdate, setStartDate] = useState('');
  const [enddate, setEndDate] = useState('');
  const handleChange = (e) => {
    setInfo({...info, [e.target.name]: e.target.value});
  };
  console.log(volunteer_id);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const addAvailability = await axios
      .put(
        `https://2itobgmiv3.execute-api.eu-west-2.amazonaws.com/dev/VolunteerAvailability/${volunteer_id}`,
        {
          employername: info.employername,
          location: info.location,
          numberofdays: info.numberofdays,
          startDate: info.startDate,
          endDate: info.endDate,
        }
      )
      .then((response) => {
        console.log('This is the new volunteer id:' + response.data);
        const volunteerId = response.data;
        history.push({
          pathname: '/VolunteerAvailability',
          state: {userId: volunteerId, userRole: userRole},
        });
      })
      .catch((error) => console.log(error));
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
                name="employername"
                label="Employers Name"
                variant="outlined"
                value={info.employername}
                // error={info.employer_name === ""}
                // helperText={info.employer_name === "" ? 'This field is required' : ' '}
                onChange={handleChange}
                className={classes.root}
              />
              {errors.employername}
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="location-label">
                  Select your location
                </InputLabel>
                <Select
                  labelId="location-label"
                  label="Select your location"
                  id="location"
                  name="location"
                  style={{margin: 8}}
                  className={classes.root}
                  value={info.location}
                  onChange={handleChange}
                >
                  {locations.map((location) => {
                    return (
                      <MenuItem value={location.name}>{location.name}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputLabel>How many days are you available?</InputLabel>
              <Select
                label="Available days"
                fullWidth
                id="numberofdays"
                style={{margin: 8}}
                variant="outlined"
                className={classes.root}
                name="numberofdays"
                onChange={handleChange}
                value={info.numberofdays}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => {
                  return <MenuItem value={number}>{number}</MenuItem>;
                })}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                id={'Start Date'}
                setDate={setStartDate}
                value={startdate}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <DatePicker
                id={'End Date'}
                setDate={setEndDate}
                value={enddate}
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
