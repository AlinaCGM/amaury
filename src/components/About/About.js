import React from "react";
import { Box, Typography, Button } from "@mui/material";
import amaury1 from "../../assets/amaury1.jpg";
import amaury2 from "../../assets/amaury2.jpg";
import logo from "../../assets/logo.png";

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#c2a6a0",
        position: "relative",
        px: { xs: 2, md: 0 },
        minHeight: { xs: "70vh", md: "100vh" },
        display: "flex",
        color: "#3b2722",
        flexDirection: { xs: "column", lg: "row" },
        gap: { xs: 4, md: 6 },
        alignItems: "stretch",
      }}
    >
      {/* Background Logo */}
      <Box
        component="img"
        src={logo}
        alt="Background Logo"
        sx={{
          position: "absolute",
          top: "50%",
          left: "20%",
          transform: "translateY(-50%)",
          width: { xs: "300px", md: "600px" },
          zIndex: 0,
        }}
      />

      {/* Left Image Section */}
      <Box
        sx={{
          flex: { xs: "1 1 auto", lg: "1 1 25%" },
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          zIndex: 1,
        }}
      >
        <Box
          component="img"
          src={amaury1}
          alt="Amaury Gichon Working"
          sx={{
            width: "100%",
            height: "auto",
            maxWidth: "600px",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          flex: { xs: "1 1 auto", lg: "1 1 50%" },
          textAlign: { xs: "center", md: "left" },
          px: { xs: 2, md: 4 },
          alignSelf: { xs: "center", md: "center" },
          zIndex: 1,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "3.8rem" },
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
            fontSize: { xs: "1rem", md: "2.5rem" },
            fontFamily: "'Georgia', serif",
            mb: 3,
          }}
        >
          The Chocolate Guy
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "0.9rem", md: "1.2rem" },
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

      {/* Right Image Section */}
      <Box
        sx={{
          flex: { xs: "1 1 auto", lg: "1 1 25%" },
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          zIndex: 1,
        }}
      >
        <Box
          component="img"
          src={amaury2}
          alt="Amaury Gichon Working"
          sx={{
            width: "100%",
            height: "auto",
            maxWidth: "600px",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </Box>
    </Box>
  );
};

export default About;
