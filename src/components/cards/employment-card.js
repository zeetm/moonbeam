import React from "react";
import { Box, Text, Heading, Image } from "theme-ui";
import classes from "./employment-card.module.css";

const EmploymentCard = ({ image, heading, text, link }) => {
  return (
      <Box sx={styles.jackpotCard} className={classes.content}>
       <Box sx={styles.image}>
          <Image src={image} alt={heading} />
        </Box>
        <Box sx={styles.content} className={classes.contentText}>
          <Heading as="h3">{heading}</Heading>
          <Text as="p">{text}</Text>
        </Box>
        <a href={link} target="_blank">
          <button className={classes.button}>Job Number MTC2101DS</button>
        </a>
      </Box>
  );
};

export default EmploymentCard;

const styles = {
  jackpotCard: {
    p: ["30px", null, null, null, null, "15px 30px", "30px"],
    display: "flex",
    flexDirection: ["column", null, null, "row"],
    textAlign: ["center", null, null, "left"],
    transition: "all 500ms ease",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    fontFamily: "DM Sans",
    "&:hover": {
      boxShadow: " 0px 8px 24px rgba(69, 88, 157, 0.16)"
    }
  },
  image: {
    flexShrink: "0",
    mr: ["0", null, null, "30px"],
    mb: ["20px", null, null, "0px"]
  },
  content: {
    h3: {
      color: "#0F2137",
      fontSize: "18px",
      lineHeight: 1,
      fontWeight: 700,
      mb: "10px",
      fontFamily: "DM Sans"
    },
    p: {
      fontSize: "15px",
      color: "#343D48",
      lineHeight: 1.73
    }
  }
};
