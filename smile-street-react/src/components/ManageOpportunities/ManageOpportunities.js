import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Paper,
    Container,
    Grid,
    Button,
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
    AccordionActions,
    Divider,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    Snackbar
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PageHeading from '../PageHeading/PageHeading';
import useStyle from '../Style/Style';

export default function ManageOpportunities() {
    const classes = useStyle();
    const history = useHistory();
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const opportunities = [
        {id: "123455",  // these details should be fetched in EditOpportunity with a get handelr using the oppotunity_id
        title: "Food Drive",
        description: "A day of gathering donations from the local markets in support of something positive",
        location: "Manchester",
        opportunitydate: "Sunday, April 22, 2021",
        skills: [{title: "Communications"}, {title: "Marketing"}]},
        {id: "234567",
        title: "Wooly Hat Knit-a-thon", 
        description: "Lorem ipsum dolorm sin amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},
        {id: "2345678",
        title: "Three Legged Race day",
        description: "Lorem ipsum dolorm sin amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}
    ];

    const handleDialogCancel = () => {
        setDeleteDialog(false);
    };

    const handleDialogDelete = () => {
        setDeleteConfirmation(true);
        setDeleteDialog(false);
        // Handler to delete this opportunity.
    };

    const handleToastClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setDeleteConfirmation(false);
    };

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    return (
        <Container component="main">
            <Paper className={classes.paper}>
                <Container maxWidth="xs">
                    <PageHeading heading="Edit Opportunities" />
                    <div className={classes.root}>
                        {opportunities.map(opportunity => (
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="Opportunity summary"
                                id="Summary"
                                >
                                <Typography>{opportunity.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    {opportunity.description}
                                </Typography>
                                </AccordionDetails>
                                <Divider />
                                <Typography gutterBottom color="textSecondary">{opportunity.opportunitydate}</Typography>
                                <AccordionActions>
                                    <Button 
                                        size="small" 
                                        className={classes.button}
                                        onClick={()=> history.push({
                                            pathname: '/EditOpportunity', 
                                            state: opportunity
                                        })}
                                    >
                                        Edit
                                    </Button>
                                    <Button 
                                    size="small" 
                                    color="secondary"
                                    onClick={()=> {setDeleteDialog(true)}}
                                    >
                                        Delete
                                    </Button>
                                </AccordionActions>
                            </Accordion>
                        ))}
                    </div>
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
            <Dialog
                open={deleteDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {'Are you sure you want to delete this account?'}
                </DialogTitle>
                <DialogActions>
                <Button onClick={handleDialogCancel} className={classes.button}>
                    I changed my mind
                </Button>
                <Button onClick={handleDialogDelete} color="secondary">
                    Yes, delete it
                </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={deleteConfirmation}
                autoHideDuration={3000}
                onClose={handleToastClose}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            >
                <Alert onClose={handleToastClose} severity="success">
                    Opportunity successfully deleted!
                </Alert>
            </Snackbar>
        </ Container>
    )}