import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		height: "100%",
	},
	form: {
		width: '95%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	externalLogin: {
		margin: theme.spacing(1, 0, 0.5),	
	},
	signup: {
		margin: theme.spacing(1, 0, 0.5),
	},
}));

export default function Login() {
	const classes = useStyles();

	return (
		<Container component="main" maxWidth="sm">
			<Paper className={classes.paper}>
			<img src="../images/SmileStreetLogo.png" alt="logo" width="100%" />				
				<Typography component="h1" variant="h5">
					Log in
       			</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Log in
          			</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password? Click here!
              				</Link>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.externalLogin}
					>
						Log in with Facebook
          			</Button>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.externalLogin}
					>
						Log in with Google
          			</Button>
					<Divider />
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
				</form>
			</Paper>
		</Container>
	);
}