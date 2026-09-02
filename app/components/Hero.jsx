"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Image from "next/image";

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        pt: { xs: 12, md: 0 },
        background: "transparent",
        "@keyframes heroFadeUp": {
          from: {
            opacity: 0,
            transform: "translateY(22px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          {/* Hero text */}
          <Grid size={{ xs: 12, md: 7 }} order={{ xs: 2, md: 1 }}>
            <Box>
              {/* 1. Greeting */}
              <Typography
                variant="h6"
                sx={{
                  color: "primary.main",
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 600,
                  mb: 1,
                  fontSize: "1.1rem",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  animation:
                    "heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both",
                }}
              >
                Hi, my name is
              </Typography>

              {/* 2. Name */}
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                  fontWeight: 800,
                  mb: 1,
                  color: "text.primary",
                  animation:
                    "heroFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.22s both",
                }}
              >
                Rajasekar RK
              </Typography>

              {/* 3. Professional Title */}
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
                  fontWeight: 700,
                  color: "text.secondary",
                  mb: 3,
                  animation:
                    "heroFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.36s both",
                }}
              >
                MERN Full Stack Developer
              </Typography>

              {/* 4. Professional Description */}
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  maxWidth: "580px",
                  mb: 4,
                  lineHeight: 1.8,
                  animation:
                    "heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both",
                }}
              >
                Innovative Computer Science Engineering graduate specializing solely in MERN stack development with a passion for architectural efficiency. Highly skilled in engineering full-stack web applications by leveraging MongoDB, Express.js, React.js, and Node.js to bridge the gap between user-centric frontends and robust backend logic.
              </Typography>

              {/* 5. Call-to-actions */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{
                  mb: 5,
                  animation:
                    "heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => handleScrollTo("projects")}
                  sx={{
                    px: 3.5,
                    py: 1.5,
                    fontWeight: 600,
                    boxShadow: "0px 4px 18px rgba(0, 212, 199, 0.28)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0px 8px 26px rgba(0, 212, 199, 0.45)",
                    },
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={() => handleScrollTo("contact")}
                  sx={{
                    px: 3.5,
                    py: 1.5,
                    borderWidth: 1.5,
                    fontWeight: 600,
                    "&:hover": {
                      borderWidth: 1.5,
                      transform: "translateY(-2px)",
                      boxShadow: "0px 4px 18px rgba(0, 212, 199, 0.2)",
                    },
                  }}
                >
                  Contact Me
                </Button>
                <Button
                  variant="text"
                  color="secondary"
                  size="large"
                  component="a"
                  href="/resume.pdf"
                  download="Rajasekar_RK_Resume.pdf"
                  startIcon={<FileDownloadIcon />}
                  sx={{
                    display: { xs: "inline-flex", md: "none" },
                    px: 2,
                    py: 1.5,
                    "&:hover": {
                      transform: "translateY(-2px)",
                      backgroundColor: "rgba(0, 212, 199, 0.08)",
                    },
                  }}
                >
                  Download Resume
                </Button>
              </Stack>

              {/* 6. Social Links */}
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  alignItems: "center",
                  animation:
                    "heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", fontWeight: 500 }}
                >
                  Find me on:
                </Typography>
                <IconButton
                  component="a"
                  href="https://github.com/RKRajasekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.primary",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "primary.main",
                      borderColor: "rgba(0, 212, 199, 0.4)",
                      backgroundColor: "rgba(0, 212, 199, 0.08)",
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
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "primary.main",
                      borderColor: "rgba(0, 212, 199, 0.4)",
                      backgroundColor: "rgba(0, 212, 199, 0.08)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="mailto:ajairaja2004@gmail.com"
                  sx={{
                    color: "text.primary",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "primary.main",
                      borderColor: "rgba(0, 212, 199, 0.4)",
                      backgroundColor: "rgba(0, 212, 199, 0.08)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </Stack>
            </Box>
          </Grid>

          {/* 7. Profile Picture with Elegant Outer Glow and Light Sweep Ring */}
          <Grid
            size={{ xs: 12, md: 5 }}
            order={{ xs: 1, md: 2 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              animation:
                "heroFadeUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
            }}
          >
            {/* Outer Glowing Shimmer Ring Wrapper */}
            <Box
              sx={{
                position: "relative",
                p: "4px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, rgba(0, 212, 199, 0.85) 0%, rgba(58, 134, 255, 0.35) 50%, rgba(0, 212, 199, 0.85) 100%)",
                boxShadow: "0px 0px 35px rgba(0, 212, 199, 0.28)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                animation: "avatarPulse 5s ease-in-out infinite alternate",
                "@keyframes avatarPulse": {
                  "0%": {
                    boxShadow: "0px 0px 25px rgba(0, 212, 199, 0.22)",
                  },
                  "100%": {
                    boxShadow: "0px 0px 48px rgba(0, 212, 199, 0.45)",
                  },
                },
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0px 0px 58px rgba(0, 212, 199, 0.6)",
                  "& .profile-overlay": {
                    opacity: 1,
                  },
                  "& .profile-overlay button": {
                    transform: "scale(1)",
                  },
                },
              }}
            >
              {/* Inner Profile Box */}
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 236, sm: 276, md: 316 },
                  height: { xs: 236, sm: 276, md: 316 },
                  borderRadius: "50%",
                  backgroundColor: "#07111F",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/profile.png"
                  alt="Rajasekar RK"
                  fill
                  sizes="(max-width: 900px) 280px, 320px"
                  style={{ objectFit: "cover" }}
                  priority
                />
                {/* Desktop Hover Overlay */}
                <Box
                  className="profile-overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: { xs: "none", md: "flex" },
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(7, 17, 31, 0.8)",
                    backdropFilter: "blur(6px)",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                    zIndex: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    component="a"
                    href="/resume.pdf"
                    download="Rajasekar_RK_Resume.pdf"
                    startIcon={<FileDownloadIcon />}
                    sx={{
                      transform: "scale(0.9)",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  >
                    Download Resume
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Scroll Indicator */}
        <Box
          sx={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            opacity: 0.7,
            transition: "opacity 0.3s",
            "&:hover": { opacity: 1 },
          }}
          onClick={() => handleScrollTo("about")}
        >
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              mb: 1,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Scroll Down
          </Typography>
          <ArrowDownwardIcon
            sx={{
              color: "primary.main",
              animation: "bounce 2s infinite",
              "@keyframes bounce": {
                "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
                "40%": { transform: "translateY(-6px)" },
                "60%": { transform: "translateY(-3px)" },
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
