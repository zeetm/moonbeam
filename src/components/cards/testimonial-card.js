import React from 'react';
import { Box, Text, Heading, Image } from 'theme-ui';
import indigenousImage from '../../assets/indigenous.png'
import classes from './testimonial-card.module.css'
let fileImage = indigenousImage;
const TestimonialsCard = ({ image, text, name, username }) => {
  const styles = {
    testimonialsCard: {
      backgroundImage: `url(${image})`,
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
      // height: '70px',
      // width: '1000px'
    },
    testimonialsInfo: {
      display: 'flex',
      alignItems: 'center',
      mt: '20px',
      backgroundColor: '#FFFFFF',
      opacity: '0.7',
      fontFamily: "DM Sans",
      width: '90%',
      height: '40%',
      color: '#000000'
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
        mt: '10px',
        zIndex: '1'
      },
    },
  };
  
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
          <Text as="p">{text}</Text>
      </Box>
    </Box>
  );
};

export default TestimonialsCard;

