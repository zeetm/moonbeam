import React from 'react';
import { Box, Text, Heading, Image } from 'theme-ui';
import indigenousImage from '../../assets/indigenous.png'

const TestimonialsCard = () => {
  return (
    <Box sx={styles.testimonialsCard} className={classes.card}>
      <Box sx={styles.testimonialsInfo}>
        {/* <Box sx={styles.testimonialsImage}>
          <Image src={image} alt={name} />
        </Box> */}
        <Box sx={styles.testimonialsContent}>
          {/* <Heading as="h3">{name}</Heading>
          <Text as="p">{username}</Text> */}
        </Box>
          <Text as="p">Moonbeam Trading Company would like to acknowledge the 
          fact that the land on which we gather, and operate our business, is part 
          of the Treaty Lands and Territory of the Mississaugas of the Credit. For thousands of years, 
          Indigenous peoples inhabited and cared for this land. In particular we acknowledge the territory of 
          the Anishinabek, Huron-Wendat, Haudenosaunee and Ojibway/Chippewa peoples; the land that is home
           to the Metis; and most recently, the territory of the Mississaugas of the Credit First Nation 
           who are direct descendants of the Mississaugas of the Credit. We are grateful to have the opportunity 
           to work on this land, and by doing so, give our respect to its first inhabitants
           </Text>
      </Box>
    </Box>
  );
};

export default TestimonialsCard;

const styles = {
  testimonialsCard: {
    backgroundImage: `url(${indigenousImage})`,
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
