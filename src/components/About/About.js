import React from "react";
import { Box, Typography, Button } from "@mui/material";
import amaury1 from "../../assets/amaury1.jpg";
import amaury2 from "../../assets/amaury2.jpg";

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#c2a6a0", // Matches the background color in the design
        px: { xs: 2, md: 0 },
        height: { xs: "auto", md: "90vh" }, // Auto height for xs
        display: "flex",
        color: "#3b2722",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 4, md: 6 },
        alignItems: "stretch", // Ensures each child respects its own alignment
      }}
    >
      {/* Left Section - Large Image */}
      <Box
        component="img"
        src={amaury1}
        alt="Amaury Gichon Working"
        sx={{
          flex: { xs: "1 1 auto", md: "1 1 40%" },
          width: { xs: "100%", md: "auto" }, // Full width for xs
          height: { xs: "200px", md: "600px" }, // Reduce height on small screens
          objectFit: "cover",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          alignSelf: { xs: "center", md: "flex-start" }, // Center image on small screens
          mb: { xs: 2, md: 4 }, // Add margin at the bottom for xs
        }}
      />

      {/* Center Section - Content */}
      <Box
        sx={{
          flex: { xs: "1 1 auto", md: "1 1 40%" },
          textAlign: { xs: "center", md: "left" },
          px: { xs: 2, md: 4 },
          alignSelf: { xs: "center", md: "center" }, // Center align content for xs
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", md: "2.8rem" }, // Adjust font size for small screens
            fontFamily: "'Georgia', serif",
            mb: 2,
          }}
        >
          Amaury Gichon
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: { xs: "1rem", md: "1.5rem" }, // Adjust font size for xs
            fontFamily: "'Georgia', serif",
            mb: 3,
          }}
        >
          The Chocolate Guy
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "0.9rem", md: "1.2rem" }, // Smaller font for xs
            fontFamily: "'Georgia', serif",
            lineHeight: 1.6,
            mb: 4,
          }}
        >
          Chef Amaury is a world-renowned pastry chef who has been teaching
          masterclasses around the world for the last seven years. Prior to
          realizing his passion for teaching, Chef Amaury reached executive chef
          level at the age of 21 at Hugo and Victor in Paris, France.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#5C4033",
            color: "white",
            fontSize: "1rem",
            fontWeight: 600,
            textTransform: "none",
            padding: "10px 24px",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#4A3327",
            },
          }}
        >
          Meet the Team
        </Button>
      </Box>

      {/* Right Section - Small Image */}
      <Box
        component="img"
        src={amaury2}
        alt="Amaury Gichon Working"
        sx={{
          flex: { xs: "1 1 auto", md: "1 1 20%" },
          width: { xs: "100%", md: "auto" }, // Full width for xs
          height: { xs: "200px", md: "400px" }, // Reduce height on small screens
          objectFit: "cover",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          alignSelf: { xs: "center", md: "flex-end" }, // Center align for xs
          mt: { xs: 2, md: 4 }, // Add margin at the top for md
        }}
      />
    </Box>
  );
};

export default About;
