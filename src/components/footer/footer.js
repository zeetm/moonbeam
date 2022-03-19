
import { css, jsx } from '@emotion/react';
import MoonbeamLogo from '../../assets/mb-logo.png'
import classes from './footer.module.css'
import React from 'react';
import { Box, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import Logo from 'components/logo';
import logoLight from 'assets/logo-light.svg';
import Image from "components/image";

export default function Footer() {

  return (
    <Box as="footer" sx={styles.footer} className={classes.footer} >
      <Container sx={styles.container}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: ['column', null, null, null, null, 'row'],
          }}
        >
          {/* <Logo image={MoonbeamLogo} className={classes.image} /> */}
          <img src={MoonbeamLogo} className={classes.image} />
          <Text
            as="p"
            sx={{
              color: '#ffffff',
              opacity: '0.7',
              fontSize: '14px',
              mt: ['10px', null, null, null, null, '0'],
            }}
          >
            Copyright by {new Date().getFullYear()} Moonbeam Inc
          </Text>
        </Box>
        <Box sx={styles.linksWrap} className={classes.links} >
          <Link path="/">Home</Link>
          <Link path="/stay-connected">Stay Connected</Link>
          <Link path="/contact-us">Contact Us</Link>
          <Link path="/employment">Employment</Link>
          <Link path="/privacy-policy">Privacy Policy</Link>
          <Link path="/terms-and-conditions">Terms & Conditions</Link>
          <Link path="/indigenous-acknowledgements">Indigenous Acknowledgement</Link>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    py: ['40px', null, null, null, null, '30px', '40px'],
    backgroundColor: '#020718',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#ffffff',
      opacity: '0.05',
    },
  },
  container: {
    display: 'flex',
    flexDirection: ['column', null, null, null, null, 'row'],
    justifyContent: ['center', null, null, null, null, 'space-between'],
    alignItems: 'center',
    position: 'relative',
    flexWrap: 'wrap',
  },
  linksWrap: {
    mt: ['15px', null, null, null, null, '0'],
    display: 'flex',
    flexWrap: 'wrap',
    a: {
      fontSize: ['14px', null, null, null, '16px'],
      color: '#ffffff',
      transition: 'all 500ms ease',
      '&:hover': { opacity: 0.7 },
    },
    'a+a': { ml: ['15px', null, null, null, '35px'] },
  },
};
