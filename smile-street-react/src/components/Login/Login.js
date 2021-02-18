import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./Login.css";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		justify: "center",
		alignItems: "center",
		direction: "row",
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	button: {
		backgroundColor: "#53bd98",
	}
}));

const Login = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<img src="../images/SmileStreetLogo.png" alt="logo" width="100%" />	
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>
					<TextField
							required
							id="outlined-basic"
							variant="outlined"
							label="Email" />
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>
					<TextField
							required
							id="outlined-password-input"
							label="Password"
							type="password"
							variant="outlined"/>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
					<Button className={classes.button} variant="contained">
							Login with Google
		    			</Button>
						
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
					<Button className={classes.button} variant="contained">
							Login with Facebook
		    			</Button>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Button className={classes.button} variant="contained">
							Register as a Volunteer
		    			</Button>
						<Button className={classes.button} variant="contained">
							Register as a Good Cause 
		    			</Button>
					</Paper>
				</Grid>
			</Grid>
		</div>

		// 	<Container maxWidth="sm">
		// 		<img src="../images/SmileStreetLogo.png" alt="logo" width="100%" />
		// 		<Paper height={100}>
		// 			<div>
		// 				<legend>Login</legend>

		// 				<Box component="span" m={1}>

		// 				<TextField
		// 					required
		// 					id="outlined-basic"
		// 					variant="outlined"
		// 					label="Email" />
		// 				</Box>
		// 				<Box component="span" m={1}>

						// <TextField
						// 	required
						// 	id="outlined-password-input"
						// 	label="Password"
						// 	type="password"
						// 	variant="outlined"/>

		// 				</Box>

		// 			</div>
		// 				<Button className={classes.button} variant="contained">
		// 					Login
		// 				</Button>
		// 			<div>
		// 				<label>Or</label>
		// 			</div>
		// 			<div>
		// 				<Link  href="#">Forgot your password click here!</Link>
		// 			</div>
		// 			<div>
						// <Button className={classes.button} variant="contained">
						// 	Login with Google
		    			// </Button>
						// <Button className={classes.button} variant="contained">
						// 	Login with Facebook
		    			// </Button>
		// 			</div>
		// 		</Paper>

		// 		<div>
		// 			<Paper>
		// 				<Button className={classes.button} variant="contained">
		// 					Sign up as a Volunteer
		//     			</Button>
		// 				<Button className={classes.button} variant="contained">
		// 					Sign up as a Good Cause
		// 				</Button>
		// 			</Paper>
		// 		</div>
		// 	</Container>
	);
};

export default Login;
