import { FC, ReactNode } from 'react';
import {
  Link,
  Grid,
  SvgIcon,
  Typography,
} from '@material-ui/core';

import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const ContactInfo: FC = () => (
  <Grid className="px-10 pt-3" container direction="column">
    <ContactRow icon={<PhoneIcon />} text="+40735508382" href="tel:+40735508382" />
    <ContactRow icon={<MailIcon />} text="tomiolah1998@gmail.com" href="mailto:tomiolah1998@gmail.com" />
    <SocialIcons />
  </Grid>
);

const SocialIcons: FC = () => (
  <Grid className="pt-4" item container alignItems="center" justify="space-evenly" direction="row" spacing={3}>
    <Grid item>
      <Link
        align="center"
        color="initial"
        className="hover:text-blue-900 text-black"
        href="https://www.facebook.com/tomi.olah.31"
      >
        <SvgIcon style={{ fontSize: '2.5rem' }}><FacebookIcon /></SvgIcon>
      </Link>
    </Grid>
    <Grid item>
      <Link
        align="center"
        color="initial"
        className="hover:text-blue-700 text-black"
        href="https://www.linkedin.com/in/tomiolah1998/"
      >
        <SvgIcon style={{ fontSize: '2.5rem' }}><LinkedInIcon /></SvgIcon>
      </Link>
    </Grid>
    <Grid item>
      <Link
        align="center"
        color="initial"
        className="hover:text-indigo-900 text-black"
        href="https://github.com/tomiolah"
      >
        <SvgIcon style={{ fontSize: '2.5rem' }}><GitHubIcon /></SvgIcon>
      </Link>
    </Grid>
    <Grid item>
      <Link
        align="center"
        color="initial"
        className="hover:text-pink-700 text-black"
        href="https://www.instagram.com/tomiolah1998/"
      >
        <SvgIcon style={{ fontSize: '2.5rem', strokeWidth: '2%' }}>
          <InstagramIcon />
        </SvgIcon>
      </Link>
    </Grid>
  </Grid>
);

const ContactRow: FC<{
  icon: ReactNode;
  text: string;
  href: string;
}> = ({ icon, text, href }) => (
  <Link className="hover:text-blue-500 text-black" color="initial" align="center" href={href}>
    <Grid item container alignItems="center" justify="center" direction="row" spacing={3}>
      <Grid item>
        <SvgIcon fontSize="large">{icon}</SvgIcon>
      </Grid>
      <Grid item>
        <Typography style={{ fontFamily: 'Iosevka', fontSize: '1.2rem' }} variant="inherit">
            {text}
        </Typography>
      </Grid>
    </Grid>
  </Link>
);

export default ContactInfo;
