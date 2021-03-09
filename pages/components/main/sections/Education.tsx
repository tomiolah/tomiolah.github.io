import { FC } from "react";
import { Box, Divider, makeStyles, Typography } from "@material-ui/core";

const Education: FC = () => {
  return (
    <Box>
      <Typography style={{ fontFamily: 'Iosevka' }} variant="h3" component="h2">Education</Typography>
      <Divider className="w-1/3 h-0.5 bg-blue-400" />
    </Box>
  );
}

export default Education;
