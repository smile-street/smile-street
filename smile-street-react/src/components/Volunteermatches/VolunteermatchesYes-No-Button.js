import React from 'react';
import ReactDOM from 'react-dom';
//import Container from 'muicss/lib/react/container';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
import Button from '@material-ui/core/Button';
import "./VolunteermatchesYes-No-Button.css";
//import Option from 'muicss/lib/react/option';
//import Select from 'muicss/lib/react/select';

const VolunteermatchesYesNoButton = () => {
    return (
        <div className="mui-container mui--text-center">
		<div className="mui-panel">
			<img src="../images/SmileStreetLogo.png" alt="logo image" width="100%"/>
			<legend className="mui--text-center"> My Matches</legend>
			<div>
				<button className="mui-btn mui--text-right">Edit</button>
				<div>
					<div className="mui-panel">
						<div className="mui--text-left mui-col-xs-6 mui-col-6">
							<p>Good cause name:</p>
							<p>Location:</p>
							<p>Dates:</p>
							<p>Description:</p>
						</div>
						<button class="mui--divider-right mui-btn mui-btn--large mui-btn--raised">Yes, Please</button>
						<button class="mui--divider-right mui-btn mui-btn--large mui-btn--raised">No, Thanks</button>
					</div>
					<div className="mui-panel">
						<div class="mui--text-left mui-col-xs-6 mui-col-6">
							<p>Good cause name:</p>
							<p>Location:</p>
							<p>Dates:</p>
							<p>Description:</p>
						</div>
						<button className="mui--divider-right mui-btn mui-btn--large mui-btn--raised">Yes, Please</button>
						<button className="mui-btn mui-btn--large mui-btn--raised">No, Thanks</button>
					</div>
					<div className="mui-panel">
						<div className="mui--text-left mui-col-xs-6 mui-col-6">
							<p>Good cause name:</p>
							<p>Location:</p>
							<p>Dates:</p>
							<p>Description:</p>
						</div>
						<button className="mui-btn mui-btn--large mui-btn--raised">Yes, Please</button>
						<button className="mui-btn mui-btn--large mui-btn--raised">No, Thanks</button>
					</div>
				</div>
			</div>
		</div>
</div>
	);
}
export default VolunteermatchesYesNoButton;
