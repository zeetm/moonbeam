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
    color: "white",
    backgroundColor: 'green',
    fontSize: "18px",
    fontFamily: "DM Sans",
    width: "100%",
    borderRadius: "20px",
    p: "20px"
  }
}