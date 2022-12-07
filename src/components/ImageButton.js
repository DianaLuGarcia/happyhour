// import * as React from "react";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";
// import IconButton from "@mui/material/IconButton";
// import { Box, Grid } from "@mui/system";

// const ImageButton = ({ data, cocktails, setCocktails }) => {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <ImageList
//         sx={{ width: 800, height: 650 }}
//         columns={4}
//         rows={3}
//         rowHeight={394}
//       >
//         {data.map((item) => (
//           <ImageListItem key={item.strDrinkThumb}>
//             {item.strDrink}
//             <img
//               src={`${item.strDrinkThumb}?w=248&fit=crop&auto=format`}
//               alt={item.strDrink}
//               loading='lazy'
//             />
//             <ImageListItemBar
//               title={item.strDrink}
//               actionIcon={
//                 <IconButton
//                   sx={{ color: "rgba(255, 255, 255, 0.54)" }}
//                   aria-label={`info about ${item.strDrink}`}
//                 ></IconButton>
//               }
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </Box>
//   );
// };

// export default ImageButton;

import React from "react";

const ImageButton = () => {
  return <div>ImageButton</div>;
};

export default ImageButton;
