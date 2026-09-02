"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id) => {
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
      component="footer"
      sx={{
        py: 6,
        backgroundColor: "rgba(7, 17, 31, 0.95)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(0, 212, 199, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo / Attribution */}
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                color: "primary.main",
                mb: 0.5,
              }}
            >
              Rajasekar RK
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              © {currentYear} | All Rights Reserved.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Stack
            direction="row"
            spacing={3}
            sx={{
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <Link
                key={item}
                component="button"
                onClick={() => handleNavClick(item.toLowerCase())}
                underline="hover"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {item}
              </Link>
            ))}
          </Stack>

          {/* Socials */}
          <Stack direction="row" spacing={1.5}>
            <IconButton
              component="a"
              href="https://github.com/RKRajasekar"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://linkedin.com/in/rajasekar-r-k-209a46375"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="mailto:ajairaja2004@gmail.com"
              size="small"
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
