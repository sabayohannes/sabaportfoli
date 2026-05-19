import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import { Button } from "@material-ui/core";
import Contact from "./Contact"; 
import Projects from "./Projects";
import Resume from "./Resume";
import About from "./About"
import Footer from "./Footer"

const useStyles = makeStyles((theme) => ({
  // Add this '@global' block at the top of your useStyles object
  '@global': {
    html: {
      scrollBehavior: 'smooth',
    },
  },

  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
    fontWeight: "bold",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    width: "100%",
    textAlign: "center",
    zIndex: 1,
    marginTop: "15vh",
    scrollMarginTop: "100px"
  },
  buttonContainer: {
    marginTop: "2rem",
    display: "flex",
    marginBottom: "4rem",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      gap: "1rem",
    },
  },
  button: {
    borderColor: "tomato",
    color: "tomato",
    padding: "10px 25px",
    textTransform: "none",
    fontSize: "1rem",
    borderRadius: "4px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 99, 71, 0.1)",
      borderColor: "tan",
      color: "tan",
      transform: "translateY(-3px)",
    },
  },

  
 

 
  featuresSection: {
    padding: "4rem 2rem",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    marginTop: "2rem",
  },
  featureItem: {
    background: "rgba(255, 255, 255, 0.03)",
    padding: "1.5rem",
    borderRadius: "12px",
    borderLeft: "4px solid tomato",
    transition: "background 0.3s ease",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.08)",
    },
  },
  featureTitle: {
    color: "tomato",
    fontWeight: "bold",
    fontSize: "1.1rem",
    marginBottom: "0.5rem",
  },
  featureDesc: {
    color: "tan",
    fontSize: "0.95rem",
    lineHeight: "1.5",
  },
  heading: {
      color: "tomato",
      textTransform: "uppercase"
  },
  contactSection: {
    padding: "6rem 2rem",
    textAlign: "center",
    marginTop: "4rem",
  },
  contactTitle: {
    color: "tomato",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  contactSubtitle: {
    color: "tan",
    maxWidth: "600px",
    margin: "0 auto 2.5rem auto",
    fontSize: "1.2rem",
  },
  contactButton: {
    // Matches your top buttons for consistency
    borderColor: "tomato",
    color: "tomato",
    padding: "10px 25px", 
    textTransform: "none",
    fontSize: "1rem", // Standardized font size
    borderRadius: "4px",
    borderWidth: "1px", // Thinner border to match the others
    transition: "all 0.3s ease",
    
    "&:hover": {
      backgroundColor: "rgba(255, 99, 71, 0.1)", // Subtle glow instead of solid fill
      borderColor: "tan",
      color: "tan",
      transform: "translateY(-3px)",
    },
  },
  footer: {
    padding: "2rem",
    color: "tan",
    textAlign: "center",
    fontSize: "0.9rem",
    opacity: 0.7,
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Box  id="home-section" className={classes.typedContainer} >
        <Grid container justifyContent="center">
          <Avatar className={classes.avatar} src={avatar} alt="Saba Yohannes" />
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Saba Yohannes"]} typeSpeed={40} />
        </Typography>

        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={["Full-Stack Developer", ".NET & React Expert"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>

        <Box className={classes.buttonContainer}>
          <Button variant="outlined" className={classes.button} component="a" href="#projects-section">
            View Work
          </Button>
          <Button variant="outlined" className={classes.button} component="a" href="https://drive.google.com/file/d/1x1p39C0rucEwTjeN4rAOkDGkNHQm7eWU/view?usp=sharing">
            Download CV
          </Button>
          <Button variant="outlined" className={classes.button} component="a" href="#contact-section">
            Get in Touch
          </Button>
        </Box>
      </Box>
        <About/>
        <Resume/>
        <Projects/>
          <Box className={classes.featuresSection}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Core Project Capabilities
        </Typography>
        <Box className={classes.featureGrid}>
          <Box className={classes.featureItem}>
            <Typography className={classes.featureTitle}>Role-Based Access (RBAC)</Typography>
            <Typography className={classes.featureDesc}>
              Secure authentication and authorization using .NET Identity.
            </Typography>
          </Box>
          <Box className={classes.featureItem}>
            <Typography className={classes.featureTitle}>Real-time Dashboard</Typography>
            <Typography className={classes.featureDesc}>
              Dynamic data visualization built with React.
            </Typography>
          </Box>
          <Box className={classes.featureItem}>
            <Typography className={classes.featureTitle}>RESTful API Architecture</Typography>
            <Typography className={classes.featureDesc}>
              High performance C# and .NET Core backend.
            </Typography>
          </Box>
          <Box className={classes.featureItem}>
            <Typography className={classes.featureTitle}>Responsive Management</Typography>
            <Typography className={classes.featureDesc}>
              Mobile-responsive interfaces for management on-the-go.
            </Typography>
          </Box>
          
        </Box>
      </Box>
      <Box className={classes.contactSection} paddingBottom="0px">
  <Typography variant="h3" className={classes.contactTitle}>
    Get In Touch
  </Typography>
  <Typography variant="body1" className={classes.contactSubtitle} >
    I'm currently looking for new opportunities in Full-Stack development. 
    Whether you have a question or just want to say hi, my inbox is always open!
  </Typography>
  <Button 
  variant="outlined" 
  className={classes.button} 
  href="#contact-section" 
>
    Say Hello
  </Button>
</Box>
<Box id="contact-section" className={classes.contactSection}>
  <Contact />
</Box>
<Footer />
    </>
  );
};

export default Header;