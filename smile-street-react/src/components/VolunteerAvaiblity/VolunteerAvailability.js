import React from 'react';
import {Grid, Typography} from '@material-ui/core';

import {InputField, SelectField, DatePickerField} from '../FormFields/index';

export default function VolunteerAvailability(props) {
  const {
    formField: {employerName, matchLocation, noOfDays, availableDates},
  } = props;
  const cities = [
    {
      value: undefined,
      label: 'None',
    },
    {
      value: '1',
      label: 'New York',
    },
    {
      value: '2',
      label: 'Chicago',
    },
    {
      value: '3',
      label: 'Saigon',
    },
  ];
  const days = [
    {
      value: undefined,
      label: 'None',
    },
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
  ];
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField
            name={employerName.name}
            label={employerName.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={matchLocation.name}
            label={matchLocation.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={noOfDays.name}
            label={noOfDays.label}
            data={days}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={availableDates.name}
            label={availableDates.label}
            format="dd/mm/yy"
            minDate={new Date()}
            maxDate={new Date('2050/12/31')}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
