import React, { useState } from "react";
import { keyframes } from "@emotion/core";
import { Box, Container, Grid, Button, Text } from "theme-ui";
import BlockTitle from "components/block-title";
import PriceCard from "components/cards/price-card";
import fairTrade from "assets/ft.png";
import boxes from "assets/boxes.svg";
import handShake from "assets/hand-shake.svg";

const PRICE_MONTHLY_DATA = [
  {
    recommended: null,
    title: "About Fair Trade",
    icon: fairTrade,
    amount: "29.99/mo",
    options: [
      {
        status: true,
        label:
          "Fair trade is an approach to international trade that is centered on equitable partnerships, transparency, and respect. It seeks to empower marginalized producers by providing them with safe working conditions, fair pay, and a means to establish a sustainable business free from exploitation. Moonbeam Trading Company is highly committed to the principles that govern fair trade."
      }
    ]
  },
  {
    recommended: "",
    title: "Products From Our Fair Trade Partners",
    icon: boxes,
    amount: "49.99/mo",
    options: [
      {
        status: true,
        label: "Apparel"
      },
      {
        status: true,
        label: "Footwear"
      },
      {
        status: true,
        label: "Gift Items"
      },
      {
        status: true,
        label: "Handcrafted Artisan Products"
      },
      {
        status: true,
        label: "Oils and Creams"
      },
      {
        status: true,
        label: "Beads - Bags - Baskets"
      },
      {
        status: true,
        label: "Coffee"
      },
      {
        status: true,
        label: "Cocoa"
      },
      {
        status: true,
        label: "Jewelry and Accessories"
      }
    ]
  }
];

const PRICE_YEARLY_DATA = [
  {
    recommended: null,
    title: "About Our Partnerships",
    icon: handShake,
    amount: "99.99/yr",
    options: [
      {
        status: true,
        label:
          "At Moonbeam Trading Company we understand the importance of partnerships. We recognize the changing social, environmental and economic trends as we connect with like-minded partners to create sustainable economic and social benefits with each product and service we offer."
      }
    ]
  }
];

const Pricing = () => {
  const [plan, setPlan] = useState({
    active: "monthly",
    pricingPlan: PRICE_MONTHLY_DATA
  });

  const handlePlan = (plan) => {
    if (plan === "monthly") {
      setPlan({
        ...plan,
        active: "monthly",
        pricingPlan: PRICE_MONTHLY_DATA
      });
    }
    if (plan === "yearly") {
      setPlan({
        ...plan,
        active: "yearly",
        pricingPlan: PRICE_YEARLY_DATA
      });
    }
  };
  return (
    <Box as="section" sx={styles.pricing}>
      <Container id="products-and-partnerships">
        <BlockTitle title="Our Products and Partnerships" text="" />
        <Box sx={styles.btnWrap}>
          <Button
            onClick={() => handlePlan("monthly")}
            className={`${plan.active === "monthly" ? "active" : ""}`}
          >
            Products
          </Button>
          <Button
            onClick={() => handlePlan("yearly")}
            className={`${plan.active === "yearly" ? "active" : ""}`}
          >
            Partnerships
          </Button>
        </Box>
        <Grid sx={styles.grid}>
          {plan.pricingPlan.map((price, index) => (
            <PriceCard data={price} key={`${plan.active}-card--key${index}`} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  pricing: {
    pt: ["20px", null, null, null, "200px", null, "240px"],
    pb: ["80px", null, null, null, "80px", "100px", "140px"],
  },
  btnWrap: {
    width: "302px",
    height: "60px",
    mt: ["-20px", null, null, "0px"],
    mb: ["40px", null, null, "60px"],
    backgroundColor: "#F7F8FB",
    borderRadius: "5px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    p: "7px",
    mx: "auto",
    button: {
      backgroundColor: "rgba(0,0,0,0)",
      borderRadius: "5px",
      color: "#0F2137",
      letterSpacing: "-0.24px",
      fontSize: "16px",
      fontWeight: 500,
      position: "relative",
      outline: "none",
      fontFamily: "DM Sans",
      transition: "all 500ms ease",
      "&.active": {
        boxShadow: "0px 3px 3.8px rgba(38, 78, 118, 0.1)",
        backgroundColor: "#ffffff"
      },
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0)"
      }
    }
  },
  grid: {
    width: "100%",
    maxWidth: "960px",
    mx: ["auto"],
    gridGap: "30px",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    ".priceCard": {
      ".priceHeader": {
        animation: `${fadeIn} 0.8s linear`
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s linear`
      },
      ".priceAmount": {
        animation: `${fadeIn} 0.9s linear`
      },
      ".priceButton": {
        animation: `${fadeIn2} 0.7s linear`
      }
    }
  }
};
