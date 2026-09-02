"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00D4C7", // Cyan/Teal accent
      contrastText: "#07111F",
    },
    secondary: {
      main: "#3A86FF", // Soft corporate blue accent
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#07111F", // Dark Navy Base
      paper: "#0B1728", // Secondary Dark Navy
    },
    text: {
      primary: "#F5F7FA", // Crisp primary text
      secondary: "#B8C4D4", // Secondary text
    },
    divider: "rgba(0, 212, 199, 0.08)",
  },
  typography: {
    fontFamily: [
      "var(--font-outfit)",
      "var(--font-inter)",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.7,
    },
    body2: {
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 8,
          padding: "8px 22px",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "50%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.18), transparent)",
            transform: "skewX(-20deg)",
            pointerEvents: "none",
            transition: "none",
          },
          "&:hover::after": {
            left: "150%",
            transition: "all 0.65s ease-in-out",
          },
          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
        containedPrimary: {
          backgroundColor: "#00D4C7",
          color: "#07111F",
          boxShadow: "0px 4px 18px rgba(0, 212, 199, 0.28)",
          "&:hover": {
            backgroundColor: "#00E5D7",
            boxShadow: "0px 8px 26px rgba(0, 212, 199, 0.45)",
          },
        },
        outlinedPrimary: {
          borderColor: "rgba(0, 212, 199, 0.4)",
          color: "#00D4C7",
          "&:hover": {
            borderColor: "#00D4C7",
            backgroundColor: "rgba(0, 212, 199, 0.08)",
            boxShadow: "0px 4px 18px rgba(0, 212, 199, 0.15)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(11, 23, 40, 0.72)",
          backgroundImage:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 212, 199, 0.012) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.07)",
          borderRadius: 16,
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          "&:hover": {
            transform: "translateY(-4px)",
            borderColor: "rgba(0, 212, 199, 0.35)",
            boxShadow: "0 16px 40px 0 rgba(0, 212, 199, 0.1)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
