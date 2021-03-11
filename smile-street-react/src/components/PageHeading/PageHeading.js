
import React from 'react';
import { Typography } from '@material-ui/core';

export default function PageHeading(props) {
    return (
    <Typography component="h1" variant="h5" gutterBottom>
        { props.heading }
    </Typography>
    )
}