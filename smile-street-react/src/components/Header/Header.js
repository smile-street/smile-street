import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Header = () => {
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Paper>
              <img
                src="../images/SmileStreetLogo.png"
                alt="logo"
                width="100%"
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Header;
