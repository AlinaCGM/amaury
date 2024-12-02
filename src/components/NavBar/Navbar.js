import React from "react";
import { AppBar, Toolbar, Button, Stack } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        color: "#5C4033",
        boxShadow: "none",
        padding: { xs: 0, md: 2 }, // Smaller padding on xs
        zIndex: 10,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "flex-end", // Aligns navigation buttons to the right
          padding: 0,
        }}
      >
        <Stack
          direction="row"
          spacing={{ xs: 0.5, md: 1 }} // Smaller spacing on xs
          sx={{
            flexWrap: "wrap", // Wrap buttons on very small screens
          }}
        >
          {["Home", "Services", "Gallery", "Contact"].map((label) => (
            <Button
              key={label}
              color="inherit"
              sx={{
                fontWeight: 400,
                textTransform: "none",
                fontSize: { xs: "0.8rem", md: "1rem" }, // Smaller font on xs
                padding: { xs: "4px 8px", md: "6px 16px" }, // Smaller padding on xs
                "&:hover": { color: "#D2691E" }, // Subtle hover effect
              }}
            >
              {label}
            </Button>
          ))}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#5C4033",
              color: "white",
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "20px",
              padding: { xs: "4px 12px", md: "6px 16px" }, // Adjust padding for xs
              fontSize: { xs: "0.8rem", md: "1rem" }, // Smaller font on xs
              "&:hover": { backgroundColor: "#4A3327" }, // Subtle hover for the button
            }}
          >
            Enroll Now
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
