import React from "react";
// import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
// import Features from "./components/Features/Features";
// import Courses from "./components/Courses/Courses";
// import Testimonial from "./components/Testimonial/Testimonial";
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
