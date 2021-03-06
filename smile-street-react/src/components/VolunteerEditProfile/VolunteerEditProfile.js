import { Profiler, useState } from "react";
import React from "react";
import {
  makeStyles,
  Paper,
  Grid,
  Container,
  TextField,
  Button,
  DialogTitle,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import PageHeading from "../PageHeading/PageHeading";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#53bd98",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#449f80",
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#449f80",
    },

    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#449f80",
    },
    margin: 8,
  },
  paper: {
    marginTop: theme.spacing(0.5),
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "xs",
  },
  form: {
    width: "100%",
  },
  button: {
    backgroundColor: "#53bd98",
    color: "white",
    "&:hover": {
      background: "#449f80",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  },
}));

//this page needs to siplay what is in the database and 
//allow volunteer to edit their details.


export default function VolunteerEditProfile() {
 

  const [currentProfile, setProfile] = useState([{
  firstName: "viran", lastName: "Gohil", email: "jodrew_7@hotmail.com", contactNumber: "07931484239", password: "yoda"
}]);
    //firstName: "",
    //lastName: "",
    //email: "",
    //contactNumber: "",
    //password: "",
    //confirmPass: "",
  

 // 

 

const emailCurrentProfile = currentProfile.filter(currentProfil => currentProfil.email="jodrew_7@hotmail.com")
//console.log(emailCurrentProfile)


  const handleChange = (e) => {
    setProfile({
      ...currentProfile,
      [e.target.name]: e.target.value,
    });
  };
  const [errors, setErrors] = useState({});
 
  const handleClick = (e) => {
    e.preventDefault();
    console.log(
      currentProfile.firstName, 
      currentProfile.lastName,
      currentProfile.email,
      currentProfile.password
      )
    
  };
  //////////////////////////////////////////////////////////
  const classes = useStyles();
  return (
    <Container component="main">
      <Paper className={classes.paper}>
        <Container maxWidth="xs">
          <PageHeading heading="Volunteer - Edit Profile" />
          <Grid container spacing={3}>
           

            <TextField
              variant="outlined"
              margin="normal"
              id="first name"
              label = {emailCurrentProfile[0].firstName}
              style={{ margin: 8 }}
              fullWidth
              name="firstName"
              value={currentProfile.firstName}
              onChange={handleChange}
              className={classes.root}
            />

            <TextField
              variant="outlined"
              margin="normal"
              id="last name"
              label= {emailCurrentProfile[0].lastName}
              style={{ margin: 8 }}
              fullWidth
              name="lastName"
              //type="text"
              value={currentProfile.lastName}
              onChange={handleChange}
              className={classes.root}
            />

            <TextField
              variant="outlined"
              margin="normal"
              id="email"
              label= {emailCurrentProfile[0].email}
              style={{ margin: 8 }}
              fullWidth
              name="email"
              value={currentProfile.email}
              onChange={handleChange}
              className={classes.root}
            />

            <TextField
              variant="outlined"
              margin="normal"
              id="contact number"
              label= {emailCurrentProfile[0].contactNumber}
              style={{ margin: 8 }}
              fullWidth
              name="contactNumber"
              value={currentProfile.contactNumber}
              onChange={handleChange}
              className={classes.root}
            />

            <TextField
              variant="outlined"
              margin="normal"
              id="password"
              label= {emailCurrentProfile[0].password}
              style={{ margin: 8 }}
              fullWidth
              name="password"
              value={currentProfile.password}
              onChange={handleChange}
              className={classes.root}
            />

            <TextField
              variant="outlined"
              margin="normal"
              id="confirm password"
              label="Confirm Password"
              style={{ margin: 8 }}
              fullWidth
              name="confirmPass"
              value={currentProfile.confirmPass}
              onChange={handleChange}
              className={classes.root}
            />

            <Grid item xs={6} sm={6}>
              <Button
                onClick={handleClick}
                variant="contained"
                className={classes.button}
                style={{ margin: 8 }}
              >
                Submit
              </Button>




              <Button
              onClick={handleClick}
              variant="contained"
              className={classes.button}
              style={{ margin: 8 }}>


                Edit
              </Button>


            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
