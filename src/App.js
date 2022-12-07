import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material"; //div with shading and colors

import "./App.css";
import CocktailDetails from "./components/SearchResults";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box width='400px' sx={{ width: { xl: "1488px" } }} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cocktail/:id' element={<CocktailDetails />} />
        <Route path='/browse' element={<Browse />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;

//id on line 13 is dynamic, i'll need to find drink id
//need to create Home and Navbar components
