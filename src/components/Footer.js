import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

// Icons
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    padding: "2rem 1rem",
    textAlign: "center",
  },
  bottomNavContainer: {
    background: "transparent",
    height: "50px",
    justifyContent: "center",
    marginBottom: "1rem",
  },
  actionRoot: {
    padding: "0 4px",
    minWidth: "auto",
    "& .MuiSvgIcon-root": {
      fill: "tan",
      fontSize: "1.6rem",
      transition: "all 0.3s ease",
      "&:hover": {
        fill: "tomato",
        transform: "scale(1.2)", // Elegant alternative to changing fontSize layout calculations
      },
    },
  },
  textRow: {
    color: "tan",
    marginTop: "0.5rem",
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap",
    opacity: 0.8,
  },
  link: {
    color: "tomato",
    textDecoration: "none",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#fff",
      textDecoration: "underline",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footerContainer}>
      {/* 1. Professional Social Icons (Passing anchor attributes directly) */}
      <BottomNavigation className={classes.bottomNavContainer}>
        <BottomNavigationAction 
          icon={<GitHub />} 
          className={classes.actionRoot} 
          component="a"
          href="https://github.com/sabayohannes"
          target="_blank"
          rel="noopener noreferrer"
        />
        <BottomNavigationAction 
          icon={<LinkedIn />} 
          className={classes.actionRoot} 
          component="a"
          href="https://www.linkedin.com/in/saba-egziyariya-060171185/" 
          target="_blank"
          rel="noopener noreferrer"
        />
        <BottomNavigationAction 
          icon={<EmailIcon />} 
          className={classes.actionRoot} 
          component="a"
          href="mailto:your.email@example.com"
        />
      </BottomNavigation>

      {/* 2. Structured Brand Info & Text Anchors */}
      <Typography variant="body2" style={{ color: "tan" }}>
        Designed & Built by Saba Yohannes — 2026
      </Typography>

      <Box className={classes.textRow}>
        <Typography variant="body2">
          Email:{" "}
          <a href="mailto:your.email@example.com" className={classes.link}>
           makidaqueens2@gmail.com
          </a>
        </Typography>
        <Typography variant="body2" style={{ opacity: 0.4 }}>|</Typography>
        <Typography variant="body2">
          Location: <span style={{ color: "tomato" }}>Addis Ababa, Ethiopia</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;