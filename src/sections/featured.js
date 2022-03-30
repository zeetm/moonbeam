import React, { useState } from "react";
import { Box, Container, Button } from "theme-ui";
import { keyframes } from "@emotion/core";
import BlockTitle from "components/block-title";
import Image from "components/image";
import { AiFillUsb, AiOutlineSwap } from "react-icons/ai";
import { FaCarrot, FaShoppingCart } from "react-icons/fa";
import tech from "assets/tech.png";
import ecomerceImage from "assets/ecommerce.png";
import agriImage from "assets/agriFood.png";
import tradeImage from "assets/trade.png";
import FeaturedCard from "components/cards/featured-card";
import classes from './featured.module.css'



const Featured = () => {
  const [tab, setTab] = useState({
    active: "technology"
  });

  const handleTab = (tab) => {
    if (tab === "technology") {
      setTab({
        ...tab,
        active: "technology"
      });
    }
    if (tab === "trade") {
      setTab({
        ...tab,
        active: "trade"
      });
    }
    if (tab === "ecommerce") {
      setTab({
        ...tab,
        active: "ecommerce"
      });
    }
    if (tab === "agri") {
      setTab({
        ...tab,
        active: "agri"
      });
    }
  };
  return (
    <div id="more" className={classes.featured}>
      <Box as="section" sx={styles.featured}>
        <Container sx={styles.container}>
          <BlockTitle
            title="More About Our Services"
            text="Our team brings years of experience providing technology, trade, ecommerce and agri-food services you can trust"
          />
          <Box sx={styles.tabButtonTopWrapper}>
            <Box sx={styles.tabButtonWrapper}>
              <Button
                onClick={() => handleTab("technology")}
                className={`${tab.active === "technology" ? "active" : ""}`}
              >
                <AiFillUsb />
                Technology
              </Button>
              <Button
                onClick={() => handleTab("trade")}
                className={`${tab.active === "trade" ? "active" : ""}`}
              >
                <AiOutlineSwap />
                Trade
              </Button>
              <Button
                onClick={() => handleTab("ecommerce")}
                className={`${tab.active === "ecommerce" ? "active" : ""}`}
              >
                <FaShoppingCart />
                Ecommerce
              </Button>
              <Button
                onClick={() => handleTab("agri")}
                className={`${tab.active === "agri" ? "active" : ""}`}
              >
                <FaCarrot />
                Agri-Food
              </Button>
            </Box>
          </Box>
          <Box sx={styles.tabContent}>
            <div className={classes.contentWrapper}>
              {tab.active === "technology" && (
                <Image src={tech} alt="tab image" className="tabImage" />
              )}
              {tab.active === "technology" && (
                <FeaturedCard content={"We also have a passion for using technology to address current social problems while working collaboratively to alleviate societal issues. These challenges are complex and require dedication by multiple parties.\n We take on projects that create innovative solutions to address climate change, poverty, education, healthcare, senior isolation, public safety, farming and safe drinking water."}
                />
              )}
              {tab.active === "agri" && (
                <Image src={agriImage} alt="agri image" className="tabImage" />
              )}
              {tab.active === "agri" && (<FeaturedCard content="We work hard to grow chemical-free and hyper-local food all year round. Rapid climate change and localized food insecurity are just a few of the challenges we face today, which can be addressed in part through the use of advanced agricultural technology. Our team of technology and agri-business specialists grow our branded product, as well as assist urban and rural farmers to realize greater annual yields and improved profits." />)}
              {tab.active === "trade" && (
                <Image src={tradeImage} alt="tab image" className="tabImage" />
              )}
              {tab.active === "trade" && (<FeaturedCard content="Moonbeam Trading Company is increasing its presence in the thriving import and export business. Through distributorships and setting up new import/export relationships, knowledge exchange or the introduction of new freight technologies, we are expanding our services to focus on creating mutually beneficial commercial success." />)}
              {tab.active === "ecommerce" && (
                <Image
                  src={ecomerceImage}
                  alt="ecomm image"
                  className="tabImage"
                />
              )}
              {tab.active === "ecommerce" && (
                <FeaturedCard content="Our goal is to offer our customers a positive online shopping experience. Our sales and digital marketing team working with our ecommerce and drop shipping partners will allow us to enhance your shopping experience while growing our international ecommerce business to provide increased value and savings to all of our customers." />
              )}
            </div>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Featured;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const styles = {
  featured: {
    pt: ["20px", null, null, null, "80px", null, "100px"],
    backgroundColor: "#F9FAFC"
  },
  container: {
    position: "relative",
    mt: "40px"
  },
  tabButtonTopWrapper: {
    overflowY: ["hidden", null, null, null, null, "inherit"],
    overflowX: ["auto", null, null, null, null, "inherit"]
  },
  tabButtonWrapper: {
    width: ["700px", null, null, null, null, "100%"],
    mx: ["auto", null, null, null, null, "0"],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid rgba(1,7,13,.1)",
    mb: "35px",
    button: {
      display: "flex",
      alignItems: "center",
      pb: ["15px", null, null, null, "35px"],
      px: ["15px", null, null, null, "30px"],
      flexShrink: "0",
      border: 0,
      backgroundColor: "rgba(0,0,0,0)",
      color: "#0F2137",
      fontSize: ["14px", null, null, null, "18px"],
      fontWeight: 500,
      lineHeight: 1,
      position: "relative",
      transition: "all 500ms ease",
      svg: {
        fontSize: ["18px", null, null, null, "30px"],
        color: "#ADBDD0",
        opacity: 0.7,
        mr: "15px",
        transition: "all 500ms ease"
      },
      "&:hover, &.active": {
        backgroundColor: "rgba(0,0,0,0)",
        color: "#0F2137",
        svg: {
          color: "#0F2137",
          opacity: 1
        },
        "&::before": {
          transform: "scale(1,1)"
        }
      },
      "&::before": {
        content: "''",
        position: "absolute",
        bottom: "-2px",
        backgroundColor: "#0F2137",
        left: 0,
        width: "100%",
        height: "3px",
        transform: "scale(0,1)",
        transition: "transform 500ms ease"
      }
    }
  },
  tabContent: {
    minHeight: ["190px", null, "300px", "385px", null, "600px"],
    position: "relative",
    "&::before": {
      content: "''",
      width: "302px",
      height: "347px",
      position: "absolute",
      bottom: "-30px",
      right: "-40px",
      display: ["none", null, null, null, null, "block"]
    },
    ".tabImage": {
      position: "relative",
      animation: `${fadeIn} 0.8s linear`,
      width: '60%'
    },
    fontFamily: "DM Sans"
  }
};
