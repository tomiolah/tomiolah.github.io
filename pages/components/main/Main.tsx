import { FC } from "react";
import { Box } from '@material-ui/core';
import Education from './sections/Education';

const Main: FC = () => {
  return (
    <Box p={3}>
      <Education />
    </Box>
  );
};

export default Main;
