import React, { FC } from "react";
import { Box } from '@material-ui/core';
import ProfileCard from "./profile-card/ProfileCard";

const Sidebar: FC = () => {
  return (
    <Box>
      <ProfileCard />
    </Box>
  );
};

export default Sidebar;
