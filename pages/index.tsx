import React, { FC } from 'react';
import { Box, Grid } from '@material-ui/core';

import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

const Home: FC = () => (
  <div className="w-screen h-screen bg-coolGray-100">
    <main>
      <Box className="p-4" width="100%">
        <Grid container direction="row" justify="center" alignItems="flex-start">
          <Grid className="p-2" item lg={3} xs={12}><Sidebar /></Grid>
          <Grid className="p-2" item lg={9} xs={12}><Main /></Grid>
        </Grid>
      </Box>
    </main>
  </div>
);

export default Home;
