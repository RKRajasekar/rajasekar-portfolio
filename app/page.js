import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TechBackground from "./components/TechBackground";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        color: "text.primary",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Layer 1 & 2 & 3: Dark Navy Base, Animated Tech Network & Ambient Readability Overlays */}
      <TechBackground />

      {/* Layer 4: Interactive Portfolio Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <Box component="main" sx={{ flexGrow: 1 }}>
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Projects Section */}
          <Projects />

          {/* Experience Section */}
          <Experience />

          {/* Education & Certifications Section */}
          <Education />

          {/* Resume CTA Section */}
          <Resume />

          {/* Contact Section */}
          <Contact />
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </Box>
  );
}
