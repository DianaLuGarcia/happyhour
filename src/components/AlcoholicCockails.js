import React from "react";
import axios from "axios";

const AlcoholicCockails = async () => {
  const alcoholic = await axios.get(
    `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/filter.php?a=Alcoholic`
  );
  console.log("Alcoholic", alcoholic);
  return <div>AlcoholicCockails</div>;
};

export default AlcoholicCockails;
