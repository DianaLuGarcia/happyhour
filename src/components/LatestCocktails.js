import React from "react";
import axios from "axios";

const LatestCocktails = async () => {
  const latest = await axios.get(
    `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/latest.php`
  );
  console.log("Latest", latest);
};

export default LatestCocktails;
