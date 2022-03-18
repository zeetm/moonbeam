import React from "react";
import { Box, Container, Flex, Image, Text, Heading } from "theme-ui";
import JackpotCard from "components/cards/jackpot-card";
import jackpotImage from "assets/jackpot.png";
import jackpotImage1 from "assets/jackpot-1-1.png";
import jackpotImage2 from "assets/jackpot-1-2.png";
import classes from "./jackpot.module.css";

const JACKPOT_DATA = [
  {
    image: jackpotImage1,
    text: "Discover a wide variety of products.",
    heading: "Shopify",
    link: "https://moonbeam-trading-company.myshopify.com/"
  },
  {
    image: jackpotImage2,
    text: "Get your favourite products a great price",
    heading: "Online Auction",
    link: "https://www.storeys.ca/"
  }
];

const Jackpot = () => {
  return (
    <Box
      as="section"
      sx={styles.jackpot}
      id="online-store"
      className={classes.jackpotWrapper}
    >
      <Container>
        <Flex sx={styles.flex} className={classes.row}>
          <Box sx={styles.image} className={classes.imgWrapper}>
            <Image src={jackpotImage} alt="jackpot image" />
          </Box>
          <Box sx={styles.content} className={classes.content}>
            <Box sx={styles.heading} className={classes.header}>
              <Text as="span">Shop Online</Text>
              <Heading as="h3">Visit our online store</Heading>
            </Box>
            <Box sx={styles.jackpotCardBox} className={classes.features}>
              {JACKPOT_DATA.map(({ image, heading, text, link }, index) => (
                <JackpotCard
                  image={image}
                  heading={heading}
                  text={text}
                  key={index}
                  link={link && link}
                />
              ))}
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Jackpot;

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
    flex: ["0 0 100%", null, null, null, null, "0 0 37.5%"]
  },
  heading: {
    mb: "30px",
    pt: "60px",
    textAlign: ["center", null, null, null, null, "left"],
    pl: ["0", null, null, "30px"],
    maxWidth: ["80%", null, null, "100%"],
    mx: ["auto", null, null, "0"],
    span: {
      display: "block",
      fontSize: "18px",
      color: "primary",
      fontWeight: 700,
      lineHeight: 1,
      mb: "20px"
    },
    h3: {
      color: "#0F2137",
      fontSize: ["23px", null, null, null, "30px", "36px", "44px"],
      maxWidth: ["100%", null, null, null, null, "90%", "100%"],
      fontWeight: 700,
      letterSpacing: "-1.5px",
      lineHeight: 1.36
    }
  },
  jackpotCardBox: {
    display: ["grid", null, null, null, null, "block"],
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"]
  }
};
