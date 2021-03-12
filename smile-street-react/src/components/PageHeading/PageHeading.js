import React from 'react';
import {Typography, Paper} from '@material-ui/core';
import useStyle from '../Style/Style';

export default function PageHeading(props) {
  const classes = useStyle();
  return (
    <Typography component="h1" variant="h5" gutterBottom className={classes.h1}>
      {props.heading}
    </Typography>
  );
}
