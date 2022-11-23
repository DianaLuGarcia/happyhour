import React from "react";
import { Stack, ImageList, ImageListItem } from "@mui/material";
// import HorizontalScrollbar from "./HorizontalScrollbar";

export const ImageButton = (data, cocktails, setCocktails) => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} columns={3} rowHeight={164}>
        {data.map((item) => (
          <ImageListItem key={item.strDrinkThumb}>
            {item.strDrink}
            <img
              src={`${item.strDrinkThumb}`}
              alt={item.strDrink}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
};

export default ImageButton;
