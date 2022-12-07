import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import CocktailDetails from "../components/SearchResults";
import CocktailRecipeCard from "../components/SearchResults";
import RecipeGrid from "../components/recipeGrid";
// import ImageButton from "../components/ImageButton";

const Cocktails = ({ data, cocktails, setCocktails }) => {
  return (
    <Box>
      <CocktailDetails />
      <CocktailRecipeCard />
      {/* <ImageButton /> */}
      <RecipeGrid />
    </Box>
  );
};

export default Cocktails;
