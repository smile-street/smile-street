import React from 'react';
import {Grid, Typography} from '@material-ui/core';

import {SelectAutoComplete} from '../FormFields/index';
export default function VolunteerInterests(props) {
  const {
    formField: {selectSkills},
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <SelectAutoComplete
            name={selectSkills.name}
            label={selectSkills.label}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
