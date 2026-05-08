import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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
  },
  buttonContainer: {
    marginTop: "2rem",
    display: "flex",
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
  aboutSection: {
    maxWidth: "800px",
    margin: "4rem auto 2rem auto",
    padding: "2rem",
    background: "rgba(35, 51, 51, 0.4)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "2rem auto",
      padding: "1.5rem",
    },
  },
  aboutTitle: {
    color: "tomato",
    marginBottom: "1rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  aboutText: {
    color: "tan",
    fontSize: "1.1rem",
    lineHeight: "1.8",
  },
  skillsSection: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap",
    padding: "2rem 1rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  skillCard: {
    flex: "1 1 200px",
    maxWidth: "380px",
    minWidth: "220px",
    background: "rgba(35, 51, 51, 0.4)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "15px",
    padding: "1.5rem",
    textAlign: "center",
    transition: "all 0.3s ease",
    [theme.breakpoints.down(740)]: {
      flex: "1 1 100%",
      maxWidth: "100%",
      display: "flex",
      flexDirection: "column", // Title on top, list below at 740px
      alignItems: "center",
      textAlign: "center",
    },
    "&:hover": {
      transform: "translateY(-10px)",
      borderColor: "tomato",
    },
  },
  skillList: {
    color: "tan",
    listStyle: "none",
    padding: 0,
    lineHeight: "1.8",
    margin: "1rem 0 0 0",
    [theme.breakpoints.down(740)]: {
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
      justifyContent: "center",
    }
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
      <Box className={classes.typedContainer}>
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
          <Button variant="outlined" className={classes.button} component={Link} to="/projects">
            View Work
          </Button>
          <Button variant="outlined" className={classes.button} component={Link} to="/resume">
            Download CV
          </Button>
          <Button variant="outlined" className={classes.button} component={Link} to="/contact">
            Get in Touch
          </Button>
        </Box>
      </Box>

      <Box className={classes.aboutSection}>
        <Typography variant="h5" className={classes.aboutTitle}>About Me</Typography>
        <Typography variant="body1" className={classes.aboutText}>
          Senior Full-Stack Developer specializing in building scalable web applications with .NET and React.
        </Typography>
      </Box>

      <Box className={classes.skillsSection}>
        <Box className={classes.skillCard}>
          <Typography variant="h5" className={classes.title}>Frontend</Typography>
          <ul className={classes.skillList}>
            <li>React.js & Redux</li>
            <li>Material UI / Mantis</li>
            <li>JavaScript (ES6+)</li>
            <li>Responsive Design</li>
          </ul>
        </Box>

        <Box className={classes.skillCard}>
          <Typography variant="h5" className={classes.title}>Backend</Typography>
          <ul className={classes.skillList}>
            <li>.NET Core / C#</li>
            <li>RESTful APIs</li>
            <li>Node.js</li>
            <li>Asset Management Logic</li>
          </ul>
        </Box>

        <Box className={classes.skillCard}>
          <Typography variant="h5" className={classes.title}>Database</Typography>
          <ul className={classes.skillList}>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>SQL Server</li>
            <li>Database Architecture</li>
          </ul>
        </Box>
      </Box>

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
      <Box className={classes.contactSection}>
  <Typography variant="h3" className={classes.contactTitle}>
    Get In Touch
  </Typography>
  <Typography variant="body1" className={classes.contactSubtitle}>
    I'm currently looking for new opportunities in Full-Stack development. 
    Whether you have a question or just want to say hi, my inbox is always open!
  </Typography>
  <Button 
    variant="outlined" 
    className={classes.contactButton}
    component={Link} 
    to="/contact"
  >
    Say Hello
  </Button>
</Box>

<Box component="footer" className={classes.footer}>
  <Typography variant="body2">
    Designed & Built by Saba Yohannes — 2026
  </Typography>
</Box>
    </>
  );
};

export default Header;