import React from "react";
import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../../assets/master2.jpg";

const Welcome = () => {
  return (
    <Box
      sx={{
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#1b0b01",
        textAlign: "center",
        color: "#fff",
        paddingBlock: "50px",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          padding: { xs: 2, md: 4 },
          borderRadius: "8px",
          maxWidth: "90%",
          width: { xs: "100%", md: "700px" },
        }}
      >
        {/* Main Heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.8rem" },
            fontFamily: "'Georgia', serif",
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          Learn how to make pastries like
        </Typography>

        {/* Subheading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontFamily: "'Georgia', serif",
            fontStyle: "italic",
            mb: 4,
          }}
        >
          Chef Amaury Guichon
        </Typography>

        {/* Button */}
        <Button
          variant="outlined"
          sx={{
            borderColor: "#fff",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "1rem",
            textTransform: "none",
            borderRadius: "20px",
            "&:hover": {
              borderColor: "#ccc",
              color: "#ccc",
            },
          }}
        >
          Discover More
        </Button>
      </Box>
    </Box>
  );
};

export default Welcome;
