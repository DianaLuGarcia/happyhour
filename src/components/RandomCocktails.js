import React from "react";
import axios from "axios";

const RandomCocktails = async () => {
  const random = await axios.get(
    `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/random.php`
  );
  console.log("Random", random);
};

export default RandomCocktails;
