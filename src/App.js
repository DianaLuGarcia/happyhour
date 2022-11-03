import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material"; //div with shading and colors

import "./App.css";
import CocktailDetails from "./pages/CocktailDetails/CocktailDetails";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Box width='400px' sx={{ width: { xl: "1488px" } }} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Profile/:id' element={<Profile />} />
        <Route path='/cocktail/:id' element={<CocktailDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;

//id on line 13 is dynamic, i'll need to find drink id
//need to create Home and Navbar components
