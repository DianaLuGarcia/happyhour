import React, { useState } from "react";
import { Box } from "@mui/material";
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
