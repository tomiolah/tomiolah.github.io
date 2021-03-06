import React, { FC } from 'react';
import { Box, Card, CardContent, Typography } from '@material-ui/core';

import ContactInfo from './ContactInfo';
import ProfilePicture from './ProfilePicture';

const ProfileCard: FC = () => (
  <Card>
    <ProfilePicture />
    <Box p={2}>
      <CardContent>
        <Name />
        <Tagline />
        <Box>
          <ContactInfo />
        </Box>
      </CardContent>
    </Box>
  </Card>
);

const Name: FC = () => (
  <Typography
    style={{
      fontWeight: 'bold',
      fontFamily: 'Iosevka',
      paddingBottom: '10px',
    }}
    align="center"
    component="h1"
    variant="h4"
  >
    Oláh Tamás-Lajos
  </Typography>
);

const Tagline: FC = () => (
  <Typography
    style={{ fontFamily: 'Iosevka' }}
    align="center"
    component="h2"
    variant="h5"
  >
    Survivor of the class of 2020
  </Typography>
)

export default ProfileCard;
