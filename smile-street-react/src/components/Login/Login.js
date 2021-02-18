import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import "./Login.css";

const Login = () => {
    return ( 
        <Paper>
		<div className="mui-panel">
			<img src="../images/SmileStreetLogo.png" alt="logo" width="100%" />
			
			<form className="mui-form">
				<legend>Login</legend>
				<TextField required id="filled-basic" variant="filled" label="Email"/>

				<TextField
					required
					id="filled-password-input"
					label="Password"
					type="password"
					variant="filled"
				/>

				<div className="mui-row">
                    <Button className="button-colour" variant="contained">
                        Login
                    </Button>
				</div>

				<div className="mui-row">
					<div className="mui-col-md-12 mui-col-xs-12">
						<label>Or</label>
					</div>
				</div>
				<div className="mui-row">
					<div className="mui-col-md-12 mui-col-xs-12">
						<a>Forgot your password click here!</a>
					</div>
				</div>
				<div className="mui-row">
				<div className="mui-row">
                    <Button className="button-colour" variant="contained">
                        Login with Google
                    </Button>
				</div>
				<div className="mui-row">
                    <Button className="button-colour" variant="contained">
                        Login with Facebook
                    </Button>
				</div>
				</div>
				<div className="mui-divider"></div>
				<div className="mui-row">
				<div className="mui-row">
                    <Button className="button-colour" variant="contained">
                        Signup as a Volunteer
                    </Button>
				</div>
				<div className="mui-row">
                    <Button className="button-colour" variant="contained">
                        signup as a Good Cause
                    </Button>
				</div>
				</div>
			</form>

		</div>
	</Paper>
	);
}

export default Login;