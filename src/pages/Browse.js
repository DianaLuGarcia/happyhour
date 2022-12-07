import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
// import CocktailDetails from "../components/SearchResults";
// import CocktailRecipeCard from "../components/SearchResults";

import AlcoholicCocktails from "../components/AlcoholicCocktails";
import NonAlcoholicCocktails from "../components/NonAlcoholicCocktails";
import LatestCocktails from "../components/LatestCocktails";
import PopularCocktails from "../components/PopularCocktails";
import RandomCocktails from "../components/RandomCocktails";
import RecipeGrid from "../components/RecipeGrid";
// import ImageButton from "../components/ImageButton";

const Cocktails = ({ data, cocktails, setCocktails }) => {
  return (
    <Box>
      <Navbar />
      <Stack direction='row' spacing={2}>
        <AlcoholicCocktails />
        <NonAlcoholicCocktails />
        <LatestCocktails />
        <PopularCocktails />
        <RandomCocktails />
      </Stack>
      <RecipeGrid />
    </Box>
  );
};

export default Cocktails;
