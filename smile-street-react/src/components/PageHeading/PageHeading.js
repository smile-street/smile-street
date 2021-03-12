import React from 'react';
import {Typography, Paper, Grid, Container} from '@material-ui/core';
import useStyle from '../Style/Style';

export default function PageHeading(props) {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <Typography
        component="h1"
        variant="h5"
        gutterBottom
        className={classes.h1}
      >
        {props.heading}
      </Typography>
    </Container>
  );
}
