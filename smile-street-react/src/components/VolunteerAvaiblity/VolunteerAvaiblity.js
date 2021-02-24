import React from "react";
import {
  makeStyles,
  Paper,
  Grid,
  Container,
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import PageHeading from "../PageHeading/PageHeading";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  form: {
    width: "100%",
  },
  buttonColor: {
    backgroundColor: "#53bd98",
    color: "white",
    background: "#449f80",

    "&:hover": {
      background: "#449f80",
    },
  },
}));

export default function VolunteerAvaiblity() {
  const classes = useStyles();
  return (
    <Container component="main">
      <Paper className={classes.paper}>
        <Container maxWidth="xs">
          <PageHeading heading="Please select your availibity" />
          <Grid container spacing={3}>
            <TextField
              variant="outlined"
              margin="normal"
              id="last name"
              label="Employers Name"
              style={{ margin: 8 }}
              fullWidth
            />
            <FormControl variant="outlined" fullWidth style={{ margin: 8 }}>
              <InputLabel id="demo-simple-select-outlined-label">
                Select your primary match location
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Age"
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" fullWidth style={{ margin: 8 }}>
              <InputLabel id="demo-simple-select-outlined-label">
                Select your secondary match location
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Age"
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <InputLabel
              id="demo-simple-select-outlined-label"
              style={{ margin: 8 }}
            >
              We will match you based on your locations
            </InputLabel>
            <FormControl variant="outlined" fullWidth style={{ margin: 8 }}>
              <InputLabel id="demo-simple-select-outlined-label">
                Please select no of days available
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Age"
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <Grid item xs={12} sm={12}>
              <Button variant="contained" className={classes.buttonColor}>
                Add availblity
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Select,
//   TextField,
//   FormControl,
//   MenuItem,
//   Container,
//   Grid,
//   Paper,
//   InputLabel,
//   Button,
// } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
//   formElementSize: {
//     minWidth: "90%",
//   },
//   buttonColor: {
//     backgroundColor: "#53bd98",
//     color: "white",
//     "&:hover": {
//       background: "#449f80",
//     },
//   },
// }));

// const VolunteerAvaiblity = () => {
//   const classes = useStyles();

//   return (
//     <Container>
//       <form>
//         <div className={classes.root}>
//           <Paper className={classes.paper}>
//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={6}>
//                 <FormControl
//                   variant="filled"
//                   className={classes.formElementSize}
//                 >
//                   <InputLabel id="demo-simple-select-filled-label" sm={6}>
//                     Select your primary match Location
//                   </InputLabel>
//                   <Select
//                     labelId="demo-simple-select-filled-label"
//                     id="demo-simple-select-filled"
//                   >
//                     <MenuItem value="">
//                       <em>None</em>
//                     </MenuItem>
//                     <MenuItem value={10}>Ten</MenuItem>
//                     <MenuItem value={20}>Twenty</MenuItem>
//                     <MenuItem value={30}>Thirty</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <FormControl
//                   variant="filled"
//                   className={classes.formElementSize}
//                 >
//                   <InputLabel id="demo-simple-select-filled-label" sm={6}>
//                     Select your secondary match Location
//                   </InputLabel>
//                   <Select
//                     labelId="demo-simple-select-filled-label"
//                     id="demo-simple-select-filled"
//                   >
//                     <MenuItem value="">
//                       <em>None</em>
//                     </MenuItem>
//                     <MenuItem value={10}>Ten</MenuItem>
//                     <MenuItem value={20}>Twenty</MenuItem>
//                     <MenuItem value={30}>Thirty</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <FormControl
//                   variant="filled"
//                   className={classes.formElementSize}
//                 >
//                   <InputLabel id="demo-simple-select-filled-label" sm={6}>
//                     No of days available
//                   </InputLabel>
//                   <Select
//                     labelId="demo-simple-select-filled-label"
//                     id="demo-simple-select-filled"
//                   >
//                     <MenuItem value="">
//                       <em>None</em>
//                     </MenuItem>
//                     <MenuItem value={10}>Ten</MenuItem>
//                     <MenuItem value={20}>Twenty</MenuItem>
//                     <MenuItem value={30}>Thirty</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <formControl className={classes.formElementSize} noValidate>
//                   <TextField
//                     id="date"
//                     label="Which date could you be available"
//                     type="date"
//                     defaultValue="2017-05-24"
//                     className={classes.formElementSize}
//                     InputLabelProps={{
//                       shrink: true,
//                     }}
//                   />
//                 </formControl>
//               </Grid>
//               <Grid item xs={12} sm={12}>
//                 <formControl className={classes.formElementSize} noValidate>
//                   <Button variant="contained" className={classes.buttonColor}>
//                     Add Intrests
//                   </Button>
//                 </formControl>
//               </Grid>
//             </Grid>
//           </Paper>
//         </div>
//       </form>
//     </Container>
//   );
// };

// export default VolunteerAvaiblity;
