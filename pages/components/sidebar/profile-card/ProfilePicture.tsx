import { Box } from '@material-ui/core';

const ProfilePicture = () => (
  <Box p={1}>
    <Box p={1} className="transition-transform rounded-lg border-2 border-lightBlue-500 border-dashed transform -rotate-3 hover:rotate-6">
      <Box p={1} className="transition-transform rounded-lg border-2 border-teal-500 border-dashed transform rotate-6 hover:-rotate-3">
        <img className="transition-transform rounded-lg transform -rotate-3 hover:transform scale-90 hover:scale-95 shadow hover:shadow-2xl transition-shadow" src="/images/profile.jpg" />
      </Box>
    </Box>
  </Box>
);

export default ProfilePicture;
