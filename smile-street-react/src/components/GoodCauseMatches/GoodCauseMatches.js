import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
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
	Divider
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PageHeading from '../PageHeading/PageHeading';
import MatchVolunteersCard from './MatchedVolunteersCard';
import GoodCauseMatches from './GoodCauseMatches.json';
import useStyle from '../Style/Style';

export default function FullWidthGrid() {
	const classes = useStyle();
	const history = useHistory();
	const [anchorEl, setAnchorEl] = useState(null);
	const [deleteDialog, setDeleteDialog] = useState(false);
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
					<Button
						aria-controls="edit-menu"
						aria-haspopup="true"
						onClick={handleMenuClick}
						className={classes.buttonColor}
					>
						<MenuIcon />
					</Button>
					<Menu
						id="edit-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={() => setAnchorEl(null)}
					>
						<MenuItem
							onClick={() => {
								history.push({ pathname: '/GoodCauseDetails' });
							}}
						>
							Edit Profile
				</MenuItem>
						<MenuItem
							onClick={() => {
								history.push({ pathname: '/ManageOpportunities' });
							}}
						>
							Edit Opportunities
				</MenuItem>
						<MenuItem
							onClick={() => {
								history.push({ pathname: '/GoodCauseOpportunity' });
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
						>
							Delete Account
				</MenuItem>
					</Menu>
					<PageHeading heading="Your Matches" />
					{/*  */}
					<div className={classes.root}>
						{uniqueOpportunities.map(ID => (
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
									key={ID}
								>
									<Typography className={classes.heading}>Opportunity {ID}</Typography> {/*should be opportunity title*/}
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
