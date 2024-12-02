import React from "react";
import { Box } from "@mui/material";
import t1 from "../../assets/t1.webp";
import t2 from "../../assets/t2.webp";
import t3 from "../../assets/t3.webp";
import t4 from "../../assets/t4.png";
import t5 from "../../assets/t5.webp";
import t6 from "../../assets/t6.webp";
import t7 from "../../assets/t7.webp";

const Testimonial = () => {
  return (
    <Box
      sx={{
        backgroundColor: "none", // Light background color
        py: 4,
        px: { xs: 2, md: 6 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2, // Gap for smaller screens
        }}
      >
        {[t1, t2, t3, t4, t5, t6, t7].map((logo, index) => (
          <Box
            key={index}
            component="img"
            src={logo}
            alt={`Testimonial ${index + 1}`}
            sx={{
              width: { xs: "40%", sm: "20%", md: "12%" }, // Responsive widths
              height: "auto", // Maintain aspect ratio
              objectFit: "contain", // Ensures logo fits without distortion
              filter: "grayscale(100%)", // Grayscale for logos
              opacity: 0.8, // Slightly faded effect
              transition: "opacity 0.3s ease, filter 0.3s ease", // Smooth hover effect
              "&:hover": {
                filter: "grayscale(0%)", // Remove grayscale on hover
                opacity: 1, // Fully visible on hover
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Testimonial;
