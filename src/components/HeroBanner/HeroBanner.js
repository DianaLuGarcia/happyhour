import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HeroBannerImage from "./../../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position='relative'
      p='20px'
    >
      <Box id='hero-text'>
        <Typography color='#A8E6CF' variant='h3' fontWeight='600'>
          The best hour <br /> is happy hour!
        </Typography>
        <Typography
          color='#3A1212'
          variant='h6'
          fontWeight='600'
          mb={2}
          mt='30px'
          sx={{ fontSize: { lg: "22px", xs: "20px" } }}
        >
          Stir, Shake, Mix or Blend your way to Happiness.
        </Typography>

        <Button variant='contained' href='#Cocktails'>
          Explore Cocktails
        </Button>
      </Box>
      <Box id='banner-img'>
        <img
          style={{ width: "50%", height: "50%", margin: "0 20px" }}
          src={HeroBannerImage}
          alt='Banner'
          marginRight='20px'
        />
      </Box>
    </Box>
  );
};

export default HeroBanner;
