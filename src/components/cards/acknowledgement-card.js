import React from 'react';
import { Box, Text, Heading, Image } from 'theme-ui';
import classes from './acknowledgement-card.module.css';

const AcknowledgementCard = () => {
  return (
    <Box sx={styles.acknowledgementCard} className={classes.bgImage}>
      <Box sx={styles.acknowledgementInfo} className={classes.content}>
          <Text as="p">Moonbeam Trading Company would like to acknowledge the African Diaspora, its elders, 
          their descendants and the lands upon which they live. For thousands of years African Indigenous
           peoples inhabited and cared for the land with a spiritual and cultural connection to the earth. 
           In particular we acknowledge the continuing efforts to reconnect and reclaim African Indigenous ways 
           of being and doing. We are grateful for the opportunity and responsibility to embrace our heritage,
            and by doing so, give our respect to the ancestors.
          </Text>
      </Box>
    </Box>
  );
};

export default AcknowledgementCard;

const styles = {
  acknowledgementCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    mb: '20px',
    px: ['20px', null, null, null, null, '25px', '35px'],
    py: ['20px', null, null, null, null, '20px', '25px'],
    pb: ['25px', null, null, null, null, '25px', '35px'],
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
    },
    height: '600px',
    width: '1000px'
  },
  acknowledgementInfo: {
    display: 'flex',
    alignItems: 'center',
    // mt: '140px',
    backgroundColor: '#FFFFFF',
    opacity: '0.7',
    fontFamily: "DM Sans",
    width: 'auto',
    height: 'auto',
    color: '#000000',
    "&:hover": {
      opacity: '0.9'
    },
    pt: '20px',
    pb: '20px',
    pl: '10px',
    pr: '10px'
  },
  acknowledgementImage: {
    img: {
      display: 'block',
      mr: '15px',
    },
    zIndex: '0'
  },
  acknowledgementContent: {
    h3: {
      m: 0,
      color: '#343D48',
      fontSize: '17px',
      fontWeight: 500,
      lineHeight: 1,
    },
    p: {
      m: 0,
      lineHeight: 1,
      color: '#000000',
      fontSize: '14px',
      fontWeight: 500,
      mt: '10px'
    },
  },
};
