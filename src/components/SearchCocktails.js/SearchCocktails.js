import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { cocktailOptions, fetchData } from "./../../Utils/fetchData";
import axios from "axios";

const SearchCocktails = () => {
  const [search, setsearch] = useState("");

  const handleSearch = async () => {
    if (search) {
      console.log(process.env.REACT_APP_RAPID_API_KEY);
      const cocktailData = await fetchData(
        `http://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/search.php?s=${search}`,
        cocktailOptions
      );
      // const cocktailData = await axios.get(
      //   `http://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/search.php?s=margarita`
      // );
      console.log(cocktailData);
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
          onChange={(e) => setsearch(e.target.value.toLowerCase())}
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
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchCocktails;
