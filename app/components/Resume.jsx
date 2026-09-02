"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ScrollReveal from "./ScrollReveal";

// Easy to replace resume PDF path
const RESUME_PDF_PATH = "/resume.pdf";

export default function Resume() {
  return (
    <Box
      id="resume"
      sx={{
        py: { xs: 10, md: 12 },
        position: "relative",
        background:
          "linear-gradient(135deg, rgba(11, 23, 40, 0.75) 0%, rgba(7, 17, 31, 0.88) 100%)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(0, 212, 199, 0.08)",
        borderBottom: "1px solid rgba(0, 212, 199, 0.08)",
        overflow: "hidden",
      }}
    >
      {/* Decorative subtle circles */}
      <Box
        sx={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "rgba(0, 212, 199, 0.06)",
          filter: "blur(40px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-50px",
          left: "-50px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "rgba(0, 212, 199, 0.03)",
          filter: "blur(40px)",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <ScrollReveal>
          <Stack spacing={4} sx={{ alignItems: "center", textAlign: "center" }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                color: "text.primary",
                fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem" },
              }}
            >
              Want to know more about my experience?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: "600px",
                fontSize: "1.1rem",
                lineHeight: 1.7,
              }}
            >
              Download my comprehensive resume to view detailed roles, project summaries, academics, and technical background.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component="a"
              href={RESUME_PDF_PATH}
              download="Rajasekar_RK_Resume.pdf"
              startIcon={<FileDownloadIcon />}
              sx={{
                px: 4.5,
                py: 1.8,
                fontSize: "1.05rem",
                borderRadius: "8px",
                fontWeight: 600,
                boxShadow: "0 4px 18px rgba(0, 212, 199, 0.28)",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 8px 28px rgba(0, 212, 199, 0.48)",
                },
              }}
            >
              Download Resume PDF
            </Button>
          </Stack>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
