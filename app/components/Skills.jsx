"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import StorageIcon from "@mui/icons-material/Storage";
import CodeIcon from "@mui/icons-material/Code";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ConstructionIcon from "@mui/icons-material/Construction";
import GroupsIcon from "@mui/icons-material/Groups";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <CodeIcon sx={{ color: "primary.main", fontSize: "2rem" }} />,
      skills: ["JavaScript", "Python", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <IntegrationInstructionsIcon sx={{ color: "primary.main", fontSize: "2rem" }} />,
      skills: ["React.js", "Node.js", "Express.js", "mui (Material UI)", "Tailwind CSS"],
    },
    {
      title: "Databases",
      icon: <StorageIcon sx={{ color: "primary.main", fontSize: "2rem" }} />,
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools & Platforms",
      icon: <ConstructionIcon sx={{ color: "primary.main", fontSize: "2rem" }} />,
      skills: [
        "VS Code",
        "AntiGravity AI",
        "GitHub",
        "Postman",
        "AI Assistants (ChatGPT, Gemini, Claude)",
      ],
    },
    {
      title: "Soft Skills",
      icon: <GroupsIcon sx={{ color: "primary.main", fontSize: "2rem" }} />,
      skills: [
        "Leadership",
        "Teamwork",
        "Communication",
        "Adaptability",
        "Time Management",
      ],
    },
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "transparent",
        borderTop: "1px solid rgba(0, 212, 199, 0.05)",
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
              Technical & Professional Skills
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
              A comprehensive breakdown of my programming languages, frameworks, databases, developer tools, and core competencies.
            </Typography>
          </Box>
        </ScrollReveal>

        {/* Skills Grid with Staggered ScrollReveal */}
        <Grid container spacing={3.5} sx={{ justifyContent: "center" }}>
          {skillCategories.map((category, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <ScrollReveal delay={index * 100} distance={20} sx={{ height: "100%" }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "rgba(11, 23, 40, 0.7)",
                    backgroundImage:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 212, 199, 0.01) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: 3.5,
                    backdropFilter: "blur(12px)",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: "rgba(0, 212, 199, 0.35)",
                      boxShadow: "0 14px 35px rgba(0, 212, 199, 0.1)",
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Stack direction="row" spacing={2} sx={{ alignItems: "center", mb: 3 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          backgroundColor: "rgba(0, 212, 199, 0.08)",
                          border: "1px solid rgba(0, 212, 199, 0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 0 15px rgba(0, 212, 199, 0.1)",
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontFamily: "var(--font-outfit)",
                          fontWeight: 700,
                          color: "text.primary",
                          fontSize: "1.15rem",
                        }}
                      >
                        {category.title}
                      </Typography>
                    </Stack>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {category.skills.map((skill, skillIdx) => (
                        <Chip
                          key={skillIdx}
                          label={skill}
                          sx={{
                            backgroundColor: "rgba(0, 212, 199, 0.04)",
                            color: "text.primary",
                            fontWeight: 500,
                            border: "1px solid rgba(0, 212, 199, 0.12)",
                            fontSize: "0.85rem",
                            transition: "all 0.25s ease",
                            "&:hover": {
                              backgroundColor: "primary.main",
                              color: "background.default",
                              borderColor: "primary.main",
                              transform: "translateY(-2px)",
                              boxShadow: "0 4px 12px rgba(0, 212, 199, 0.3)",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
