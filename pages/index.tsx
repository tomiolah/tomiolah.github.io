import React, { FC } from 'react';
import { Box, Grid } from '@material-ui/core';

import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

const Home: FC = () => (
  <div>
    <main>
      <Box width="100%">
        <Grid container direction="row" justify="center" alignItems="flex-start">
          <Grid item sm={3} xs={12}><Sidebar /></Grid>
          <Grid item sm={9} xs={12}><Main /></Grid>
        </Grid>
      </Box>
    </main>
  </div>
);

export default Home;
