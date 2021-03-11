import React from 'react';
import {Container, Paper, Grid} from '@material-ui/core';

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
