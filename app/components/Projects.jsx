"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const projects = [
    {
      name: "NextBus – Premium Bus & Cab Booking Platform",
      role: "Bus & Cab Booking Platform",
      category: "Bus & Cab Booking Platform",
      date: "2026",
      image: "/images/nextbus.png",
      description:
        "Premium bus and cab booking platform with route search, seat selection, ticket booking, offers, and live travel information.",
      features: [
        "Comprehensive bus and cab booking with route search and dynamic filtering.",
        "Interactive seat selection layout with instant digital ticket booking.",
        "Access to government bus services and verified travel operator fleets.",
        "Promotional travel offers, coupons, and journey discounts.",
        "Live trip and bus information tracking with dedicated 'My Tickets' management.",
      ],
      technologies: ["Next.js", "React.js", "Material UI", "JavaScript", "Responsive Design"],
      github: "https://github.com/RKRajasekar",
      demo: "https://nextbus-eta.vercel.app/",
    },
    {
      name: "King Barbar Shop - Barber & Salon Booking Platform",
      role: "Full Stack Developer",
      date: "2026",
      image: "/images/king_barbar_shop.png",
      description:
        "King Barbar Shop is a modern, full-stack luxury barber and salon booking web application where customers can explore salon services, browse master hairstyles, and make appointments through an intuitive online booking experience.",
      features: [
        "Full-stack salon booking platform with strict client authentication before reservations.",
        "Interactive service exploration, hairstyle lookbook, and master artisan profiles.",
        "Real-time appointment scheduling with customized date & time pickers.",
        "Robust PostgreSQL database architecture managed with Prisma ORM and Express REST APIs.",
        "Responsive, luxury dark-aesthetic UI engineered with React.js and Material UI.",
      ],
      technologies: ["React.js", "JavaScript", "Material UI", "Node.js", "Express", "PostgreSQL", "Prisma"],
      github: "https://github.com/RKRajasekar/king-barbar-shop",
      demo: "https://king-barbar-shop-p6zi.vercel.app/",
    },
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

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDraggingState, setIsDraggingState] = useState(false);
  const total = projects.length;

  // Swipe / Drag handling refs
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchCurrentX = useRef(0);
  const touchCurrentY = useRef(0);
  const touchStartTime = useRef(0);
  const isHorizontalSwipe = useRef(null); // null = undetermined, true = swiping carousel, false = scrolling page
  const isMouseDown = useRef(false);
  const mouseStartX = useRef(0);
  const mouseCurrentX = useRef(0);
  const hasDragged = useRef(false);
  const lastWheelTime = useRef(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleSelect = (idx) => {
    setActiveIndex(idx);
  };

  // Auto rotation with pause when hovered or interacting
  useEffect(() => {
    if (isPaused || isDraggingState) return;

    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, isDraggingState, handleNext]);

  // Mouse wheel & trackpad scroll handler
  const handleWheel = (e) => {
    // Only handle deliberate horizontal trackpad swiping (deltaX) or Shift+wheel
    // so normal vertical page scrolling over the images remains 100% smooth and glitch-free!
    const isHorizontalTrackpad = Math.abs(e.deltaX) > 16 && Math.abs(e.deltaX) > Math.abs(e.deltaY);
    const isShiftVerticalWheel = e.shiftKey && Math.abs(e.deltaY) > 16;

    if (isHorizontalTrackpad || isShiftVerticalWheel) {
      const delta = isHorizontalTrackpad ? e.deltaX : e.deltaY;
      const now = Date.now();
      if (now - lastWheelTime.current > 420) {
        lastWheelTime.current = now;
        if (delta > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }
  };

  // Touch handlers with natural swipe and flick support on mobile
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchCurrentX.current = e.touches[0].clientX;
    touchCurrentY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
    isHorizontalSwipe.current = null;
    hasDragged.current = false;
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    touchCurrentX.current = currentX;
    touchCurrentY.current = currentY;

    const diffX = currentX - touchStartX.current;
    const diffY = currentY - touchStartY.current;

    // Disambiguate intention on initial movement
    if (isHorizontalSwipe.current === null) {
      if (Math.abs(diffX) > 6 || Math.abs(diffY) > 6) {
        if (Math.abs(diffX) >= Math.abs(diffY) * 0.7) {
          // Horizontal swipe gesture
          isHorizontalSwipe.current = true;
          setIsDraggingState(true);
        } else {
          // Vertical gesture: preserve native page scroll cleanly
          isHorizontalSwipe.current = false;
        }
      }
    }

    // Live tactile drag tracking during horizontal swipe
    if (isHorizontalSwipe.current === true) {
      hasDragged.current = true;
      const clampedOffset = Math.max(-150, Math.min(150, diffX));
      setDragOffset(clampedOffset);
    }
  };

  const handleTouchEnd = () => {
    const diffX = touchCurrentX.current - touchStartX.current;
    const diffY = touchCurrentY.current - touchStartY.current;
    const duration = Date.now() - touchStartTime.current;
    const isFlick = duration < 300 && Math.abs(diffX) > 20;

    if (
      isHorizontalSwipe.current === true ||
      (Math.abs(diffX) > Math.abs(diffY) && (Math.abs(diffX) > 28 || isFlick))
    ) {
      if (diffX < 0) {
        handleNext();
      } else if (diffX > 0) {
        handlePrev();
      }
    }

    setDragOffset(0);
    setIsDraggingState(false);
    isHorizontalSwipe.current = null;
    setTimeout(() => {
      hasDragged.current = false;
      setIsPaused(false);
    }, 300);
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsPaused(true);
    isMouseDown.current = true;
    mouseStartX.current = e.clientX;
    mouseCurrentX.current = e.clientX;
    hasDragged.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown.current) return;
    mouseCurrentX.current = e.clientX;
    const diffX = e.clientX - mouseStartX.current;
    if (Math.abs(diffX) > 5) {
      hasDragged.current = true;
      setIsDraggingState(true);
      const clampedOffset = Math.max(-150, Math.min(150, diffX));
      setDragOffset(clampedOffset);
    }
  };

  const handleMouseUp = (e) => {
    if (!isMouseDown.current) return;
    isMouseDown.current = false;
    const diffX = e.clientX - mouseStartX.current;
    if (Math.abs(diffX) > 28) {
      if (diffX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setDragOffset(0);
    setIsDraggingState(false);
    setTimeout(() => {
      hasDragged.current = false;
      setIsPaused(false);
    }, 300);
  };

  const handleMouseLeave = () => {
    if (isMouseDown.current) {
      isMouseDown.current = false;
      const diffX = mouseCurrentX.current - mouseStartX.current;
      if (Math.abs(diffX) > 28) {
        if (diffX < 0) handleNext();
        else handlePrev();
      }
      setDragOffset(0);
      setIsDraggingState(false);
      setTimeout(() => {
        hasDragged.current = false;
        setIsPaused(false);
      }, 300);
    } else {
      setIsPaused(false);
    }
  };

  // Compute 3D circular position offset (-1, 0, 1, 2)
  const getPositionOffset = (index) => {
    let diff = index - activeIndex;
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "transparent",
        borderBottom: "1px solid rgba(0, 212, 199, 0.05)",
        position: "relative",
        overflow: "hidden", // Prevents horizontal page scrollbars from 3D transforms
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title with ScrollReveal */}
        <ScrollReveal>
          <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
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

        {/* 3D Rotational Carousel Area */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Arrow: Left */}
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Project"
            sx={{
              position: "absolute",
              left: { xs: 2, sm: 8, md: 16 },
              top: { xs: "85px", sm: "110px", md: "50%" },
              transform: "translateY(-50%)",
              zIndex: 35,
              backgroundColor: "rgba(7, 17, 31, 0.88)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(0, 212, 199, 0.35)",
              color: "primary.main",
              width: { xs: 34, sm: 42, md: 48 },
              height: { xs: 34, sm: 42, md: 48 },
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5)",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              "&:hover": {
                backgroundColor: "rgba(0, 212, 199, 0.2)",
                borderColor: "primary.main",
                transform: "translateY(-50%) scale(1.1)",
                boxShadow: "0 0 20px rgba(0, 212, 199, 0.6)",
              },
              "&:active": {
                transform: "translateY(-50%) scale(0.95)",
              },
            }}
          >
            <ChevronLeftIcon sx={{ fontSize: { xs: 20, sm: 26, md: 30 } }} />
          </IconButton>

          {/* Navigation Arrow: Right */}
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Project"
            sx={{
              position: "absolute",
              right: { xs: 2, sm: 8, md: 16 },
              top: { xs: "85px", sm: "110px", md: "50%" },
              transform: "translateY(-50%)",
              zIndex: 35,
              backgroundColor: "rgba(7, 17, 31, 0.88)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(0, 212, 199, 0.35)",
              color: "primary.main",
              width: { xs: 34, sm: 42, md: 48 },
              height: { xs: 34, sm: 42, md: 48 },
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5)",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              "&:hover": {
                backgroundColor: "rgba(0, 212, 199, 0.2)",
                borderColor: "primary.main",
                transform: "translateY(-50%) scale(1.1)",
                boxShadow: "0 0 20px rgba(0, 212, 199, 0.6)",
              },
              "&:active": {
                transform: "translateY(-50%) scale(0.95)",
              },
            }}
          >
            <ChevronRightIcon sx={{ fontSize: { xs: 20, sm: 26, md: 30 } }} />
          </IconButton>

          {/* 3D Perspective Stage */}
          <Box
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            sx={{
              position: "relative",
              width: "100%",
              minHeight: { xs: "530px", sm: "510px", md: "470px" },
              perspective: { xs: "900px", sm: "1100px", md: "1400px" },
              perspectiveOrigin: "center center",
              transformStyle: "preserve-3d",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              touchAction: "pan-y",
              userSelect: "none",
              WebkitUserSelect: "none",
              cursor: isDraggingState ? "grabbing" : "grab",
              py: 1,
            }}
          >
            {projects.map((project, index) => {
              const offset = getPositionOffset(index);
              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;
              const isSide = isLeft || isRight;

              // Live gesture shift with tactile tracking
              const liveShift = isDraggingState ? dragOffset : 0;

              let transformStyle = {};
              let zIndexVal = 1;
              let opacityVal = 0;
              let filterVal = "brightness(0.5)";
              let pointerEventsVal = "none";

              if (isCenter) {
                transformStyle = {
                  transform: {
                    xs: `translate3d(${liveShift * 0.82}px, 0, 0) scale(1) rotateY(${-liveShift * 0.05}deg)`,
                    sm: `translate3d(${liveShift * 0.78}px, 0, 0) scale(1) rotateY(${-liveShift * 0.045}deg)`,
                    md: `translate3d(${liveShift * 0.72}px, 0, 0) scale(1) rotateY(${-liveShift * 0.04}deg)`,
                  },
                };
                zIndexVal = 20;
                opacityVal = 1;
                filterVal = "brightness(1)";
                pointerEventsVal = "auto";
              } else if (isLeft) {
                transformStyle = {
                  transform: {
                    xs: `translate3d(calc(-66% + ${liveShift * 0.4}px), 0, -110px) scale(0.78) rotateY(18deg)`,
                    sm: `translate3d(calc(-48% + ${liveShift * 0.4}px), 0, -140px) scale(0.84) rotateY(22deg)`,
                    md: `translate3d(calc(-52% - 24px + ${liveShift * 0.4}px), 0, -180px) scale(0.86) rotateY(24deg)`,
                  },
                };
                zIndexVal = 10;
                opacityVal = 0.45;
                filterVal = "brightness(0.7)";
                pointerEventsVal = "auto";
              } else if (isRight) {
                transformStyle = {
                  transform: {
                    xs: `translate3d(calc(66% + ${liveShift * 0.4}px), 0, -110px) scale(0.78) rotateY(-18deg)`,
                    sm: `translate3d(calc(48% + ${liveShift * 0.4}px), 0, -140px) scale(0.84) rotateY(-22deg)`,
                    md: `translate3d(calc(52% + 24px + ${liveShift * 0.4}px), 0, -180px) scale(0.86) rotateY(-24deg)`,
                  },
                };
                zIndexVal = 10;
                opacityVal = 0.45;
                filterVal = "brightness(0.7)";
                pointerEventsVal = "auto";
              } else {
                transformStyle = {
                  transform: "translate3d(0, 0, -320px) scale(0.7) rotateY(0deg)",
                };
                zIndexVal = 2;
                opacityVal = 0;
                filterVal = "brightness(0.4)";
                pointerEventsVal = "none";
              }

              return (
                <Card
                  key={index}
                  onClick={() => {
                    if (isSide && !hasDragged.current) {
                      handleSelect(index);
                    }
                  }}
                  sx={{
                    position: "absolute",
                    width: { xs: "92%", sm: "82%", md: "780px", lg: "860px" },
                    maxWidth: "860px",
                    minHeight: { xs: "auto", sm: "460px", md: "450px" },
                    maxHeight: { xs: "530px", sm: "none" },
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    overflow: "hidden",
                    backgroundColor: "rgba(11, 23, 40, 0.78)",
                    backgroundImage:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(0, 212, 199, 0.02) 100%)",
                    border: "1px solid",
                    borderColor: isCenter
                      ? "rgba(0, 212, 199, 0.45)"
                      : "rgba(255, 255, 255, 0.08)",
                    borderRadius: 4,
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    boxShadow: isCenter
                      ? "0 20px 55px rgba(0, 212, 199, 0.22), 0 0 35px rgba(0, 212, 199, 0.12)"
                      : "0 10px 30px rgba(0, 0, 0, 0.45)",
                    transition: isDraggingState
                      ? "transform 0.06s linear, opacity 0.2s ease"
                      : "transform 0.6s cubic-bezier(0.2, 0.85, 0.3, 1), opacity 0.5s ease, filter 0.5s ease, box-shadow 0.5s ease, border-color 0.35s ease",
                    willChange: "transform, opacity",
                    zIndex: zIndexVal,
                    opacity: opacityVal,
                    filter: filterVal,
                    pointerEvents: pointerEventsVal,
                    cursor: isSide ? "pointer" : "default",
                    userSelect: "none",
                    ...transformStyle,
                    "&:hover": isSide
                      ? {
                          opacity: 0.78,
                          filter: "brightness(0.9)",
                          borderColor: "rgba(0, 212, 199, 0.3)",
                        }
                      : isCenter
                      ? {
                          borderColor: "rgba(0, 212, 199, 0.6)",
                          boxShadow:
                            "0 24px 60px rgba(0, 212, 199, 0.28), 0 0 40px rgba(0, 212, 199, 0.18)",
                        }
                      : {},
                  }}
                >
                  {/* Side Card Clickable Overlay Mask */}
                  {isSide && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(7, 17, 31, 0.35)",
                        zIndex: 15,
                        transition: "background-color 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(7, 17, 31, 0.1)",
                        },
                      }}
                    />
                  )}

                  {/* Left / Top: Visual Area */}
                  <Box
                    sx={{
                      position: "relative",
                      width: { xs: "100%", md: "46%" },
                      minHeight: { xs: "160px", sm: "210px", md: "100%" },
                      height: { xs: "160px", sm: "210px", md: "auto" },
                      overflow: "hidden",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      "&:hover .project-overlay": {
                        opacity: isCenter ? 1 : 0,
                      },
                      "&:hover .project-image": {
                        transform: isCenter ? "scale(1.04) translateZ(0)" : "translateZ(0)",
                      },
                    }}
                  >
                    <Image
                      className="project-image"
                      src={project.image}
                      alt={project.name}
                      fill
                      draggable={false}
                      sizes="(max-width: 900px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "top",
                        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        pointerEvents: "none",
                        userSelect: "none",
                        willChange: "transform",
                      }}
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                    />

                    {/* Role Badge */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 14,
                        left: 14,
                        background: "rgba(7, 17, 31, 0.88)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(0, 212, 199, 0.28)",
                        color: "primary.main",
                        px: 1.8,
                        py: 0.5,
                        borderRadius: 2,
                        fontWeight: 600,
                        fontSize: "0.78rem",
                        fontFamily: "var(--font-outfit)",
                        zIndex: 3,
                        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.35)",
                      }}
                    >
                      {project.role}
                    </Box>

                    {/* Desktop Hover Action Overlay for Center Card */}
                    {isCenter && (
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
                          zIndex: 4,
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          component="a"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<LaunchIcon />}
                          onClick={(e) => {
                            if (hasDragged.current) e.preventDefault();
                          }}
                          sx={{
                            boxShadow: "0 4px 14px rgba(0, 212, 199, 0.3)",
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
                          onClick={(e) => {
                            if (hasDragged.current) e.preventDefault();
                          }}
                          sx={{
                            borderWidth: 2,
                            backgroundColor: "rgba(7, 17, 31, 0.6)",
                            "&:hover": {
                              borderWidth: 2,
                              backgroundColor: "rgba(0, 212, 199, 0.1)",
                            },
                          }}
                        >
                          View Project
                        </Button>
                      </Box>
                    )}
                  </Box>                  {/* Right / Bottom: Content Area */}
                  <CardContent
                    sx={{
                      width: { xs: "100%", md: "54%" },
                      p: { xs: 2, sm: 2.5, md: 3.5 },
                      display: { xs: isCenter ? "flex" : "none", md: "flex" },
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      {/* Name & Date */}
                      <Stack
                        direction="row"
                        sx={{
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          gap: 1.5,
                          mb: 1.2,
                        }}
                      >
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{
                            fontFamily: "var(--font-outfit)",
                            fontWeight: 700,
                            color: "text.primary",
                            fontSize: { xs: "1.05rem", sm: "1.25rem" },
                            lineHeight: 1.25,
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
                            px: 1.2,
                            py: 0.3,
                            borderRadius: 1,
                            border: "1px solid rgba(0, 212, 199, 0.15)",
                            whiteSpace: "nowrap",
                            fontSize: "0.72rem",
                          }}
                        >
                          {project.date}
                        </Typography>
                      </Stack>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          mb: 1.5,
                          lineHeight: 1.5,
                          fontSize: { xs: "0.78rem", sm: "0.85rem" },
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {project.description}
                      </Typography>

                      {/* Key Features List */}
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "text.primary",
                          fontWeight: 600,
                          mb: 0.8,
                          fontFamily: "var(--font-outfit)",
                          display: "flex",
                          alignItems: "center",
                          gap: 0.8,
                          fontSize: "0.78rem",
                        }}
                      >
                        Key Highlights:
                      </Typography>
                      <List disablePadding sx={{ mb: 1.5 }}>
                        {project.features.slice(0, 2).map((feature, featIdx) => (
                          <ListItem
                            key={featIdx}
                            disableGutters
                            sx={{ py: 0.2, alignItems: "flex-start" }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 20,
                                color: "primary.main",
                                mt: "2px",
                              }}
                            >
                              <CheckCircleIcon sx={{ fontSize: "0.9rem" }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: "text.secondary",
                                    lineHeight: 1.4,
                                    fontSize: "0.78rem",
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                  }}
                                >
                                  {feature}
                                </Typography>
                              }
                            />
                          </ListItem>
                        ))}
                      </List>

                      {/* Technology Chips */}
                      <Box sx={{ mb: 2.5 }}>
                        <Stack
                          direction="row"
                          spacing={0.8}
                          useFlexGap
                          sx={{ flexWrap: "wrap", gap: 0.8 }}
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
                                fontSize: "0.75rem",
                                height: 24,
                              }}
                            />
                          ))}
                        </Stack>
                      </Box>
                    </Box>

                    {/* Action Buttons */}
                    <CardActions
                      sx={{
                        p: 0,
                        gap: 1.5,
                        flexWrap: "wrap",
                        pt: 1.5,
                        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        component="a"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<LaunchIcon />}
                        disabled={!isCenter}
                        onClick={(e) => {
                          if (hasDragged.current || !isCenter) e.preventDefault();
                        }}
                        sx={{
                          px: 2.5,
                          py: 0.8,
                          fontWeight: 600,
                          fontSize: "0.85rem",
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
                        disabled={!isCenter}
                        onClick={(e) => {
                          if (hasDragged.current || !isCenter) e.preventDefault();
                        }}
                        sx={{
                          px: 2,
                          py: 0.8,
                          fontWeight: 600,
                          fontSize: "0.85rem",
                          borderWidth: 1.5,
                          "&:hover": { borderWidth: 1.5 },
                        }}
                      >
                        View Project
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              );
            })}
          </Box>

          {/* Interactive Pagination Dots & Counter */}
          <Box sx={{ mt: { xs: 4, md: 5 }, textAlign: "center" }}>
            <Stack
              direction="row"
              spacing={1.2}
              sx={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {projects.map((proj, i) => {
                const isSelected = i === activeIndex;
                return (
                  <Box
                    key={i}
                    onClick={() => handleSelect(i)}
                    aria-label={`Select project ${proj.name}`}
                    sx={{
                      width: isSelected ? 32 : 10,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: isSelected
                        ? "primary.main"
                        : "rgba(255, 255, 255, 0.2)",
                      boxShadow: isSelected
                        ? "0 0 12px rgba(0, 212, 199, 0.8)"
                        : "none",
                      cursor: "pointer",
                      transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: isSelected
                          ? "primary.main"
                          : "rgba(0, 212, 199, 0.5)",
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                );
              })}
            </Stack>

            <Typography
              variant="caption"
              sx={{
                display: "block",
                mt: 1.5,
                color: "text.secondary",
                fontFamily: "var(--font-outfit)",
                fontWeight: 600,
                letterSpacing: "0.08em",
                fontSize: "0.8rem",
              }}
            >
              0{activeIndex + 1} / 0{total} • {projects[activeIndex].name.split("–")[0].split("-")[0].trim()}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

