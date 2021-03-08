import React from 'react';
import {useFormikContext} from 'formik';
import {Typography, Grid} from '@material-ui/core';

import Registration from './Registration/Registration';
import VolunteerAvailability from './VolunteerAvaiblity/VolunteerAvailability';
import VolunteerInterests from './VolunteerInterests/VolunteerInterests';

export default function ReviewOrder() {
  const {values: formValues} = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>

      <Grid container spacing={2}>
        <Registration formValues={formValues} />
        <VolunteerAvailability formValues={formValues} />
        <VolunteerInterests formValues={formValues} />
      </Grid>
    </React.Fragment>
  );
}
