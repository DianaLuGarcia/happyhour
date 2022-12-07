import React from "react";
import axios from "axios";

const NonAlcoholic = async () => {
  const nonAlcoholic = await axios.get(
    `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/filter.php?a=Non_Alcoholic`
  );

  console.log("nonAlcoholic", nonAlcoholic);
  return <div>NonAlcoholic</div>;
};

export default NonAlcoholic;
