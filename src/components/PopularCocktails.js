import React from "react";
import axios from "axios";

const PopularCocktails = async () => {
  const popular = await axios.get(
    `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/popular.php`
  );
  console.log("Popular", popular);
};

export default PopularCocktails;
