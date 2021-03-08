import React from 'react';
import {Grid, Typography} from '@material-ui/core';

import {FormikAutoComplete} from '../FormFields/index';
import {Field} from 'formik';
const top100Films = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Godfather: Part II',
  'The Dark Knight',

  '12 Angry Men',
  "Schindler's List",
];

export default function VolunteerInterests(props) {
  const {
    formField: {selectSkills},
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Skills and Interests
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Field
            name="owner"
            component={FormikAutoComplete}
            label="Owner"
            options={top100Films}
            textFieldProps={{
              fullWidth: true,
              margin: 'normal',
              variant: 'outlined',
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
