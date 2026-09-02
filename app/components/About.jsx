"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const strengths = [
    "Leadership",
    "Teamwork",
    "Communication",
    "Adaptability",
    "Time Management",
    "Architectural Efficiency",
    "Optimized & Well-Documented Code",
    "Problem Solving",
  ];

  const interests = [
    "Full-Stack Web Development",
    "MERN Stack Architecture",
    "Frontend-Backend Integration",
    "Real-time Applications",
    "Database Engineering",
    "Clean Code Practices",
  ];

  return (
    <Box
      id="about"
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
              About Me
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
              Get to know my professional journey, academic background, and core strengths.
            </Typography>
          </Box>
        </ScrollReveal>

        <Grid container spacing={5}>
          {/* Left Column: Brief Summary & Quick Facts */}
          <Grid size={{ xs: 12, md: 6 }}>
            <ScrollReveal delay={100} distance={25}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  color: "primary.main",
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <CodeIcon /> Career Objective & Bio
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Innovative Computer Science Engineering graduate specializing solely in MERN stack development with a passion for architectural efficiency. Highly skilled in engineering full-stack web applications by leveraging MongoDB, Express.js, React.js, and Node.js to bridge the gap between user-centric frontends and robust backend logic.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}
              >
                Demonstrated strong problem-solving capabilities through the successful development of real-time web applications and hands-on projects. Focused on writing optimized, well-documented code and eager to deploy modern web solutions in a collaborative enterprise ecosystem.
              </Typography>

              {/* Quick Education Card */}
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: "rgba(11, 23, 40, 0.65)",
                  backgroundImage:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 212, 199, 0.01) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: 3,
                  backdropFilter: "blur(12px)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "rgba(0, 212, 199, 0.35)",
                    boxShadow: "0 8px 24px rgba(0, 212, 199, 0.1)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      backgroundColor: "rgba(0, 212, 199, 0.1)",
                      border: "1px solid rgba(0, 212, 199, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "primary.main",
                    }}
                  >
                    <SchoolIcon />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 700,
                        color: "text.primary",
                        fontSize: "1rem",
                      }}
                    >
                      Bachelor of Engineering
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Computer Science and Engineering
                    </Typography>
                    <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 600 }}>
                      Ponjesly College of Engineering | CGPA: 8.0
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </ScrollReveal>
          </Grid>

          {/* Right Column: Interests & Strengths */}
          <Grid size={{ xs: 12, md: 6 }}>
            <ScrollReveal delay={200} distance={25}>
              {/* Strengths */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 700,
                    color: "primary.main",
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <StarIcon /> Key Strengths
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                  {strengths.map((strength) => (
                    <Chip
                      key={strength}
                      label={strength}
                      variant="outlined"
                      sx={{
                        borderColor: "rgba(0, 212, 199, 0.2)",
                        color: "text.primary",
                        backgroundColor: "rgba(0, 212, 199, 0.03)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "primary.main",
                          backgroundColor: "rgba(0, 212, 199, 0.1)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.06)" }} />

              {/* Developer Interests */}
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 700,
                    color: "primary.main",
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <LightbulbIcon /> Developer Interests
                </Typography>
                <Grid container spacing={2}>
                  {interests.map((interest) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={interest}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                        }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            backgroundColor: "primary.main",
                            boxShadow: "0 0 6px rgba(0, 212, 199, 0.6)",
                          }}
                        />
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {interest}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </ScrollReveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
