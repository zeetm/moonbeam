import React from "react";
import { Box } from 'theme-ui'
import classes from './featured-card.module.css'

const FeaturedCard = ({ content }) => {

  return (
    <div className={classes.cardWrapper}>
      <Box sx={styles.featuredCard} className={classes.card}>
      {content}
      </Box>
    </div>
  )
}

export default FeaturedCard;


const styles = {
  featuredCard: {
    // position: 'relative',
    // top: 100,
    // right: 100,
    color: "white",
    backgroundColor: '#13592a',
    fontSize: "20px",
    fontFamily: "DM Sans",
    width: "100%",
    borderRadius: "20px",
    p: "20px"
  }
}