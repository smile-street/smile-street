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
                    <Grid item xs={12} sm={12}>
                        <Button
                            variant="contained"
                            className={classes.button}
                            onClick={()=> history.push({pathname: '/GoodCauseMatches'})}
                        >
                            Back to Matches
                        </Button>
                    </Grid>
                </Container>
            </ Paper>
        </ Container>
    )}