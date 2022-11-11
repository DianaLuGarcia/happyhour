import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import SearchCocktails from "../../components/SearchCocktails.js/SearchCocktails";
import Cocktails from "../../components/Cocktails/Cocktails";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchCocktails />
      <Cocktails />
    </Box>
  );
};

export default Home;
