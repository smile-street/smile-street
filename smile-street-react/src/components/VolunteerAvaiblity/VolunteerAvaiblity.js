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
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

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
            <InputLabel
              id="demo-simple-select-outlined-label"
              style={{ margin: 8 }}
            >
              Which dates could you be available
            </InputLabel>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value=""
                  onChange=""
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </Grid>
            </MuiPickersUtilsProvider>

            <Grid item xs={12} sm={12}>
              <Button variant="contained" className={classes.buttonColor}>
                Add Intrests
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
