import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import {
    TextField,
    Button,
    Paper,
    Grid,
    Container,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    makeStyles,
} from '@material-ui/core';
import AutoCompleteTag from './AutoCompleteTag';
import PageHeading from '../PageHeading/PageHeading';
import DatePicker from '../DatePicker/DatePicker';
import locations from './locations.json';
import useStyle from '../Style/Style';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#53bd98',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#449f80',
        },

        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
            color: '#449f80',
        },

        '& .MuiInputLabel-outlined.Mui-focused': {
            color: '#449f80',
        },
        margin: 8,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    buttonColor: {
        backgroundColor: '#53bd98',
        color: 'white',
        background: '#449f80',
        '&:hover': {
            background: '#449f80',
        },
    },
    button: {
        backgroundColor: '#53bd98',
        color: 'white',
        '&:hover': {
            background: '#449f80',
        },
    },
    h1: {
        color: '#53bd98',
    },
}));

export default function EditOpportunity() {
    const classes = useStyles();
    const [opportunity, setOpportunity] = useState(useLocation().state);
    const [title, setTitle] = useState(opportunity.title);
    const [description, setDescription] = useState(opportunity.description);
    const [location, setLocation] = useState(opportunity.location);
    const [opportunitydate, setOpportunitydate] = useState(opportunity.opportunitydate);
    const [enddate, setenddate] = useState(opportunity.enddate);
    const [skills, setSkills] = useState(opportunity.skills);
    const history = useHistory();

    function UpdateOpportunity() {
        const updatedOpportunity = {
            id: opportunity.id,
            title: title,
            description: description,
            location: location,
            opportunitydate: opportunitydate,
            skills: skills,
        };
        setOpportunity(updatedOpportunity); // for some reason console.log(opportunity) after this line still doesn't show the updated version
        console.log(updatedOpportunity) // this will be the updateHandler
        history.push({ pathname: '/ManageOpportunities' })
    }

    return (
        <Container component="main">
            <Paper className={classes.paper}>
                <Container maxWidth="xs">
                    <PageHeading heading="Edit Opportunity" />
                    <Grid container spacing={3}>
                        <TextField
                            variant="outlined"
                            id="title"
                            label="Opportunity title"
                            name="title"
                            autoFocus
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            className={classes.root}
                        />
                        <TextField
                            id="description"
                            label="Brief description of the opportunity"
                            multiline
                            rows={6}
                            variant="outlined"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            className={classes.root}
                        />
                        <FormControl variant="outlined" fullWidth className={classes.root}>
                            <InputLabel id="location-label" className={classes.root}>Select your location</InputLabel>
                            <Select
                                labelId="location-label"
                                label="Select your location"
                                id="location"
                                name='location'
                                style={{ margin: 8 }}
                                className={classes.root}
                                value={location}
                                onChange={(event) => setLocation(event.target.value)}
                            >
                                {locations.map(city => {
                                    return (
                                        <MenuItem value={city.name}>{city.name}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                        <Grid item xs={12} sm={12} fullWidth>
                            <AutoCompleteTag setSkills={setSkills} skills={skills}/>
                        </Grid>
                        <Grid item xs={12} sm={12} fullWidth>
                            <DatePicker id={'Opportunity Date'} setDate={setOpportunitydate} date={opportunitydate}/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Button
                                variant="contained"
                                className={classes.buttonColor}
                                onClick={UpdateOpportunity}
                            >
                                Save Changes
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </Container>
    );
}
