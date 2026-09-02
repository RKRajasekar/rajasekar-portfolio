"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const projects = [
    {
      name: "Snap Tech - Full Stack E-Commerce Platform",
      role: "MERN Stack Developer",
      date: "May 2026",
      image: "/images/snap_tech.png",
      description:
        "Snap Tech is a fully realized full-stack e-commerce platform leveraging the MERN stack to deliver a comprehensive online shopping solution. It integrates a responsive frontend with a robust backend for secure authentication, dynamic product management, and seamless user experiences.",
      features: [
        "Fully realized full-stack architecture (MongoDB, Express, React, Node.js).",
        "Responsive React frontend styled with Material UI and Tailwind CSS.",
        "Robust Node.js backend handling secure user authentication.",
        "Dynamic product catalog and shopping cart management.",
        "Seamless API integration and frontend-backend data flow.",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "mui", "Tailwind CSS"],
      github: "https://github.com/RKRajasekar",
      demo: "https://snaptech24.duckdns.org/", // Live Website URL explicitly provided
    },
    {
      name: "An Interactive Home Decor E-Commerce Interface",
      role: "Frontend Developer",
      date: "2025",
      image: "/images/home_decor.png",
      description:
        "Developed a responsive Furniture E-commerce frontend designed to optimize the online shopping experience. This project highlights frontend performance, sleek typography, responsive layouts, and user-centric interaction models.",
      features: [
        "Interactive and modern furniture e-commerce storefront.",
        "Dynamic product cataloging and filter system.",
        "Smooth page transitions and routing for fluid navigation.",
        "Responsive UI/UX optimized for mobile, tablet, and desktop screens.",
      ],
      technologies: ["React.js", "HTML", "CSS", "Tailwind CSS"],
      github: "https://github.com/RKRajasekar",
      demo: "#",
    },
  ];

  return (
    <Box
      id="projects"
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
              Featured Projects
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
              sx={{
                color: "text.secondary",
                maxWidth: "600px",
                mx: "auto",
                mt: 2,
              }}
            >
              A showcase of my recent full-stack and frontend development projects, demonstrating production architecture, robust APIs, and interactive interfaces.
            </Typography>
          </Box>
        </ScrollReveal>

        {/* Projects List with Staggered ScrollReveal */}
        <Grid container spacing={5}>
          {projects.map((project, index) => (
            <Grid size={12} key={index}>
              <ScrollReveal delay={index * 150} distance={30}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    overflow: "hidden",
                    backgroundColor: "rgba(11, 23, 40, 0.72)",
                    backgroundImage:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 212, 199, 0.015) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.07)",
                    borderRadius: 4,
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: "rgba(0, 212, 199, 0.4)",
                      boxShadow: "0 18px 45px rgba(0, 212, 199, 0.12)",
                    },
                  }}
                >
                  {/* Visual Area */}
                  <Box
                    sx={{
                      position: "relative",
                      width: { xs: "100%", md: "50%" },
                      minHeight: { xs: "250px", sm: "320px", md: "100%" },
                      overflow: "hidden",
                      "&:hover .project-overlay": {
                        opacity: 1,
                      },
                      "&:hover .project-image": {
                        transform: "scale(1.04)",
                      },
                    }}
                  >
                    <Image
                      className="project-image"
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "top",
                        transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      priority={index === 0}
                    />

                    {/* Role Badge */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        background: "rgba(7, 17, 31, 0.88)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(0, 212, 199, 0.25)",
                        color: "primary.main",
                        px: 2,
                        py: 0.6,
                        borderRadius: 2,
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        fontFamily: "var(--font-outfit)",
                        zIndex: 3,
                        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      {project.role}
                    </Box>

                    {/* Desktop Hover Overlay */}
                    <Box
                      className="project-overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: { xs: "none", md: "flex" },
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 2,
                        backgroundColor: "rgba(7, 17, 31, 0.82)",
                        backdropFilter: "blur(6px)",
                        opacity: 0,
                        transition: "opacity 0.35s ease-in-out",
                        zIndex: 2,
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        component="a"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<GitHubIcon />}
                        sx={{
                          boxShadow: "0 4px 14px rgba(0, 212, 199, 0.3)",
                        }}
                      >
                        Codebase
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        component="a"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<LaunchIcon />}
                        sx={{
                          borderWidth: 2,
                          backgroundColor: "rgba(7, 17, 31, 0.6)",
                          "&:hover": { borderWidth: 2, backgroundColor: "rgba(0, 212, 199, 0.1)" },
                        }}
                      >
                        Live Demo
                      </Button>
                    </Box>
                  </Box>

                  {/* Content Area */}
                  <CardContent
                    sx={{
                      width: { xs: "100%", md: "50%" },
                      p: { xs: 3, sm: 4, md: 5 },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Stack
                        direction="row"
                        sx={{
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{
                            fontFamily: "var(--font-outfit)",
                            fontWeight: 700,
                            color: "text.primary",
                            fontSize: { xs: "1.25rem", sm: "1.45rem" },
                          }}
                        >
                          {project.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "primary.main",
                            fontWeight: 600,
                            backgroundColor: "rgba(0, 212, 199, 0.08)",
                            px: 1.5,
                            py: 0.4,
                            borderRadius: 1,
                            border: "1px solid rgba(0, 212, 199, 0.15)",
                          }}
                        >
                          {project.date}
                        </Typography>
                      </Stack>

                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", mb: 3, lineHeight: 1.7 }}
                      >
                        {project.description}
                      </Typography>

                      {/* Features list */}
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "text.primary",
                          fontWeight: 600,
                          mb: 1.5,
                          fontFamily: "var(--font-outfit)",
                          display: "flex",
                          alignItems: "center",
                          gap: 0.8,
                        }}
                      >
                        Key Features:
                      </Typography>
                      <List disablePadding sx={{ mb: 3 }}>
                        {project.features.map((feature, featIdx) => (
                          <ListItem
                            key={featIdx}
                            disableGutters
                            sx={{ py: 0.4, alignItems: "flex-start" }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 26,
                                color: "primary.main",
                                mt: "3px",
                              }}
                            >
                              <CheckCircleIcon sx={{ fontSize: "1.05rem" }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: "text.secondary",
                                    lineHeight: 1.5,
                                    fontSize: "0.875rem",
                                  }}
                                >
                                  {feature}
                                </Typography>
                              }
                            />
                          </ListItem>
                        ))}
                      </List>

                      {/* Technologies */}
                      <Box sx={{ mb: 4 }}>
                        <Stack
                          direction="row"
                          spacing={1}
                          useFlexGap
                          sx={{ flexWrap: "wrap", gap: 1 }}
                        >
                          {project.technologies.map((tech, techIdx) => (
                            <Chip
                              key={techIdx}
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor: "rgba(0, 212, 199, 0.06)",
                                color: "primary.main",
                                borderColor: "rgba(0, 212, 199, 0.2)",
                                borderWidth: "1px",
                                borderStyle: "solid",
                                fontWeight: 600,
                                fontSize: "0.8rem",
                              }}
                            />
                          ))}
                        </Stack>
                      </Box>
                    </Box>

                    {/* Dedicated Action Buttons (Visible for both desktop & mobile) */}
                    <CardActions sx={{ p: 0, gap: 2, flexWrap: "wrap", pt: 2, borderTop: "1px solid rgba(255, 255, 255, 0.04)" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        component="a"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<LaunchIcon />}
                        sx={{
                          px: 3,
                          py: 1,
                          fontWeight: 600,
                          boxShadow: "0 4px 14px rgba(0, 212, 199, 0.25)",
                          "&:hover": {
                            boxShadow: "0 6px 20px rgba(0, 212, 199, 0.45)",
                          },
                        }}
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        component="a"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<GitHubIcon />}
                        sx={{
                          px: 2.5,
                          py: 1,
                          borderWidth: 1.5,
                          "&:hover": { borderWidth: 1.5 },
                        }}
                      >
                        Codebase
                      </Button>
                    </CardActions>
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
