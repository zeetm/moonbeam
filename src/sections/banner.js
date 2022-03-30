import React from "react";
import { Box, Container, Heading, Image } from "theme-ui";
import diversity from "assets/diversity.png";

const Banner = () => {
  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.container}>
        <Heading as="h2">Moonbeam Trading Company</Heading>
        <Image src={diversity} sx={styles.greenTrade} alt="banner moc" />
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  banner: {
    overflow: "hidden",
    backgroundColor: "#F9FBFD",
    textAlign: "center",
    pt: [null, null, null, null, "130px"],
    h2: {
      fontSize: ["28px", null, null, "32px", "38px", "48px", "64px"],
      lineHeight: 1.25,
      color: "#02073E",
      fontWeight: 700,
      fontFamily: "DM Sans",
      width: "100%",
      maxWidth: ["100%", null, null, "55%", "500px", "640px", "851px"],
      mx: "auto",
      mt: "30px",
      mb: ["40px", null, null, "65px"]
    }
  },
  logo: {
    display: "block",
    borderRadius: "50%",
    mx: "auto",
    boxShadow: "0px 15px 35px rgba(65, 104, 139, 0.12)"
  },
  greenTrade: {
    display: "block",
    mx: "auto",
    mb: '48px',
    position: "relative",
    maxWidth: ["80%", null, null, "50%", null, "50%"],
    borderRadius: "8px"
  },
  container: {
    position: "relative",
    ".bannerIcon": {
      position: "absolute",
      display: ["none", null, null, null, "block"]
    }
  },
};
