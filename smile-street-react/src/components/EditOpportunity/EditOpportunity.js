import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
    Paper,
    Container,
    Grid,
    Button,
    Menu,
    MenuItem,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContentText,
    DialogContent,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PageHeading from '../PageHeading/PageHeading';
import useStyle from '../Style/Style';

export default function EditOpportunity() {
    const classes = useStyle();
    const history = useHistory();

    return (
        <Container component="main">
            <Paper className={classes.paper}>
                <Container maxWidth="xs">
                    <PageHeading heading="Edit Opportunities" />
                        <h1>Hello</h1>
                </Container>
            </ Paper>
        </ Container>
    )}