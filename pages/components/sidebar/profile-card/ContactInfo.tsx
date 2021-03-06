import {
  Link,
  Grid,
  SvgIcon,
  Typography,
} from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail';

const ContactInfo = () => {
  return (
    <Grid container direction="column">
      <Email />
    </Grid>
  )
};

const Email = () => (
  <Link align="center" color="inherit" href="mailto:tomiolah1998@gmail.com">
    <Grid item container alignItems="center" justify="center" direction="row" spacing={3}>
      <Grid item>
        <SvgIcon fontSize="large"><MailIcon /></SvgIcon>
      </Grid>
      <Grid item alignItems="center">
        <Typography variant="inherit" color="textSecondary">
            tomiolah1998@gmail.com
        </Typography>
      </Grid>
    </Grid>
  </Link>
);

export default ContactInfo;
