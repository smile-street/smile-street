import React from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';

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
        "&:hover": {
            background: "#449f80",
        },
    },
}));

const Register = () => {
    const classes = useStyles();
    return ( 
        <div>

            <Grid container spacing={2} justify="center">
                <Grid item>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.signup}
                    >
                        Register as a Volunteer
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.signup}
                    >
                        Register as a Good Cause
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Register;