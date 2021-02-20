import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const Login = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    buttonColor: {
      backgroundColor: "#53bd98",
      color: "white",
      "&:hover": {
        background: "#449f80",
      },
    },
    justifyButton: {
      alignContent: "center",
    },
  }));

  const classes = useStyles();

  return (
    <Container>
      <form>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <TextField
                  id="standard-full-width"
                  style={{ margin: 8 }}
                  placeholder="E-mail"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <TextField
                  id="standard-full-width"
                  style={{ margin: 8 }}
                  placeholder="Password"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.justifyButton}>
              <Paper className={classes.paper} justifyContent="center">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  justifyContent="center"
                  className={classes.buttonColor}
                >
                  Log in
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <Link href="#" variant="body2">
                  Forgot password? Click here!
                </Link>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.buttonColor}
                >
                  Log in with Facebook
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.buttonColor}
                >
                  Log in with Google
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.buttonColor}
                >
                  Register as a Good Cause
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.buttonColor}
                >
                  Register as a Volunteer
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </form>
    </Container>
  );
};

export default Login;

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     height: "100%",
//   },

//   form: {
//     width: "95%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     justify: "center",
//     backgroundColor: "#53bd98",
//   },
//   externalLogin: {
//     margin: theme.spacing(1, 0, 0.5),
//     backgroundColor: "#53bd98",
//   },
// }));

// export default function Login() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="sm">
//       <Paper className={classes.paper}>
//         <Typography component="h1" variant="h5">
//           Log in
//         </Typography>
//         <form className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <Grid container spacing={1} justify="center">
//             <Grid item>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 className={classes.submit}
//               >
//                 Log in
//               </Button>
//             </Grid>
//           </Grid>

//           <Link href="#" variant="body2">
//             Forgot password? Click here!
//           </Link>

//           <div>
//             <Grid container spacing={2} justify="center">
//               <Grid item>
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   color="primary"
//                   className={classes.externalLogin}
//                 >
//                   Log in with Facebook
//                 </Button>
//               </Grid>
//               <Grid item>
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   color="primary"
//                   className={classes.externalLogin}
//                 >
//                   Log in with Google
//                 </Button>
//               </Grid>
//             </Grid>
//           </div>
//           <Divider />
//           <Register className={classes.signup} />
//         </form>
//       </Paper>
//     </Container>
//   );
//}
