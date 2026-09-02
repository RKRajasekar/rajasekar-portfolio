"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = "Please enter a valid email address";
      }
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission
      setSnackbarMessage("Thank you! Your message has been sent successfully.");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setSnackbarMessage("Please correct the errors in the form.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ color: "primary.main" }} />,
      label: "Email",
      value: "ajairaja2004@gmail.com",
      link: "mailto:ajairaja2004@gmail.com",
    },
    {
      icon: <PhoneIcon sx={{ color: "primary.main" }} />,
      label: "Phone",
      value: "+91 6383048543",
      link: "tel:+916383048543",
    },
    {
      icon: <LocationOnIcon sx={{ color: "primary.main" }} />,
      label: "Location",
      value: "Nagercoil, India",
      link: null,
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "transparent",
        borderTop: "1px solid rgba(0, 212, 199, 0.05)",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title with ScrollReveal */}
        <ScrollReveal>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                color: "text.primary",
                mb: 2,
                position: "relative",
                display: "inline-block",
              }}
            >
              Get In Touch
              <Box
                sx={{
                  width: "60px",
                  height: "4px",
                  backgroundColor: "primary.main",
                  borderRadius: "2px",
                  margin: "8px auto 0",
                  boxShadow: "0 0 10px rgba(0, 212, 199, 0.5)",
                }}
              />
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", maxWidth: "600px", mx: "auto", mt: 2 }}
            >
              Feel free to contact me for internships, collaborations, or full stack developer opportunities.
            </Typography>
          </Box>
        </ScrollReveal>

        <Grid container spacing={5}>
          {/* Left Column: Contact Details */}
          <Grid size={{ xs: 12, md: 5 }}>
            <ScrollReveal delay={100} distance={25}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 700,
                    color: "text.primary",
                    mb: 3,
                  }}
                >
                  Contact Information
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}
                >
                  I am actively seeking full-time opportunities or internships. Please reach out to me via email or phone. I will respond to your inquiry as soon as possible.
                </Typography>

                {/* Info Details */}
                <Stack spacing={3} sx={{ mb: 5 }}>
                  {contactInfo.map((info, idx) => (
                    <Stack key={idx} direction="row" spacing={2} sx={{ alignItems: "center" }}>
                      <Box
                        sx={{
                          width: 46,
                          height: 46,
                          borderRadius: "50%",
                          backgroundColor: "rgba(0, 212, 199, 0.08)",
                          border: "1px solid rgba(0, 212, 199, 0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          boxShadow: "0 0 12px rgba(0, 212, 199, 0.1)",
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "text.secondary",
                            display: "block",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {info.label}
                        </Typography>
                        {info.link ? (
                          <Typography
                            variant="body1"
                            component="a"
                            href={info.link}
                            sx={{
                              color: "text.primary",
                              textDecoration: "none",
                              fontWeight: 550,
                              transition: "color 0.25s",
                              "&:hover": { color: "primary.main" },
                            }}
                          >
                            {info.value}
                          </Typography>
                        ) : (
                          <Typography
                            variant="body1"
                            sx={{ color: "text.primary", fontWeight: 550 }}
                          >
                            {info.value}
                          </Typography>
                        )}
                      </Box>
                    </Stack>
                  ))}
                </Stack>

                {/* Social Connections */}
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 700,
                    color: "text.primary",
                    mb: 2,
                    fontSize: "1rem",
                  }}
                >
                  Connect Socially
                </Typography>
                <Stack direction="row" spacing={1.5}>
                  <IconButton
                    component="a"
                    href="https://github.com/RKRajasekar"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "text.primary",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "primary.main",
                        backgroundColor: "rgba(0, 212, 199, 0.08)",
                        borderColor: "rgba(0, 212, 199, 0.4)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://linkedin.com/in/rajasekar-r-k-209a46375"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "text.primary",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "primary.main",
                        backgroundColor: "rgba(0, 212, 199, 0.08)",
                        borderColor: "rgba(0, 212, 199, 0.4)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Stack>
              </Box>
            </ScrollReveal>
          </Grid>

          {/* Right Column: Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <ScrollReveal delay={200} distance={25}>
              <Card
                sx={{
                  p: { xs: 2, sm: 4 },
                  backgroundColor: "rgba(11, 23, 40, 0.7)",
                  backgroundImage:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 212, 199, 0.01) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: 3.5,
                  backdropFilter: "blur(12px)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "var(--font-outfit)",
                      fontWeight: 700,
                      color: "text.primary",
                      mb: 3,
                    }}
                  >
                    Send a Message
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Stack spacing={3}>
                      <TextField
                        required
                        fullWidth
                        id="name"
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "rgba(255, 255, 255, 0.08)" },
                            "&:hover fieldset": { borderColor: "rgba(0, 212, 199, 0.5)" },
                            "&.Mui-focused fieldset": { borderColor: "primary.main" },
                          },
                        }}
                      />

                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "rgba(255, 255, 255, 0.08)" },
                            "&:hover fieldset": { borderColor: "rgba(0, 212, 199, 0.5)" },
                            "&.Mui-focused fieldset": { borderColor: "primary.main" },
                          },
                        }}
                      />

                      <TextField
                        required
                        fullWidth
                        id="message"
                        label="Your Message"
                        name="message"
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "rgba(255, 255, 255, 0.08)" },
                            "&:hover fieldset": { borderColor: "rgba(0, 212, 199, 0.5)" },
                            "&.Mui-focused fieldset": { borderColor: "primary.main" },
                          },
                        }}
                      />

                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<SendIcon />}
                        sx={{
                          py: 1.8,
                          fontWeight: 700,
                          boxShadow: "0 4px 18px rgba(0, 212, 199, 0.25)",
                          "&:hover": {
                            transform: "translateY(-2px)",
                            boxShadow: "0 8px 25px rgba(0, 212, 199, 0.45)",
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </ScrollReveal>
          </Grid>
        </Grid>

        {/* Success / Error Toast notification */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
            variant="filled"
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
