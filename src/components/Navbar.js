import React, { useState } from "react";
// 1. If you want scrolling, swap Link for ScrollLink later
import { Link } from "react-router-dom"; 
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu"; // Changed to Menu icon
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";

import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#222",
    margin: 0,
    position: "fixed", // Stays at the top like Samson's
  },
  title: {
    color: "tan",
    flexGrow: 1, // Pushes menu items to the right
  },
  // Mobile icon hidden on desktop
  menuIcon: {
    color: "tomato",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // Desktop links hidden on mobile
  desktopMenu: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  navLink: {
    color: "tan",
    textDecoration: "none",
    marginLeft: theme.spacing(3),
    fontSize: "1.1rem",
    "&:hover": {
      color: "tomato",
    },
  },
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Projects", listPath: "/Projects" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="User" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar>
            {/* 2. Brand Title */}
            <Typography variant="h5" className={classes.title}>
             SY
            </Typography>

            {/* 3. Horizontal Desktop Menu (Visible on MD screens up) */}
            <Box className={classes.desktopMenu}>
              {menuItems.map((item, i) => (
                <Typography
                  key={i}
                  component={Link}
                  to={item.listPath}
                  className={classes.navLink}
                >
                  {item.listText}
                </Typography>
              ))}
            </Box>

            {/* 4. Mobile Toggle Icon (Hidden on Desktop) */}
            <IconButton className={classes.menuIcon} onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* Adds spacing so content doesn't hide under fixed navbar */}
        <Toolbar /> 
      </Box>

      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;