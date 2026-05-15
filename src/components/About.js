import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    background: "transparent",
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "50px",
    width: "100%",
    textAlign: "center",
    scrollMarginTop: "80px",
  },
  contentWrapper: {
    width: "90%",
    maxWidth: "1100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  skillsSection: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    gap: "1.5rem",
    width: "100%",
    margin: "3rem auto",
    [theme.breakpoints.down(750)]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  },
  skillCard: {
    flex: "1 1 30%",
    background: "rgba(35, 51, 51, 0.4)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "15px",
    padding: "1.5rem",
    transition: "all 0.4s ease",
    [theme.breakpoints.down(750)]: {
      width: "100%",
      maxWidth: "500px",
    },
    "&:hover": {
      borderColor: "tomato",
      boxShadow: "0 0 20px rgba(255, 99, 71, 0.3)",
    },
  },
  title: {
    color: "tomato",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    fontSize: "1.5rem",
  
  },
  text: {
    color: "tan",
    fontWeight: "300",
    lineHeight: "1.8",
    fontSize: "1rem",
    maxWidth: "800px",
  },
  // NEW PROGRESS BAR STYLES
  skillList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: "100%",
  },
  skillItem: {
    marginBottom: "1rem",
    textAlign: "left",
  },
  skillHeader: {
    display: "flex",
    justifyContent: "space-between",
    color: "tan",
    fontSize: "0.75rem", // Smaller, cleaner text
    marginBottom: "4px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  progressContainer: {
    width: "100%",
    height: "2px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "5px",
  },
  progressBar: {
    height: "100%",
    background: "tomato",
    borderRadius: "5px",
    boxShadow: "0 0 5px tomato",
  },
}));

// Internal Helper Component
const SkillLine = ({ name, percent, classes }) => (
  <div className={classes.skillItem}>
    <div className={classes.skillHeader}>
      <span>{name}</span>
      <span style={{ color: "tomato" }}>{percent}%</span>
    </div>
    <div className={classes.progressContainer}>
      <div className={classes.progressBar} style={{ width: `${percent}%` }} />
    </div>
  </div>
);

const About = () => {
  const classes = useStyles();

  return (
    <Box id="about-section" className={classes.aboutContainer}>
      <Typography variant="h4" style={{ color: "white", fontWeight: "bold", marginBottom: "2rem" }}>
        About <span style={{ color: "tomato" }}>Me</span>
      </Typography>
      <Box className={classes.contentWrapper}>
        <Typography variant="body1" className={classes.text}>
        software engineer dedicated to crafting  scalable web applications 
        <br /> with modern tech stacks.
         
        </Typography>

        <Box className={classes.skillsSection}>
          {/* Frontend Card */}
          <Box className={classes.skillCard}>
            <Typography variant="h6" className={classes.title}>Frontend</Typography>
            <div className={classes.skillList}>
              <SkillLine name="React.js" percent={90} classes={classes} />
              <SkillLine name="Material UI" percent={85} classes={classes} />
              <SkillLine name="JavaScript" percent={92} classes={classes} />
            </div>
          </Box>

          {/* Backend Card */}
          <Box className={classes.skillCard}>
            <Typography variant="h6" className={classes.title}>Backend</Typography>
            <div className={classes.skillList}>
              <SkillLine name=".NET Core" percent={88} classes={classes} />
              <SkillLine name="Node.js" percent={80} classes={classes} />
              <SkillLine name="C#" percent={90} classes={classes} />
            </div>
          </Box>

          {/* Database Card */}
          <Box className={classes.skillCard}>
            <Typography variant="h6" className={classes.title}>Database</Typography>
            <div className={classes.skillList}>
              <SkillLine name="PostgreSQL" percent={85} classes={classes} />
              <SkillLine name="MongoDB" percent={85} classes={classes} />
              <SkillLine name="SQL Server" percent={82} classes={classes} />
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;