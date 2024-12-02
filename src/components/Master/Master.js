import React from "react";
import { Box, Typography, Button } from "@mui/material";
import master1 from "../../assets/master1.jpg";
import master2 from "../../assets/master2.jpg";
import master3 from "../../assets/master3.jpeg";
import master4 from "../../assets/master4.png";
import master5 from "../../assets/master5.jpeg";

const Master = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#c2a6a0",
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 8 },
        color: "#3b2722",
      }}
    >
      {/* Main Heading - Aligned Left */}
      <Box sx={{ textAlign: "left", mb: 2 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "3rem" },
            fontFamily: "'Georgia', serif",
            mb: 1,
          }}
        >
          Master the Art of Creating{" "}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "3rem" },
            fontFamily: "'Georgia', serif",
            mb: 1,
          }}
        >
          <span style={{ fontStyle: "italic" }}>World-Class Pastries</span>
        </Typography>

        {/* Subheading */}
        <Typography
          variant="body1"
          sx={{
            width: {
              xs: "100%",
              md: "50%",
            },
            marginRight: "auto",
            fontSize: { xs: "1rem", md: "1.2rem" },
            fontFamily: "'Georgia', serif",
            lineHeight: 1.6,
          }}
        >
          Your journey at The Pastry Academy will take you from the classroom to
          the kitchen where you will master the technical and artistic skills
          necessary to create world-class pastries, confections, chocolates,
          viennoiserie, breads, and plated desserts.
        </Typography>
      </Box>

      {/* Images Layout */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "flex-start",
          my: 5,
          gap: 2,
        }}
      >
        {[
          { src: master1, alt: "Pastry 1", marginTop: "0px" },
          {
            src: master2,
            alt: "Pastry 2",
            marginTop: { xs: "40px", md: "90px" },
          },
          { src: master3, alt: "Pastry 3", marginTop: "0px" },
          {
            src: master4,
            alt: "Pastry 4",
            marginTop: { xs: "40px", md: "90px" },
          },
          { src: master5, alt: "Pastry 5", marginTop: "0px" },
        ].map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image.src}
            alt={image.alt}
            sx={{
              width: { xs: "45%", md: "18%" },
              height: { xs: "200px", md: "400px" },
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              mt: image.marginTop,
            }}
          />
        ))}
      </Box>

      {/* Secondary Content - Aligned Right */}
      <Box
        sx={{
          textAlign: "left",
          mb: 4,
          width: {
            xs: "100%",
            md: "50%",
          },
          marginLeft: "auto",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            fontFamily: "'Georgia', serif",
            lineHeight: 1.6,
          }}
        >
          Not only will you gain hands-on practical knowledge, you will develop
          a deep understanding of the chemistry and science that is part of
          pastry arts. By the time you complete the program, you will be able to
          create original desserts and confections that are as stunning to look
          at as they are satisfying to eat.
        </Typography>
        {/* Button - Centered */}

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
            "&:hover": {
              backgroundColor: "#4A3327",
            },
            marginLeft: "auto",
            marginTop: "20px",
          }}
        >
          Enroll Now
        </Button>
      </Box>
    </Box>
  );
};

export default Master;
