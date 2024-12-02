import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
};

export default App;
