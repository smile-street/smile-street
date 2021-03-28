import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
	Paper,
	Container,
	Button,
	Menu,
	MenuItem,
	Dialog,
	DialogActions,
	DialogTitle,
	DialogContentText,
	DialogContent,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	List,
	ListItem,
	ListItemText,
	Divider,
	Fab
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PageHeading from '../PageHeading/PageHeading';
import GoodCauseMatches from './GoodCauseMatches.json';
import useStyle from '../Style/Style';

export default function FullWidthGrid() {
	const classes = useStyle();
	const history = useHistory();
	const [anchorEl, setAnchorEl] = useState(null);
	const [deleteDialog, setDeleteDialog] = useState(false);
	const goodCause_id = useLocation().state.goodCause_id;
	const uniqueOpportunities = [ // create a Set of opportunity IDs
		...new Set(GoodCauseMatches.map((match) => match.id)),
	];

	const handleMenuClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleDeleteOption = () => {
		setAnchorEl(null);
		setDeleteDialog(true);
	};

	const handleDeleteDialogClose = () => {
		setDeleteDialog(false);
	};

	return (
		<Container component="main">
			<Paper className={classes.paper}>
				<Container maxWidth="xs">
					<Fab 
						size="small" 
						aria-label="add" 
						className={classes.button}
						onClick={handleMenuClick}
					>
						<MenuIcon />
					</Fab>
					<Menu
						id="edit-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={() => setAnchorEl(null)}
					>
						<MenuItem
							onClick={() => {
								history.push({ pathname: '/GoodCauseDetails', state: {goodCause_id: goodCause_id} });
							}}
						>
							Edit Profile
				</MenuItem>
						<MenuItem
							onClick={() => {
								history.push({ pathname: '/ManageOpportunities', state: {goodCause_id: goodCause_id} });
							}}
						>
							Edit Opportunities
				</MenuItem>
						<MenuItem
							onClick={() => {
								history.push({ pathname: '/GoodCauseOpportunity', state: {goodCause_id: goodCause_id} });
							}}
						>
							Add Opportunities
				</MenuItem>
						<MenuItem
							onClick={() => { history.push({ pathname: '/' }); }}
						>
							Logout
				</MenuItem>
						<MenuItem
							onClick={handleDeleteOption}
							// delete GoodCause and all its opportunities handler needed
						>
							Delete Account
				</MenuItem>
					</Menu>
					<PageHeading heading="Your Matches" />
					{/*  */}
					<div className={classes.root}>
						{uniqueOpportunities.map(ID => (
							<Accordion defaultExpanded>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
									key={ID}
								>
									<Typography className={classes.heading}>{ID}</Typography>
								</AccordionSummary>
								<AccordionDetails className={classes.root}>
									<List component="nav" aria-label="Volunteers matched with opportunity">
									{GoodCauseMatches.filter(
									(match) => match.id === ID
										).map((volunteer) => {
											return (
												<div>
														<ListItem button width={"100%"}>
															<ListItemText 
																primary={volunteer.name} 
																secondary={`Phone number: ${volunteer.contactnumber} Email: ${volunteer.username}`}
																key={volunteer.username}/>
														</ListItem>
													<Divider />
													
												</div>
											);
										})}
									</List>
								</AccordionDetails>
							</Accordion>
						))}
					</div>
					{/*  */}
				</Container>
			</Paper>
			{/* Delete account Dialog */}
			<Dialog
				open={deleteDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{'Are you sure you want to Delete this account?'}
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{
							'There is no way to restore the account once deleted. If you change your mind you will need to create a new account.'
						}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleDeleteDialogClose} className={classes.buttonColor}>
						I changed my mind
				</Button>
					<Button onClick={handleDeleteDialogClose} color="secondary">
						Yes, Delete it
				</Button>
				</DialogActions>
			</Dialog>
		</Container>
	);
}

// this is the deprecated volunteer info dialog that should pop up when a name is clicked.

// function VolunteerInfo (volunteer) {
// 	const [infoDialog, setInfoDialog] = useState(false);
// 	const classes = useStyle();

// 	const handleInfoCloseDialog = () => {
// 		setInfoDialog(false);
// 	}

// 	return(
// 		<Dialog
// 			open={infoDialog}
// 			onClose={handleInfoCloseDialog}
// 			aria-labelledby="Contact info title"
// 			aria-describedby="Contact info details"
// 		>
// 			<DialogTitle id="Contact info title">{`Contact information for ${volunteer.name}`}</DialogTitle>
// 			<DialogContent id="Contact info details" dividers>
// 			<Typography gutterBottom>{`Number: ${volunteer.contactnumber}`}</Typography>
// 			<Typography gutterBottom>{`email: ${volunteer.username}`}</Typography>
// 			<Typography gutterBottom>
// 				{`${volunteer.name} is interested in ${volunteer.interest}, and is skilled in ${volunteer.skill}`}
// 			</Typography>
// 			</DialogContent>
// 			<DialogActions>
// 			<Button onClick={handleInfoCloseDialog} className={classes.button}>
// 				Close
// 			</Button>
// 			</DialogActions>
// 		</Dialog>
// 	)
// }
