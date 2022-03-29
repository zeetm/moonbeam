import React from 'react';
import { Box, Text, Heading, Image } from 'theme-ui';
import classes from './testimonial-card.module.css';


const TestimonialsCard = () => {
  return (
    <Box sx={styles.testimonialsCard} className={classes.bgImage}>
      <Box sx={styles.testimonialsInfo} className={classes.content}>
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
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    mb: '20px',
    px: ['20px', null, null, null, null, '25px', '35px'],
    py: ['20px', null, null, null, null, '20px', '25px'],
    pb: ['25px', null, null, null, null, '25px', '35px'],
    p: {
      fontSize: '16px',
      lineHeight: 1.5,
      color: '#343D48',
    },
    height: '600px',
    width: '1000px'
  },
  testimonialsInfo: {
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
