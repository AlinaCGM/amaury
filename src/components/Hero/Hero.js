import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import NavBar from "../NavBar/Navbar";
import heroImage from "../../assets/hero1.png";
import contentBgImage from "../../assets/logo.png";

const Hero = () => {
  return (
    <Box
      sx={{
        height: {
          xs: "100vh",
          md: "100vh",
        },
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Hero Section */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        {/* Left: Image Section */}
        <Box
          sx={{
            flex: { xs: 1, md: "50%" },
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        />

        {/* Right: Content Section */}
        <Box
          sx={{
            flex: { xs: 1, md: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            px: { xs: 3, md: 5 },
            pt: { xs: 3, md: 0 },
            pb: { xs: 3, md: 5 },

            backgroundColor: "#EBE0DE",
            backgroundImage: `url(${contentBgImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* NavBar Inside Content Box */}
          <Box
            sx={{
              width: "100%",
              mb: 3,
            }}
          >
            <NavBar />
          </Box>

          {/* Hero Content */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              textAlign: "left",
              maxWidth: "80%",
            }}
          >
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2rem", md: "5.2rem" },
                  fontFamily: "'Georgia', serif",
                  color: "#5C4033",
                  lineHeight: "1",
                }}
              >
                Time to
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2rem", md: "5.2rem" },
                  fontFamily: "'Georgia', serif",
                  color: "#46302B",
                  lineHeight: "1",
                }}
              >
                start your
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2rem", md: "5.2rem" },
                  fontFamily: "'Georgia', serif",
                  color: "#46302B",
                  lineHeight: "1",
                }}
              >
                <span style={{ fontStyle: "italic" }}>sweet</span> {""}
                career
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                fontFamily: "'Georgia', serif",
                color: "#46302B",
                mb: 4,
                lineHeight: 1.6,
              }}
            >
              Do you want to learn how to make pastries like you see in Chef
              Amaury Guichon’s social media or in the Netflix TV show “School of
              Chocolate?” Get a head start on your career in the pastry industry
              and enroll in The Pastry Academy by Amaury Guichon today.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#46302B",
                color: "white",
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                padding: "10px 24px",
                borderRadius: "20px",
                "&:hover": { backgroundColor: "#46302B" },
              }}
            >
              Enroll Now
            </Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Hero;
