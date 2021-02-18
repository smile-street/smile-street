import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Link from '@material-ui/core/Link';
import TextField from "@material-ui/core/TextField";
import "./Login.css";

const Login = () => {
	return (
		<Container maxWidth="sm">
			<img src="../images/SmileStreetLogo.png" alt="logo" width="100%" />
			<Paper height={100}>
				<div>
					<legend>Login</legend>
					<TextField required id="filled-basic" variant="filled" label="Email" />

					<TextField
						required
						id="filled-password-input"
						label="Password"
						type="password"
						variant="filled"
					/>
				</div>
					<Button className="button-colour" variant="contained">
						Login
					</Button>
				<div className="mui-col-md-12 mui-col-xs-12">
					<label>Or</label>
				</div>
				<div className="mui-col-md-12 mui-col-xs-12">
					<Link  href="#">Forgot your password click here!</Link>
				</div>
				<div>
					<Button className="button-colour" variant="contained">
						Login with Google
        			</Button>
					<Button className="button-colour" variant="contained">
						Login with Facebook
        			</Button>
				</div>
			</Paper>

			<div>
				<Paper>
					<Button className="button-colour" variant="contained">
						Sign up as a Volunteer
        			</Button>
					<Button className="button-colour" variant="contained">
						Sign up as a Good Cause
					</Button>
				</Paper>
			</div>
		</Container>
	);
};

export default Login;
