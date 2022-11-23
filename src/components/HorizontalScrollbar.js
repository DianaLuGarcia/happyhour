import React from "react";
import { Box } from "@mui/material";

const HorizontalScrollbar = ({ data, cocktails, setCocktails }) => {
  return (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          thumb={item.id || item}
          m='0 40px'
        >
          {item.strDrink}
          {item.strDrinkThumb}
        </Box>
      ))}
    </div>
  );
};
export default HorizontalScrollbar;
{
}
