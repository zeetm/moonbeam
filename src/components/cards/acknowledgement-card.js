import React from 'react';
import { Box, Text, Heading, Image } from 'theme-ui';
import afroImage from '../../assets/afro-indig.png'

const AcknowledgementCard = () => {
  return (
    <Box sx={styles.testimonialsCard}>
      <Box sx={styles.testimonialsInfo}>
        {/* <Box sx={styles.testimonialsImage}>
          <Image src={image} alt={name} />
        </Box> */}
        <Box sx={styles.testimonialsContent}>
          {/* <Heading as="h3">{name}</Heading>
          <Text as="p">{username}</Text> */}
        </Box>
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
  testimonialsCard: {
    backgroundImage: `url(${afroImage})`,
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
  testimonialsInfo: {
    display: 'flex',
    alignItems: 'center',
    mt: '140px',
    backgroundColor: '#FFFFFF',
    opacity: '0.7',
    fontFamily: "DM Sans",
    width: '90%',
    height: '40%',
    color: '#000000',
    "&:hover": {
      opacity: '0.9'
    }
  },
  testimonialsImage: {
    img: {
      display: 'block',
      mr: '15px',
    },
    zIndex: '0'
  },
  testimonialsContent: {
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
