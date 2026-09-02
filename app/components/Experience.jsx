"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import BusinessIcon from "@mui/icons-material/Business";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  const experiences = [
    {
      role: "Java Intern",
      company: "JCS Infotech",
      duration: "2025",
      location: "Nagercoil, India",
      description:
        "Learned Java fundamentals, OOP concepts, collections, and JDBC. Built small applications using Java and SQL integration.",
      skills: ["Java", "SQL"],
    },
    {
      role: "Web Development Intern",
      company: "Shiro Software Solutions",
      duration: "2024",
      location: "Nagercoil, India",
      description:
        "Ambitious MERN Stack Developer skilled in crafting responsive web applications from scratch using React, Node.js, and MongoDB. Proven capability in frontend-backend integration, dynamic API handling, and efficient version control via Git.",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js"],
    },
  ];

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "transparent",
        borderTop: "1px solid rgba(0, 212, 199, 0.05)",
        borderBottom: "1px solid rgba(0, 212, 199, 0.05)",
      }}
    >
      <Container maxWidth="md">
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
              Work Experience
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
              My internships and professional training history where I applied full stack web development and object-oriented programming.
            </Typography>
          </Box>
        </ScrollReveal>

        {/* Experience Cards */}
        <Stack spacing={4} sx={{ position: "relative" }}>
          {/* Vertical Connecting Line for Desktop */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: 16, sm: 24, md: "50%" },
              transform: { md: "translateX(-50%)" },
              top: 0,
              bottom: 0,
              width: "2px",
              backgroundColor: "rgba(0, 212, 199, 0.2)",
              zIndex: 0,
              display: { xs: "none", sm: "block" },
            }}
          />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "flex-start",
                    md: isEven ? "flex-start" : "flex-end",
                  },
                  width: "100%",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Timeline Node Icon/Dot */}
                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: 16, sm: 24, md: "50%" },
                    transform: { xs: "translateX(-50%)", md: "translateX(-50%)" },
                    top: 24,
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor: "#07111F",
                    border: "3px solid",
                    borderColor: "primary.main",
                    boxShadow: "0 0 10px rgba(0, 212, 199, 0.5)",
                    display: { xs: "none", sm: "block" },
                  }}
                />

                {/* Card Container with ScrollReveal */}
                <Box
                  sx={{
                    width: { xs: "100%", sm: "calc(100% - 48px)", md: "45%" },
                    ml: { xs: 0, sm: 6, md: 0 },
                  }}
                >
                  <ScrollReveal delay={index * 150} distance={25}>
                    <Card
                      sx={{
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
                      <CardContent sx={{ p: 4 }}>
                        {/* Header */}
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{
                            fontFamily: "var(--font-outfit)",
                            fontWeight: 700,
                            color: "primary.main",
                            mb: 1.5,
                            fontSize: "1.25rem",
                          }}
                        >
                          {exp.role}
                        </Typography>

                        {/* Metadata stack */}
                        <Stack
                          direction={{ xs: "column", sm: "row" }}
                          spacing={{ xs: 1, sm: 2 }}
                          sx={{ mb: 2, flexWrap: "wrap" }}
                        >
                          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
                            <BusinessIcon sx={{ fontSize: "1rem", color: "text.secondary" }} />
                            <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 600 }}>
                              {exp.company}
                            </Typography>
                          </Stack>
                          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
                            <CalendarMonthIcon sx={{ fontSize: "1rem", color: "text.secondary" }} />
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                              {exp.duration}
                            </Typography>
                          </Stack>
                          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
                            <LocationOnIcon sx={{ fontSize: "1rem", color: "text.secondary" }} />
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                              {exp.location}
                            </Typography>
                          </Stack>
                        </Stack>

                        {/* Description */}
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary", mb: 3, lineHeight: 1.7 }}
                        >
                          {exp.description}
                        </Typography>

                        {/* Skills Used */}
                        <Box>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "text.primary",
                              fontWeight: 600,
                              display: "block",
                              mb: 1,
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                            }}
                          >
                            Technologies / Skills Used:
                          </Typography>
                          <Stack
                            direction="row"
                            spacing={0.5}
                            useFlexGap
                            sx={{ flexWrap: "wrap", gap: 0.5 }}
                          >
                            {exp.skills.map((skill, skillIdx) => (
                              <Chip
                                key={skillIdx}
                                label={skill}
                                size="small"
                                sx={{
                                  backgroundColor: "rgba(0, 212, 199, 0.04)",
                                  color: "text.secondary",
                                  border: "1px solid rgba(0, 212, 199, 0.12)",
                                  fontSize: "0.8rem",
                                }}
                              />
                            ))}
                          </Stack>
                        </Box>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
