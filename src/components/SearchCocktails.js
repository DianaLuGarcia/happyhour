import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
// import { cocktailOptions } from "../Utils/fetchData";
import axios from "axios";
import HorizontalScrollbar from "./HorizontalScrollbar";
// import ImageButton from "./ImageButton";
import SearchResults from "./SearchResults";
import Browse from "././pages/Browse";

const SearchCocktails = ({
  setCocktails,
  cocktails,
  setCocktail,
  cocktail,
}) => {
  const [search, setSearch] = useState("");
  // const [ingredients, setIngredients] = useState([]);

  //Search by name
  const handleSearch = async () => {
    if (search) {
      const drinks = await axios.get(
        `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/search.php?s=${search}`
      );

      //Filter by ingredient
      const drinkIngredients = await axios.get(
        `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/filter.php?i=${search}`
      );

      const popularDrinks = await axios.get(
        `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/popular.php`
      );

      console.log("popularDrinks: ", popularDrinks);
      //adding the data from both GET calls
      const searchResults = [
        ...drinks.data.drinks,
        ...drinkIngredients.data.drinks,
        ...popularDrinks.data.drinks,
      ];

      //Checks for ID duplicates within searchResults, assigns to uniqueSearchResults
      const drinkMap = {};
      const uniqueSearchResults = searchResults.filter((drink) => {
        if (drinkMap[drink.idDrink]) {
          return false;
        } else {
          drinkMap[drink.idDrink] = true;
          return true;
        }
      });

      console.log("Search Results", searchResults);
      console.log("Search Results Unique", uniqueSearchResults);

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch(" ");
      setCocktails(uniqueSearchResults);
      console.log("search:", search);
    }
    if (search.status === 200) {
      return search.json();
    }
  };

  return (
    <Stack alignItems='Center' mt='37px' justifyContent='center' p='20'>
      <Typography
        fontWeight={200}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb='50px'
        textAlign='center'
      >
        Classic Cocktails <br /> you should know how to make.
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          // id='outlined-basic'
          // label='Search Cocktails'
          // variant='outlined'
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Cocktails'
          type='text'
        />
        <Button
          className='search-btn'
          sx={{
            bgcolor: "#0083db",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={Browse.href}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", padding: "20px" }}>
        <HorizontalScrollbar
          data={cocktails}
          cocktail={cocktail}
          setCocktail={setCocktail}
        />

        <SearchResults
          data={cocktails}
          cocktail={cocktail}
          setCocktail={setCocktail}
        />
      </Box>
    </Stack>
  );
};

export default SearchCocktails;
