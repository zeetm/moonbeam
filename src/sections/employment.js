import React from "react";
import { Box, Container, Flex, Image, Text, Heading } from "theme-ui";
import EmploymentCard from "components/cards/employment-card";
import employmentImage from "assets/employment.png"
import applyImage from "assets/apply.png"
import classes from "./employment.module.css";

const EMPLOYMENT_DATA = [
  {
    image: applyImage,
    text: "Apply now!",
    heading: "Data Scientist",
    link: "https://uploads.documents.cimpress.io/v1/uploads/1ef18f45-35c6-4a0d-a04f-f9d84fd3b2a3~110/original?tenant=vbu-digital"
  }
];

const Employment = () => {
  return (
    <Box
      as="section"
      sx={styles.jackpot}
      id="employment"
      className={classes.jackpotWrapper}
    >
      <Container>
        <Flex sx={styles.flex} className={classes.row}>
          <Box sx={styles.image} className={classes.imgWrapper}>
            <Image src={employmentImage} alt="jackpot image" />
          </Box>
          <Box sx={styles.content} className={classes.content}>
            <Box sx={styles.heading} className={classes.header}>
              <Text as="h1"> Join The Moonbeam Trading Company Team</Text>
              <br/>
              <Heading as="h3">At Moonbeam Trading Company we hire locally</Heading>
            </Box>
            <Box sx={styles.jackpotCardBox} className={classes.features}>
              {EMPLOYMENT_DATA.map(({ image, heading, text, link }, index) => (
                <EmploymentCard
                  image={image}
                  heading={heading}
                  text={text}
                  key={index}
                  link={link && link}
                />
              ))}
            </Box>
            <Box sx={styles.heading} className={classes.header}>
              <Heading as="h3">Contact us about our opportunities at Jobs@moonbeamtrading.ca</Heading>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Employment;

const styles = {
  jackpot: {
    pt: ["65px", null, null, null, "85px", null, "125px"]
  },
  flex: {
    flexWrap: "wrap"
  },
  image: {
    flex: ["0 0 100%", null, null, null, null, "0 0 62.5%"],
    img: {
      maxWidth: ["100%", null, null, null, null, null, "none"],
      float: "right"
    }
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
  }
};
