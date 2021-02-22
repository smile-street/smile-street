import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Select,
  TextField,
  FormControl,
  MenuItem,
  Container,
  Grid,
  Paper,
  InputLabel,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  formElementSize: {
    minWidth: 300,
  },
}));

const VolunteerAvaiblity = () => {
  const classes = useStyles();

  return (
    <Container>
      <form>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                {/* <Paper className={classes.paper}> */}
                <FormControl className={classes.formElementSize}>
                  <TextField
                    id="outlined-basic"
                    label="Employer Name"
                    variant="outlined"
                  />
                </FormControl>
                {/* </Paper> */}
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* <Paper className={classes.paper}> */}
                <FormControl
                  className={classes.formElementSize}
                  variant="filled"
                >
                  <InputLabel id="demo-simple-select-filled-label" sm={6}>
                    Select your primary match Location
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                {/* </Paper> */}
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* <Paper className={classes.paper}> */}
                <FormControl
                  style={{ minWidth: 300 }}
                  variant="filled"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-filled-label" sm={6}>
                    Select your secondary match Location
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                {/* </Paper> */}
              </Grid>

              <Grid item xs={12} sm={6}>
                {/* <Paper className={classes.paper}> */}
                <FormControl
                  variant="filled"
                  className={classes.formElementSize}
                >
                  <InputLabel id="demo-simple-select-filled-label" sm={6}>
                    No of days available
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                {/* </Paper> */}
              </Grid>

              <Grid item xs={12} sm={12}>
                {/* <Paper className={classes.paper}> */}
                <formControl className={classes.formElementSize} noValidate>
                  <TextField
                    id="date"
                    label="Which date could you be available"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.formElementSize}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </formControl>
                {/* </Paper> */}
              </Grid>
            </Grid>
          </Paper>
        </div>
      </form>
    </Container>
  );
};

export default VolunteerAvaiblity;
