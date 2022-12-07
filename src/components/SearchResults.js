import React from "react";

import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
// import ImageList from "@mui/material";
// import ImageListItem from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";
// import IconButton from "@mui/material/IconButton";
// import Card from "@mui/material";
// import Tooltip from "@mui/material";

const SearchResults = ({ data, cocktails, setCocktails }) => {
  return (
    <Container>
      <ImageList
        gap={12}
        sx={{
          mb: 8,
          // gridTemplateColumns:
          //   "!important repeat(auto-fill, minmax(280px, 1fr))",
        }}
      >
        {data.map((item) => (
          <Card key={{ item }}>
            <ImageListItem sx={{ height: "100% !important" }}>
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%)",
                }}
              />
              <img
                src={item.strDrinkThumb}
                alt={item.strDrink}
                loading='lazy'
                style={{ cursor: "pointer" }}
              />
              <ImageListItemBar title={item.strDrink} />
            </ImageListItem>
          </Card>
        ))}
      </ImageList>
    </Container>
  );
};

export default SearchResults;
