import React from "react";
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/material";
import Hero from "./components/Hero/Hero";
import Welcome from "./components/Welcome/Welcome";
import Master from "./components/Master/Master";
import Testimonial from "./components/Testimonial/Testimonial";
import About from "./components/About/About";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Welcome />
      <Master />
      <Testimonial />
      <About />

      <Footer />
    </Box>
  );
};

export default Home;
