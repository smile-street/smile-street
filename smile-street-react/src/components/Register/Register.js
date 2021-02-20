import React from 'react';
import { Button, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		height: "100%",
	},
	signup: {
		margin: theme.spacing(1, 0, 0.5),
        backgroundColor: "#53bd98",
	},
}));

const Register = () => {
    const classes = useStyles();
    return ( 
        <div>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.signup}
            >
                Register as a Volunteer
            </Button>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.signup}
            >
                Register as a Good Cause
            </Button>
        </div>
    );
}

export default Register;