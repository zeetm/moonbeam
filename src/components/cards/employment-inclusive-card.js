import React from "react";
import { Box, Text, Heading, Image } from "theme-ui";
import classes from "./employment-card.module.css";
import { Link } from "components/link";


const Inclusive = ({link}) => {
  return (
<Box sx={styles.heading} className={classes.header}>
<Heading as="h3">Think you don't qualify for the above positions? Apply anyway using the form below! At Moonbeam, we hire from a wholistic perspective and we want to hear your story!</Heading>
<div>
<Link path="jobApplication" label="jobApplication">
<button className={classes.button}>APPLY HERE</button>
</Link>
</div>
</Box>
  )
}

export default Inclusive;

const styles = {
  jackpot: {
    pt: ["65px", null, null, null, "85px", null, "125px"]
  },
  flex: {
    flexWrap: "wrap"
  },
  content: {
    flex: ["0 0 100%", null, null, null, null, "0 0 37.5%"],
    fontFamily: "DM Sans"
  },
  heading: {
    color: "#000000",
    mb: "30px",
    // pt: "60px",
    textAlign: ["center", null, null, null, null, "left"],
    pl: ["0", null, null, "30px"],
    maxWidth: ["80%", null, null, "100%"],
    mx: ["auto", null, null, "0"],
    fontFamily: "DM Sans",
    span: {
      display: "block",
      fontSize: "18px",
      color: "primary",
      fontWeight: 700,
      lineHeight: 1,
      mb: "20px",
      fontFamily: "DM Sans"
    },
    h3: {
      color: "#000000",
      fontSize: ["23px", null, null, null, "30px", "36px", "44px"],
      maxWidth: ["100%", null, null, null, null, "90%", "100%"],
      fontWeight: 700,
      letterSpacing: "-1.5px",
      lineHeight: 1.36,
      fontFamily: "DM Sans"
    }
  },
  jackpotCardBox: {
    display: ["grid", null, null, null, null, "block"],
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    fontFamily: "DM Sans"
  },

};
