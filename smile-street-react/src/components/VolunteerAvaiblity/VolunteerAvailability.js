import React from 'react';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import {useState} from 'react';

import {
  makeStyles,
  Paper,
  Grid,
  Container,
  TextField,
  Button,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import PageHeading from '../PageHeading/PageHeading';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#53bd98',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#449f80',
    },

    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: '#449f80',
    },

    '& .MuiInputLabel-outlined.Mui-focused': {
      color: '#449f80',
    },
    margin: 8,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form: {
    width: '100%',
  },
  buttonColor: {
    backgroundColor: '#53bd98',
    color: 'white',
    background: '#449f80',

    '&:hover': {
      background: '#449f80',
    },
  },
}));

export default function VolunteerAvailability() {
  const initialFormState = {
    employer_name: '',
    location: '',
    numberOfDays: '',
    startDate: '',
    endDate: '',
  };
  const [info, setInfo] = useState(initialFormState);
  console.log(info);

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInfo = {
      employer_name: info.employer_name,
      location: info.location,
      numberOfDays: info.numberOfDays,
      startDate: info.startDate,
      endDate: info.endDate,
    };
    //takes the current array and reuilds and updates.
    const updateInfo = [{...info}, newInfo];
    setInfo(updateInfo);
    console.log('Your state after submission is', info);
    setInfo(initialFormState);
  };

  const classes = useStyles();
  return (
    <Container component="main">
      <Paper className={classes.paper}>
        <Container maxWidth="xs">
          <PageHeading heading="Volunteer Availability" />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                margin="normal"
                id="title"
                //style={{ margin: 8 }}
                fullWidth
                autoFocus
                name="employer_name"
                label="Employers Name"
                variant="outlined"
                value={info.employer_name}
                onChange={handleChange}
                className={classes.root}
              />
            </Grid>

            <InputLabel>We will match you based on your locations</InputLabel>
            <InputLabel>Select your primary match location</InputLabel>
            <Select
              label
              fullWidth
              margin="normal"
              id=""
              style={{margin: 8}}
              fullWidth
              autoFocus
              variant="outlined"
              className={classes.root}
              name="location"
              value={info.location}
              onChange={handleChange}
            >
              <MenuItem>
                <em>primary match location</em>
              </MenuItem>

              <MenuItem value={'Bath'}>Bath</MenuItem>
              <MenuItem value={'Birmingham'}>Birmingham</MenuItem>
              <MenuItem value={'Bradford'}>Bradford</MenuItem>
              <MenuItem value={'Brighton'}>Brighton & Hove</MenuItem>
              <MenuItem value={'Bristol'}>Bristol</MenuItem>
              <MenuItem value={'Cambridge'}>Cambridge</MenuItem>
              <MenuItem value={'Canterbury'}>Canterbury</MenuItem>
              <MenuItem value={'Carlise'}>Carlisle</MenuItem>
              <MenuItem value={'Chemlsford'}>Chelmsford</MenuItem>
              <MenuItem value={'Chester'}>Chester</MenuItem>
              <MenuItem value={'Chichester'}>Chichester</MenuItem>
              <MenuItem value={'Coventry'}>Coventry</MenuItem>
              <MenuItem value={'Derby'}>Derby</MenuItem>
              <MenuItem value={'Durham'}>Durham</MenuItem>
              <MenuItem value={'Exeter'}>Exeter</MenuItem>
              <MenuItem value={'Gloucester'}>Gloucester</MenuItem>
              <MenuItem value={'Hereford'}>Hereford</MenuItem>
              <MenuItem value={'Kingston'}>Kingston</MenuItem>
              <MenuItem value={'Lancaster'}>Lancaster</MenuItem>
              <MenuItem value={'Leeds'}>Leeds</MenuItem>
              <MenuItem value={'Leicester'}>Leicester</MenuItem>
              <MenuItem value={'Lichfield'}>Lichfield</MenuItem>
              <MenuItem value={'Lincoln'}>Lincoln</MenuItem>
              <MenuItem value={'Liverpool'}>Liverpool</MenuItem>
              <MenuItem value={'City_of_London'}>(City of) London</MenuItem>
              <MenuItem value={'Manchester'}>Manchester</MenuItem>
              <MenuItem value={'Newcastle'}>Newcastle</MenuItem>
              <MenuItem value={'Norwich'}>Norwich</MenuItem>
              <MenuItem value={'Nottingham'}>Nottingham</MenuItem>
              <MenuItem value={'Oxford'}>Oxford</MenuItem>
              <MenuItem value={'Thirty'}>Thirty</MenuItem>
              <MenuItem value={'Peterborough'}>Peterborough</MenuItem>
              <MenuItem value={'Plymouth'}>Plymouth</MenuItem>
              <MenuItem value={'Portsmouth'}>Portsmouth</MenuItem>
              <MenuItem value={'Preston'}>Preston</MenuItem>
              <MenuItem value={'Rippon'}>Rippon</MenuItem>
              <MenuItem value={'Salford'}>Salford</MenuItem>
              <MenuItem value={'Salisbury'}>Salisbury</MenuItem>
              <MenuItem value={'Sheffield'}>Sheffield</MenuItem>
              <MenuItem value={'Southampton'}>Southampton</MenuItem>
              <MenuItem value={'St_Albans'}>St Albans</MenuItem>
              <MenuItem value={'Stoke-On-Trent'}>Stoke-on-Trent</MenuItem>
              <MenuItem value={'Sunderland'}>Sunderland</MenuItem>
              <MenuItem value={'Truro'}>Truro</MenuItem>
              <MenuItem value={'Wakefield'}>Wakefield</MenuItem>
              <MenuItem value={'Well'}>Wells</MenuItem>
              <MenuItem value={'City_of_Westminster'}>
                (City of) Westminster
              </MenuItem>
              <MenuItem value={'Winchester'}>Winchester</MenuItem>
              <MenuItem value={'Wolverhampton'}>Wolverhampton</MenuItem>
              <MenuItem value={'Worcester'}>Worcester</MenuItem>
              <MenuItem value={'York'}>York</MenuItem>
            </Select>

            <InputLabel>Please select no. of days available</InputLabel>
            <Select
              label=""
              fullWidth
              margin="normal"
              id=""
              style={{margin: 8}}
              autoFocus
              variant="outlined"
              className={classes.root}
              name="numberOfDays"
              onChange={handleChange}
            >
              <MenuItem>
                <em>None</em>
              </MenuItem>

              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>

            <InputLabel>
              Between which dates would you like to use your available days/ see
              volunteering opportunities
            </InputLabel>

            <Grid item xs={8}>
              <TextField
                margin="normal"
                fullWidth
                autoFocus
                value={info.startDate}
                // variant="outlined"
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

            <Grid item xs={8}>
              <TextField
                margin="normal"
                fullWidth
                autoFocus
                id="date"
                label="End Date"
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

            <Grid item xs={4}>
              <Button
                variant="contained"
                className={classes.buttonColor}
                style={{margin: 12}}
              >
                Add Another
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                className={classes.buttonColor}
                onClick={handleSubmit}
              >
                Add Interests
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
