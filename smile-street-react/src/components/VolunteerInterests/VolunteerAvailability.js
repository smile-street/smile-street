import React from 'react';
import {Grid, Typography} from '@material-ui/core';

import {InputField, SelectField, DatePickerField} from '../FormFields/index';

export default function VolunteerAvailability(props) {
  const {
    formField: {employerName, matchLocation, noOfDays, availableDates},
  } = props;

  //   <MenuItem value={'Bath'}>Bath</MenuItem>
  //   <MenuItem value={'Birmingham'}>Birmingham</MenuItem>
  //   <MenuItem value={'Bradford'}>Bradford</MenuItem>
  //   <MenuItem value={'Brighton'}>Brighton & Hove</MenuItem>
  //   <MenuItem value={'Bristol'}>Bristol</MenuItem>
  //   <MenuItem value={'Cambridge'}>Cambridge</MenuItem>
  //   <MenuItem value={'Canterbury'}>Canterbury</MenuItem>
  //   <MenuItem value={'Carlise'}>Carlisle</MenuItem>
  //   <MenuItem value={'Chemlsford'}>Chelmsford</MenuItem>
  //   <MenuItem value={'Chester'}>Chester</MenuItem>
  //   <MenuItem value={'Chichester'}>Chichester</MenuItem>
  //   <MenuItem value={'Coventry'}>Coventry</MenuItem>
  //   <MenuItem value={'Derby'}>Derby</MenuItem>
  //   <MenuItem value={'Durham'}>Durham</MenuItem>
  //   <MenuItem value={'Exeter'}>Exeter</MenuItem>
  //   <MenuItem value={'Gloucester'}>Gloucester</MenuItem>
  //   <MenuItem value={'Hereford'}>Hereford</MenuItem>
  //   <MenuItem value={'Kingston'}>Kingston</MenuItem>
  //   <MenuItem value={'Lancaster'}>Lancaster</MenuItem>
  //   <MenuItem value={'Leeds'}>Leeds</MenuItem>
  //   <MenuItem value={'Leicester'}>Leicester</MenuItem>
  //   <MenuItem value={'Lichfield'}>Lichfield</MenuItem>
  //   <MenuItem value={'Lincoln'}>Lincoln</MenuItem>
  //   <MenuItem value={'Liverpool'}>Liverpool</MenuItem>
  //   <MenuItem value={'City_of_London'}>(City of) London</MenuItem>
  //   <MenuItem value={'Manchester'}>Manchester</MenuItem>
  //   <MenuItem value={'Newcastle'}>Newcastle</MenuItem>
  //   <MenuItem value={'Norwich'}>Norwich</MenuItem>
  //   <MenuItem value={'Nottingham'}>Nottingham</MenuItem>
  //   <MenuItem value={'Oxford'}>Oxford</MenuItem>
  //   <MenuItem value={'Thirty'}>Thirty</MenuItem>
  //   <MenuItem value={'Peterborough'}>Peterborough</MenuItem>
  //   <MenuItem value={'Plymouth'}>Plymouth</MenuItem>
  //   <MenuItem value={'Portsmouth'}>Portsmouth</MenuItem>
  //   <MenuItem value={'Preston'}>Preston</MenuItem>
  //   <MenuItem value={'Rippon'}>Rippon</MenuItem>
  //   <MenuItem value={'Salford'}>Salford</MenuItem>
  //   <MenuItem value={'Salisbury'}>Salisbury</MenuItem>
  //   <MenuItem value={'Sheffield'}>Sheffield</MenuItem>
  //   <MenuItem value={'Southampton'}>Southampton</MenuItem>
  //   <MenuItem value={'St_Albans'}>St Albans</MenuItem>
  //   <MenuItem value={'Stoke-On-Trent'}>Stoke-on-Trent</MenuItem>
  //   <MenuItem value={'Sunderland'}>Sunderland</MenuItem>
  //   <MenuItem value={'Truro'}>Truro</MenuItem>
  //   <MenuItem value={'Wakefield'}>Wakefield</MenuItem>
  //   <MenuItem value={'Well'}>Wells</MenuItem>
  //   <MenuItem value={'City_of_Westminster'}>
  //     (City of) Westminster
  //   </MenuItem>
  //   <MenuItem value={'Winchester'}>Winchester</MenuItem>
  //   <MenuItem value={'Wolverhampton'}>Wolverhampton</MenuItem>
  //   <MenuItem value={'Worcester'}>Worcester</MenuItem>
  //   <MenuItem value={'York'}>York</MenuItem>
  // </Select>

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
  const cities = [
    {
      value: undefined,
      label: 'None',
    },
    {
      value: 'Bath',
      label: 'Bath',
    },
    {
      value: 'Birmingham',
      label: 'Birmingham',
    },
    {
      value: 'Brighton',
      label: 'Brighton',
    },
    {
      value: 'Bristol',
      label: 'Bristol',
    },
    {
      value: 'Cambridge',
      label: 'Cambridge',
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
