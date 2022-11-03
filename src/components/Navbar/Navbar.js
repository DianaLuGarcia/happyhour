import React from "react";
import { Link } from "react-router-dom"; //manages navigation around app
import { Stack } from "@mui/material"; //manages layout of immediate children along vertical or horizontal axis
import Logo from "./../../assets/images/Logo1.png";

const Navbar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px='20px'
    >
      <Link to='/'>
        <img
          src={Logo}
          alt='logo'
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
        <Link
          to='/'
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "4px solid #F8C4B4",
          }}
        >
          Home
        </Link>
        <a
          href='#cocktails'
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "4px solid #FFFFFF",
          }}
        >
          Cocktails
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
