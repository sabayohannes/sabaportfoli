import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// Image Imports
import project1 from "../images/Asset.png";
import project12 from "../images/Assetdashboard.png";
import project4 from "../images/employee.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "transparent",
    paddingTop: "0px",
    paddingBottom: "50px",
    scrollMarginTop: "100px",
    textAlign: "center",
    marginBottom: "2.5rem",
  },
  cardContainer: {
    maxWidth: 345,
    height: "100%", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#233333", 
    border: "1px solid rgba(255, 255, 255, 0.1)", 
    borderRadius: "0", 
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      borderColor: "tomato",
      boxShadow: "0 0 20px rgba(255, 99, 71, 0.3)",
    },
    transition: "all 0.4s ease",
    [theme.breakpoints.down(750)]: {
      width: "100%",
      maxWidth: "500px",
    },
    
  },
  media: {
    height: 180, 
    objectFit: "cover", 
    filter: "grayscale(20%)",
    "&:hover": {
      filter: "grayscale(0%)",
    },
  },
  text: {
    color: "tan",
    fontWeight: "300",
    lineHeight: "1.8",
    fontSize: "1rem",
    maxWidth: "800px",
  },
  
  contentWrapper: {
    width: "90%",
    maxWidth: "1100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  projectName: {
    color: "tomato",
    fontWeight: "900",
    textTransform: "uppercase",
    fontSize: "1.1rem",
    letterSpacing: "1px",
  },
  projectDesc: {
    color: "tan",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 4, // Limits text to 4 lines for perfect alignment
    "-webkit-box-orient": "vertical",
    minHeight: "80px",
  },
}));

const projects = [
  {
    name: "Employee Management",
    description: `Architected an integrated employee operations platform. Engineered real-time Leave & Salary Tracking systems using React and Tailwind CSS for a highly responsive, enterprise-grade interface.`,
    image: project4,
  },
  {
    name: "Asset Management",
    description: `Robust full-stack system to automate lifecycle tracking of corporate hardware. Developed a high-performance backend using .NET Core and PostgreSQL with relational data integrity.`,
    image: project1,
  },
  {
    name: "Analytics Dashboard",
    description: `A specialized data-dense visualization tool built to monitor inventory health, maintenance schedules, and departmental asset distribution in real-time.`,
    image: project12,
  },
];

const Projects = () => {
  const classes = useStyles();
  return (
    <Box id="projects-section" component="div" className={classes.mainContainer}>
    <Typography 
      variant="h4" 
      align="center" 
      style={{ 
        color: "tomato",  
        marginBottom: "3rem", 
        fontWeight: "bold",
        lineHeight: "1.2" 
      }}
    >
      Featured <span style={{ color: "white" }}>projects</span>
      <br/> 
      <span 
        style={{ 
          fontSize: "1rem",          
          color: "tan",              
          textTransform: "lowercase", 
          fontWeight: "300",          
          letterSpacing: "1px"
        }}
      >
        some of projects i built recently
      </span>
    </Typography>
      {/* spacing={4} creates the gap between cards. alignItems stretch keeps them same height */}
      <Grid container justify="center" spacing={4} alignItems="stretch" style={{ padding: "0 5%" }}>
        {projects.map((project, i) => (
          <Grid item xs={12} sm={6} md={4} key={i} style={{ display: 'flex' }}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={project.name}
                  image={project.image}
                  className={classes.media}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom className={classes.projectName}>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" className={classes.projectDesc}>
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;