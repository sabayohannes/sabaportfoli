import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import  {useState} from 'react';
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "transparent",
    minHeight: "80vh", 
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    paddingTop: "0px",
  },

  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    maxWidth: "600px",
    width: "90%",
    background: "rgba(35, 51, 51, 0.4)",
    backdropFilter: "blur(10px)",
    padding: "2rem",
    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
  successContainer: {
    padding: "3rem 1rem",
    textAlign: "center",
    animation: "$fadeIn 0.5s ease-in-out",
  },
  successIcon: {
    fontSize: "4rem",
    color: "tomato",
    marginBottom: "1rem",
  },
  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault(); 
     setIsSubmitted(true);
  };
  return (
    <Box   id="contact-section" component="div" className={classes.contactContainer}>
     <Grid container justifyContent="center">
      {!isSubmitted?(
        <Box component="form" className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h5" className={classes.heading}>
            Contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            name="name"
            variant="outlined"
            onChange={handleChange}
            inputProps={{ className: classes.input }}
          />
          <InputField
            fullWidth={true}
            label="Email"
            email="email"
            variant="outlined"
            type="email"
            onChange={handleChange}
            inputProps={{ className: classes.input }}
            className={classes.field}
          />
          <InputField
            fullWidth={true}
            label="Message"
            message="message"
            variant="outlined"
            multiline
            onChange={handleChange}
            rows={4}
            inputProps={{ className: classes.input }}
          />
          <Button
            variant="outlined"
            type="submit"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
          >
            Contact Me
          </Button>
        </Box>):(
        <Box className={classes.form} style={{ textAlign: "center", padding: "3rem 1rem" }}>
        <CheckCircleOutlineIcon className={classes.successIcon} />
        <Typography variant="h5" style={{ color: "#fff", marginBottom: "0.5rem" }}>
          Message Sent Successfully!
        </Typography>
        <Typography variant="body1" style={{ color: "tan", marginBottom: "1.5rem" }}>
          Thanks for reaching out, {formData.name}!
        </Typography>
        <Button 
          variant="text" 
          style={{ color: "tomato", textTransform: "none" }}
          onClick={() => {
            setFormData({ name: "", email: "", message: "" });
            setIsSubmitted(false);
          }}
        >
          Send another message
        </Button>
      </Box>
    )}
  </Grid>
</Box>
);
};
export default Contact;
