import React from "react";
import { Box } from 'theme-ui'

const FeaturedCard = ({ content }) => {

  return (
    <div>
      <Box sx={styles.featuredCard}>
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
    width: "40%",
    border: "1px solid black",
    borderRadius: "20px",
    p: "20px"
  }
}