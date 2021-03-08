import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Card, CardContent, Typography } from '@material-ui/core';

import ContactInfo from './ContactInfo';
import ProfilePicture from './ProfilePicture';
import useAsyncData from '../../../hooks/useAsyncData';
import fetchData from '../../../util/fetchData';

const ProfileCard: FC = () => (
  <Card className="shadow-xl">
    <ProfilePicture />
    <Box p={1}>
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

interface OfficeAPIResponse {
  data: {
    _id:       string;
    content:   string;
    character: {
      _id:       string;
      firstname: string;
      lastname:  string;
      __v:       number;
    };
    __v:       number;
  };
}

const Tagline: FC = () => {
  const [isOriginal, setIsOriginal] = useState<boolean>(true);
  const [query, setQuery] = useState<Promise<OfficeAPIResponse> | undefined>();
  const { data, isFetching } = useAsyncData(query);
  const author = useMemo(
    () => data && !isFetching 
      ? `${data.data.character.firstname} ${data.data.character.lastname}`
      : '',
    [data],
  );
  const tagline = useMemo(
    () => data && !isFetching
      ? `"${data.data.content}"`
      : 'Survivor of the class of 2020',
      [data],
  );

  const randomOfficeQuote = useCallback(() => {
    setQuery(fetchData('https://www.officeapi.dev/api/quotes/random'));
    setIsOriginal(false);
  }, [setQuery])

  return isOriginal && !isFetching ? (
    <Typography
      style={{ fontFamily: 'Iosevka' }}
      align="center"
      component="h2"
      variant="h5"
      onClick={randomOfficeQuote}
    >
      {tagline}
    </Typography>
  ) : (
    <div onClick={randomOfficeQuote}>
      <Typography
        style={{ fontFamily: 'Iosevka' }}
        align="center"
        component="h2"
        variant="body1"
        color="textSecondary"
      >
        {tagline}
      </Typography>
      <Typography
        style={{ fontFamily: 'Iosevka' }}
        align="right"
        component="h2"
        variant="body2"
        color="textSecondary"
      >
        <s>{author}</s> Michael Scott
      </Typography>
    </div>
  );
}

export default ProfileCard;
