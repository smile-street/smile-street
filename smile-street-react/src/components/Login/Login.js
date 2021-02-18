import React from 'react';

const Login = () => {
    return ( 
        <div className="mui-container mui--text-center">
		<div className="mui-panel">
			<img src="../images/SmileStreetLogo.png" alt="logo" width="100%" />
			
			<form className="mui-form">
				<legend>Login</legend>
				<div className="mui-textfield mui-col-md-6 mui-col-xs-12">
					<input type="email" placeholder="e-mail"></input>
				</div>
				<div className="mui-textfield mui-col-md-6 mui-col-xs-12">
					<input type="password" placeholder="password"></input>
				</div>
				<div className="mui-row">
					<div className="mui-col-md-12 mui-col-xs-12">
						<button type="submit" className="mui-btn mui-btn--raised">Login</button>
					</div>
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
					<div className="mui-col-md-6 mui-col-xs-12">
						<button className="mui-btn mui-btn--raised mui-btn">
							Login with Facebook
						</button>
					</div>
					<div className="mui-col-md-6 mui-col-xs-12">
						<button className="mui-btn mui-btn--raised mui-btn">
							Login with Github
						</button>
					</div>
				</div>
				<div className="mui-divider"></div>
				<div className="mui-row">
					<div className="mui-col-md-6 mui-col-xs-12">
						<button className="mui-btn mui-btn--raised mui-btn">
							Signup as a volunteer
						</button>
					</div>
					<div className="mui-col-md-6 mui-col-xs-12">
						<button className="mui-btn mui-btn--raised mui-btn">
							Sign up as a Good Cause
						</button>
					</div>
				</div>
			</form>

		</div>
	</div>
     );
}
 
export default Login;