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
        padding: { xs: 0, md: 2 },
        zIndex: 10,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "flex-end",
          padding: 0,
        }}
      >
        <Stack
          direction="row"
          spacing={{ xs: 0.5, md: 1 }}
          sx={{
            flexWrap: "wrap",
          }}
        >
          {["Home", "Services", "Gallery", "Contact"].map((label) => (
            <Button
              key={label}
              color="inherit"
              sx={{
                fontWeight: 400,
                textTransform: "none",
                fontSize: { xs: "0.8rem", md: "1rem" },
                padding: { xs: "4px 8px", md: "6px 16px" },
                "&:hover": { color: "#D2691E" },
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
              padding: { xs: "4px 12px", md: "6px 16px" },
              fontSize: { xs: "0.8rem", md: "1rem" },
              "&:hover": { backgroundColor: "#4A3327" },
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
