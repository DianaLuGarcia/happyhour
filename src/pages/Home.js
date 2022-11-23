import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchCocktails from "../components/SearchCocktails";
import ImageButton from "../components/ImageButton";
// import Cocktails from "../components/Cocktails";

const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [searchThumbnail, thumbnail] = useState([]);

  return (
    <Box>
      <HeroBanner />

      <SearchCocktails
        setCocktails={setCocktails}
        cocktails={cocktails}
        searchThumbnail={searchThumbnail}
        thumbnail={thumbnail}
      />

      {/* <Cocktails cocktails={cocktails} /> */}
    </Box>
  );
};

export default Home;
