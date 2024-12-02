import React from "react";
import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../../assets/all.jpg";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "60vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: 2, md: 4 },
          width: {
            sx: "90%",
            md: "60%",
          },
          margin: "auto",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", md: "3.5rem" },
            fontFamily: "'Georgia', serif",
            mb: 2,
          }}
        >
          Ready to Elevate Your{" "}
          <span style={{ fontStyle: "italic" }}>Pastry Skills?</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            fontFamily: "'Georgia', serif",
            mb: 4,
            lineHeight: 1.8,
          }}
        >
          Whether you're a passionate home baker or a professional looking to
          take your skills to the next level, this course offers you an
          exclusive opportunity to learn from a master.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "transparent",
            color: "white",
            fontSize: "1rem",
            fontWeight: 600,
            textTransform: "none",
            padding: "10px 24px",
            border: "2px solid white",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#5C4033",
            },
          }}
        >
          About the Academy
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
