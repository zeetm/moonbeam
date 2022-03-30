import React from "react";
import { Box, Text, Heading, Image } from "theme-ui";
import { Link } from "components/link";
import arrowAngle from "assets/arrow-angle.svg";
import DevicesIcon from "@mui/icons-material/Devices";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ServiceCard = ({ image, text, heading, path }) => {
  return (
    <Box sx={styles.serviceCard}>
      <Box sx={styles.image}>
        {heading === "Technology" && (
          <DevicesIcon
            sx={{
              width: 80,
              height: 80,
              fill: "#FFFFFF",
              bgcolor: "primary.main",
              borderRadius: 2,
              p: 1
            }}
          />
        )}
        {heading === "Trade - Import and Export" && (
          <ImportExportIcon
            sx={{
              width: 80,
              height: 80,
              fill: "#FFFFFF",
              bgcolor: "secondary.main",
              borderRadius: 2,
              p: 1
            }}
          />
        )}
        {heading === "Ecommerce" && (
          <ShoppingCartIcon
            sx={{
              width: 80,
              height: 80,
              fill: "#FFFFFF",
              bgcolor: "success.main",
              borderRadius: 2,
              p: 1
            }}
          />
        )}
        {heading === "Agri-Food" && (
          <AgricultureIcon
            sx={{
              width: 80,
              height: 80,
              fill: "#FFFFFF",
              bgcolor: "warning.main",
              borderRadius: 2,
              p: 1
            }}
          />
        )}
      </Box>
      <Box sx={styles.content}>
        <Heading as="h3">{heading}</Heading>
        <Text as="p">{text}</Text>
        <Link sx={styles.link} path={path}>
          Learn More <Image src={arrowAngle} alt="angle icon" />
        </Link>
      </Box>
    </Box>
  );
};

export default ServiceCard;

const styles = {
  serviceCard: {
    display: "flex",
    flexDirection: ["column", null, null, "row"],
    textAlign: ["center", null, null, "left"]
  },
  image: {
    flexShrink: 0
  },
  content: {
    ml: ["0", null, null, "30px"],
    mt: ["20px", null, null, "0px"],
    h3: {
      color: "#0F2137",
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: 1,
      fontFamily: "DM Sans"
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "#343D48",
      mt: "20px",
      mb: "20px",
      fontFamily: "DM Sans"
    }
  },
  link: {
    color: "#3183FF",
    fontSize: "16px",
    fontFamily: "DM Sans",
    fontWeight: 500,
    display: "inline-block",
    cursor: 'pointer',
    img: {
      ml: "5px"
    }
  }
};
