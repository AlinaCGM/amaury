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
        backgroundColor: "none",
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
          gap: 2,
        }}
      >
        {[t1, t2, t3, t4, t5, t6, t7].map((logo, index) => (
          <Box
            key={index}
            component="img"
            src={logo}
            alt={`Testimonial ${index + 1}`}
            sx={{
              width: { xs: "40%", sm: "20%", md: "12%" },
              height: "auto",
              objectFit: "contain",
              filter: "grayscale(100%)",
              opacity: 0.8,
              transition: "opacity 0.3s ease, filter 0.3s ease",
              "&:hover": {
                filter: "grayscale(0%)",
                opacity: 1,
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Testimonial;
