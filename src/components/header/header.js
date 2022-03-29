import { Container, Flex, jsx } from "theme-ui";
import { Link } from "components/link";
import { Link as ScrollLink } from "react-scroll";
import { DrawerProvider } from "contexts/drawer/drawer.provider";
import MobileDrawer from "./mobileDrawer";
import menuItems from "./header.data";
import classes from "./header.module.css";
import logo from "../../assets/moonbeamlogo.svg";
import Image from "components/image";

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={classes.nav}>
        <Container sx={styles.container}>
          <Image src={logo} width="100px" />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <ScrollLink
                activeClass="active"
                sx={styles.nav.navLink}
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                key={i}
              >
                {label}
              </ScrollLink>
            ))}
          </Flex>

          <Link
            path="/"
            ml={2}
            label="Contact Us"
            sx={styles.headerBtn}
            variant="buttons.primary"
          />

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    backgroundColor: "black",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    letterSpacing: "-0.1px",
    borderRadius: "5px",
    color: "#ffffff",
    transition: "all 300ms ease",
    padding: "6.5px 24px",
    display: ["none", null, null, null, "inline-block"],
    ml: ["0", null, null, "auto", "0"],
    mr: ["0", null, null, "20px", "0"],
    "&:hover": {
      color: "#fff",
      transform: "scale(1.02)",
      boxShadow: "md"
    }
  },
  header: {
    color: "text_white",
    fontWeight: "normal",
    py: "25px",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    minWidth: "100%",
    display: "flex",
    justifyContent: "space-evenly",

    "&.sticky": {
      backgroundColor: "background",
      color: "text",
      py: "15px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)"
    }
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: [null, null, null, null, null, null, "1390px"],
    "@media screen and (max-width: 960px)": {
      justifyContent: "space-between"
    }
  },
  nav: {
    mx: "auto",
    justifyContent: "space-between",
    minWidth: "60%",
    "@media screen and (max-width: 960px)": {
      display: "none"
    },
    navLink: {
      fontSize: "16px",
      // color: '#02073E',
      fontWeight: "600",
      cursor: "pointer",
      lineHeight: "1.2",
      display: ["none", null, null, "inline-block"],
      mr: "48px",
      transition: "500ms",
      ":last-child": {
        mr: "0"
      },
      "&:hover, &.active": {
        color: "primary"
      }
    }
  }
};
