"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  const certifications = [
    {
      title: "MERN Stack Developer",
      issuer: "Karka Software Academy",
      date: "Jun 2026",
    },
    {
      title: "ChatGPT For Everyone",
      issuer: "HCL GUVI",
      date: "Aug 2025",
    },
    {
      title: "Prompt Engineering",
      issuer: "Infosys SpringBoard",
      date: "Jul 2025",
    },
    {
      title: "OpenCV",
      issuer: "Naan Mudhalvan",
      date: "Jul 2025",
    },
    {
      title: "Microsoft Office Essentials",
      issuer: "Naan Mudhalvan",
      date: "Jul 2025",
    },
  ];

  return (
    <Box
      id="education"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "transparent",
        borderBottom: "1px solid rgba(0, 212, 199, 0.05)",
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
              Education & Certifications
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
              My academic credentials and professional industry certifications.
            </Typography>
          </Box>
        </ScrollReveal>

        <Grid container spacing={4}>
          {/* Left Column: Education */}
          <Grid size={{ xs: 12, md: 6 }}>
            <ScrollReveal delay={100} distance={25}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  color: "primary.main",
                  mb: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <SchoolIcon /> Academic Background
              </Typography>

              <Card
                sx={{
                  p: { xs: 2, sm: 3 },
                  backgroundColor: "rgba(11, 23, 40, 0.7)",
                  backgroundImage:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 212, 199, 0.01) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: 3.5,
                  backdropFilter: "blur(12px)",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "rgba(0, 212, 199, 0.35)",
                    boxShadow: "0 12px 35px rgba(0, 212, 199, 0.1)",
                  },
                }}
              >
                <CardContent>
                  <Stack spacing={2.5}>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "var(--font-outfit)",
                          fontWeight: 700,
                          color: "text.primary",
                          fontSize: "1.2rem",
                        }}
                      >
                        Bachelor of Engineering
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "text.secondary", fontWeight: 600 }}
                      >
                        Computer Science and Engineering
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{ color: "primary.main", fontWeight: 600, fontSize: "1.1rem" }}
                    >
                      Ponjesly College of Engineering
                    </Typography>

                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={{ xs: 1, sm: 3 }}
                      divider={
                        <Divider
                          orientation="vertical"
                          flexItem
                          sx={{ display: { xs: "none", sm: "block" } }}
                        />
                      }
                    >
                      <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
                        <CalendarMonthIcon sx={{ fontSize: "0.95rem", color: "text.secondary" }} />
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          2022 - 2026
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
                        <LocationOnIcon sx={{ fontSize: "0.95rem", color: "text.secondary" }} />
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          Nagercoil, India
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 700 }}>
                        CGPA: 8.0
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </ScrollReveal>
          </Grid>

          {/* Right Column: Certifications */}
          <Grid size={{ xs: 12, md: 6 }}>
            <ScrollReveal delay={200} distance={25}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  color: "primary.main",
                  mb: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <WorkspacePremiumIcon /> Certifications
              </Typography>

              <Stack spacing={2}>
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    sx={{
                      backgroundColor: "rgba(11, 23, 40, 0.7)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                      borderRadius: 2.5,
                      backdropFilter: "blur(12px)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        transform: "translateX(6px)",
                        borderColor: "rgba(0, 212, 199, 0.4)",
                        boxShadow: "0 8px 24px rgba(0, 212, 199, 0.08)",
                      },
                    }}
                  >
                    <CardContent sx={{ py: "16px !important", px: 3 }}>
                      <Grid container sx={{ alignItems: "center" }} spacing={2}>
                        <Grid size={8}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontFamily: "var(--font-outfit)",
                              fontWeight: 700,
                              color: "text.primary",
                              fontSize: "1rem",
                              mb: 0.5,
                            }}
                          >
                            {cert.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            {cert.issuer}
                          </Typography>
                        </Grid>
                        <Grid size={4} sx={{ textAlign: "right" }}>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "primary.main",
                              fontWeight: 600,
                              backgroundColor: "rgba(0, 212, 199, 0.08)",
                              px: 1.5,
                              py: 0.5,
                              borderRadius: 1,
                              border: "1px solid rgba(0, 212, 199, 0.2)",
                            }}
                          >
                            {cert.date}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </ScrollReveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
