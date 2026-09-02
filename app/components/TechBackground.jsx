"use client";

import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";

export default function TechBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Node & Particle Configuration
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1200;
    const nodeCount = isMobile ? 18 : isTablet ? 30 : 42;

    // Active Section Tracking State
    let activeSection = "home";

    // Initialize Network Nodes
    const nodes = [];
    const packets = [];

    for (let i = 0; i < nodeCount; i++) {
      const isHub = i % 5 === 0;
      nodes.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.15 : 0.25),
        vy: (Math.random() - 0.5) * (isMobile ? 0.15 : 0.25),
        radius: isHub ? (isMobile ? 2.8 : 3.5) : Math.random() * 1.3 + 1.2,
        baseAlpha: isHub ? 0.85 : Math.random() * 0.35 + 0.2,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        isHub,
        orbitRadius: 80 + (i % 6) * 45,
        orbitSpeed: (0.003 + (i % 4) * 0.002) * (i % 2 === 0 ? 1 : -1),
        orbitAngle: Math.random() * Math.PI * 2,
      });
    }

    // Interactive mouse coordinates tracking (Desktop only)
    let mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    const handleMouseMove = (e) => {
      if (isMobile) return;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    // Packet Spawner (Data stream flowing across nodes)
    let lastPacketTime = 0;
    const spawnPacket = (now) => {
      if (now - lastPacketTime > 400 && packets.length < 16) {
        lastPacketTime = now;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < (isMobile ? 120 : 170) && Math.random() < 0.4) {
              packets.push({
                from: nodes[i],
                to: nodes[j],
                progress: 0,
                speed: 0.008 + Math.random() * 0.006,
                size: 2.2,
              });
              return;
            }
          }
        }
      }
    };

    // Calculate Target Position for each Node based on Active Section
    const getTargetPosition = (node, index, time) => {
      const centerX = width / 2;
      const centerY = height / 2;

      switch (activeSection) {
        // 1. HERO: "Digital Developer Universe" — Free cosmic drift
        case "home":
          return {
            x: node.x + node.vx,
            y: node.y + node.vy,
          };

        // 2. ABOUT: "Developer Architecture" — Layered Tier (Client -> Gateway -> Backend -> DB)
        case "about": {
          const tier = index % 4; // 0: User/Client, 1: API Gateway, 2: Backend/Services, 3: DB Cluster
          const tierY = height * (0.2 + tier * 0.2);
          const colCount = Math.ceil(nodeCount / 4);
          const col = Math.floor(index / 4);
          const spreadX = width * 0.7;
          const startX = width * 0.15;
          const targetX =
            startX +
            (col / Math.max(1, colCount - 1)) * spreadX +
            Math.sin(time + node.pulseOffset) * 15;
          const targetY = tierY + Math.cos(time + node.pulseOffset) * 10;
          return { x: targetX, y: targetY };
        }

        // 3. SKILLS: "Technology Ecosystem" — Orbital Constellation
        case "skills": {
          node.orbitAngle += node.orbitSpeed;
          const r = node.orbitRadius * (isMobile ? 0.7 : 1);
          const targetX =
            centerX + Math.cos(node.orbitAngle) * r;
          const targetY =
            centerY + Math.sin(node.orbitAngle) * (r * 0.65);
          return { x: targetX, y: targetY };
        }

        // 4. PROJECTS: "Product Showcase" — Horizontal Data Pipelines
        case "projects": {
          const row = index % 5;
          const rowY = height * (0.18 + row * 0.16);
          const targetX =
            ((index * (width / (nodeCount / 2)) + time * 35) % (width + 100)) -
            50;
          const targetY = rowY + Math.sin(time * 2 + node.pulseOffset) * 12;
          return { x: targetX, y: targetY };
        }

        // 5. EXPERIENCE: "Career Timeline" — Vertical Spine with Milestones
        case "experience": {
          const isLeft = index % 2 === 0;
          const spineX = isMobile ? width * 0.18 : width * 0.5;
          const progressY = (index / nodeCount) * (height * 0.75) + height * 0.12;
          const targetX = isLeft
            ? spineX - (isMobile ? 0 : 35 + (index % 3) * 20)
            : spineX + (isMobile ? 40 : 35 + (index % 3) * 20);
          const targetY = progressY + Math.sin(time + node.pulseOffset) * 8;
          return { x: targetX, y: targetY };
        }

        // 6. EDUCATION: "Learning Blueprint" — Technical Blueprint Grid Junctions
        case "education": {
          const cols = isMobile ? 4 : 7;
          const colIndex = index % cols;
          const rowIndex = Math.floor(index / cols);
          const stepX = width / (cols + 1);
          const stepY = height / 7;
          const targetX = stepX * (colIndex + 1);
          const targetY = stepY * (rowIndex + 1.2);
          return { x: targetX, y: targetY };
        }

        // 7. RESUME: "Professional Profile" — Clean Calm Ambient Floating
        case "resume": {
          const rx =
            width * (0.2 + (index % 5) * 0.15) +
            Math.sin(time * 0.5 + node.pulseOffset) * 25;
          const ry =
            height * (0.25 + Math.floor(index / 5) * 0.14) +
            Math.cos(time * 0.5 + node.pulseOffset) * 20;
          return { x: rx, y: ry };
        }

        // 8. CONTACT: "Connection Hub" — Radial Starburst Network
        case "contact": {
          const angle = (index / nodeCount) * Math.PI * 2;
          const radius = (isMobile ? 90 : 160) + (index % 3) * (isMobile ? 40 : 70);
          const targetX =
            centerX + Math.cos(angle) * radius + Math.sin(time + node.pulseOffset) * 10;
          const targetY =
            centerY + Math.sin(angle) * radius + Math.cos(time + node.pulseOffset) * 10;
          return { x: targetX, y: targetY };
        }

        default:
          return { x: node.x + node.vx, y: node.y + node.vy };
      }
    };

    // Main Canvas Render Loop
    let time = 0;
    let gridOffset = 0;

    const render = (now = 0) => {
      time += 0.015;
      gridOffset = (gridOffset + 0.12) % 64;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation & subtle spotlight
      if (!isMobile && mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.06;
        mouse.y += (mouse.targetY - mouse.y) * 0.06;

        const mouseGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          260
        );
        mouseGlow.addColorStop(0, "rgba(0, 212, 199, 0.055)");
        mouseGlow.addColorStop(0.5, "rgba(0, 212, 199, 0.018)");
        mouseGlow.addColorStop(1, "rgba(0, 212, 199, 0)");
        ctx.fillStyle = mouseGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 260, 0, Math.PI * 2);
        ctx.fill();
      }

      // 1. Draw Technical Architecture Grid
      const gridSize = isMobile ? 56 : 64;
      ctx.lineWidth = 1;
      ctx.strokeStyle =
        activeSection === "education"
          ? "rgba(0, 212, 199, 0.04)"
          : "rgba(0, 212, 199, 0.02)";

      ctx.beginPath();
      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = (gridOffset % gridSize) - gridSize; y <= height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Draw Section-specific Architecture Guides
      if (activeSection === "about") {
        // Subtle tier boundary guidelines
        ctx.strokeStyle = "rgba(0, 212, 199, 0.035)";
        ctx.setLineDash([4, 8]);
        for (let t = 0; t < 4; t++) {
          const tierY = height * (0.2 + t * 0.2);
          ctx.beginPath();
          ctx.moveTo(width * 0.1, tierY);
          ctx.lineTo(width * 0.9, tierY);
          ctx.stroke();
        }
        ctx.setLineDash([]);
      } else if (activeSection === "experience") {
        // Subtle vertical timeline axis
        const spineX = isMobile ? width * 0.18 : width * 0.5;
        ctx.strokeStyle = "rgba(0, 212, 199, 0.08)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(spineX, height * 0.1);
        ctx.lineTo(spineX, height * 0.9);
        ctx.stroke();
      } else if (activeSection === "skills") {
        // Subtle orbital rings
        ctx.strokeStyle = "rgba(0, 212, 199, 0.035)";
        ctx.setLineDash([3, 6]);
        const centerX = width / 2;
        const centerY = height / 2;
        for (let r = 1; r <= 3; r++) {
          ctx.beginPath();
          ctx.arc(centerX, centerY, (isMobile ? 70 : 130) * r, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.setLineDash([]);
      }

      // 2. Update & Draw Nodes with Smooth Section Morphing Lerp
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const target = getTargetPosition(node, i, time);

        if (!prefersReducedMotion) {
          // Smooth morphing interpolation factor
          node.x += (target.x - node.x) * 0.045;
          node.y += (target.y - node.y) * 0.045;

          // Boundary constraints for home section
          if (activeSection === "home") {
            if (node.x < 0 || node.x > width) node.vx *= -1;
            if (node.y < 0 || node.y > height) node.vy *= -1;
          }
        }

        const currentAlpha =
          node.baseAlpha +
          Math.sin(time + node.pulseOffset) * (node.baseAlpha * 0.35);

        // Draw Hub Halos
        if (node.isHub) {
          const haloRadius =
            node.radius * 4.5 + Math.sin(time * 2 + node.pulseOffset) * 2;
          const gradient = ctx.createRadialGradient(
            node.x,
            node.y,
            node.radius,
            node.x,
            node.y,
            haloRadius
          );
          gradient.addColorStop(0, "rgba(0, 212, 199, 0.22)");
          gradient.addColorStop(1, "rgba(0, 212, 199, 0)");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, haloRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw Core Node
        ctx.fillStyle = node.isHub
          ? "rgba(0, 212, 199, 0.9)"
          : `rgba(184, 196, 212, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Mouse proximity connection
        if (!isMobile && mouse.active) {
          const mdx = node.x - mouse.x;
          const mdy = node.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 140) {
            const mAlpha = (1 - mdist / 140) * 0.15;
            ctx.strokeStyle = `rgba(0, 212, 199, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // 3. Draw Network Connection Lines
      const maxDistance = isMobile ? 120 : 160;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const opacity = (1 - dist / maxDistance) * 0.16;
            ctx.strokeStyle = `rgba(0, 212, 199, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // 4. Update & Draw Moving Data Packets
      if (!prefersReducedMotion) {
        spawnPacket(now);

        for (let p = packets.length - 1; p >= 0; p--) {
          const packet = packets[p];
          packet.progress += packet.speed;

          if (packet.progress >= 1) {
            packets.splice(p, 1);
            continue;
          }

          const curX =
            packet.from.x + (packet.to.x - packet.from.x) * packet.progress;
          const curY =
            packet.from.y + (packet.to.y - packet.from.y) * packet.progress;

          const packetGlow = ctx.createRadialGradient(
            curX,
            curY,
            0,
            curX,
            curY,
            packet.size * 3.5
          );
          packetGlow.addColorStop(0, "rgba(0, 212, 199, 0.95)");
          packetGlow.addColorStop(0.5, "rgba(0, 212, 199, 0.35)");
          packetGlow.addColorStop(1, "rgba(0, 212, 199, 0)");

          ctx.fillStyle = packetGlow;
          ctx.beginPath();
          ctx.arc(curX, curY, packet.size * 3.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "#F5F7FA";
          ctx.beginPath();
          ctx.arc(curX, curY, packet.size * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }

        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Initial render
    render(0);

    // Section Observer to trigger smooth background visual morphing
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "education",
      "resume",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -40% 0px",
      threshold: 0.1,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection = entry.target.id;
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    // Window Resize Handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      if (prefersReducedMotion) {
        render(0);
      }
    };

    window.addEventListener("resize", handleResize);

    // Tab Visibility Handler
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (!isMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
        backgroundColor: "#07111F", // Layer 1: Dark Navy Base
      }}
    >
      {/* Layer 2: Section-Morphing Technology Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      {/* Layer 3: Subtle Animated Ambient Breathing Lights & Readability Overlays */}
      <Box
        sx={{
          position: "absolute",
          top: "-15%",
          left: "-10%",
          width: { xs: "380px", md: "720px" },
          height: { xs: "380px", md: "720px" },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0, 212, 199, 0.08) 0%, rgba(7, 17, 31, 0) 70%)",
          filter: "blur(75px)",
          animation: "ambientBreathe 14s ease-in-out infinite alternate",
          "@keyframes ambientBreathe": {
            "0%": { transform: "translate(0, 0) scale(1)", opacity: 0.7 },
            "100%": { transform: "translate(40px, 30px) scale(1.15)", opacity: 1 },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "-15%",
          right: "-10%",
          width: { xs: "400px", md: "750px" },
          height: { xs: "400px", md: "750px" },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(11, 23, 40, 0.85) 0%, rgba(7, 17, 31, 0) 70%)",
          filter: "blur(80px)",
          animation: "ambientBreathe2 16s ease-in-out infinite alternate",
          "@keyframes ambientBreathe2": {
            "0%": { transform: "translate(0, 0) scale(1)", opacity: 0.8 },
            "100%": { transform: "translate(-30px, -40px) scale(1.1)", opacity: 1 },
          },
        }}
      />

      {/* Central Vignette Gradient for Crisp Contrast */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(ellipse at 50% 35%, rgba(7, 17, 31, 0.28) 0%, rgba(7, 17, 31, 0.82) 75%, #07111F 100%)",
        }}
      />
    </Box>
  );
}
