import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata = {
  title: "Rajasekar RK | MERN Full Stack Developer",
  description:
    "Professional Developer Portfolio of Rajasekar RK, a highly skilled MERN Full Stack Developer specializing in MongoDB, Express.js, React.js, and Node.js. Check out my skills, projects, and work experience.",
  keywords: [
    "Rajasekar RK",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "Web Developer Portfolio",
    "Ponjesly College of Engineering",
  ],
  authors: [{ name: "Rajasekar RK" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
