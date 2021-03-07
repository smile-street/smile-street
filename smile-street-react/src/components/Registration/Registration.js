import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {InputField} from '../FormFields/index';

export default function Registration(props) {
  const {
    formField: {
      firstName,
      lastName,
      email,
      contactNumber,
      password,
      confirmPassword,
    },
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Registration
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={contactNumber.name}
            label={contactNumber.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={password.name} label={password.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name={confirmPassword.name}
            label={confirmPassword.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
    </React.Fragment>
  );
}
