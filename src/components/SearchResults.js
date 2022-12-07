// import React from "react";

// import {
//   Card,
//   Container,
//   ImageList,
//   ImageListItem,
//   ImageListItemBar,
//   Rating,
//   Tooltip,
// } from "@mui/material";
// import { StarBorder } from "@mui/icons-material";
// // import ImageList from "@mui/material";
// // import ImageListItem from "@mui/material/ImageListItem";
// // import ImageListItemBar from "@mui/material/ImageListItemBar";
// // import IconButton from "@mui/material/IconButton";
// // import Card from "@mui/material";
// // import Tooltip from "@mui/material";

// const SearchResults = ({ data, cocktails, setCocktails }) => {
//   return (
//     // <Container>
//     //   <ImageList
//     //     gap={12}
//     //     sx={{
//     //       mb: 8,
//     //       gridTemplateColumns: `'repeat(auto-fill, minimax(280px, 1fr))!important'`,
//     //     }}
//     //   >
//     //     {data.map((item) => (
//     //       <ImageListItem key={item.strDrinkThumb}>
//     //         {item.strDrink}
//     //         <img src={item.strDrinkThumb} alt={item.strDrink} loading='lazy' />
//     //         <ImageListItemBar
//     //           title={item.strDrink}
//     //           actionIcon={
//     //             <IconButton
//     //               sx={{ color: `'rgba(255, 255, 255, 0.54)'` }}
//     //               aria-label={`'info about ${item.strDrink}'`}
//     //             />
//     //           }
//     //         />
//     //       </ImageListItem>
//     //     ))}
//     //   </ImageList>
//     // </Container>

//     <Container>
//       <ImageList
//         gap={12}
//         sx={{
//           mb: 8,
//           // gridTemplateColumns:
//           // "repeat(auto-fill, minmax(280px, 1fr))!important",
//         }}
//       >
//         {data.map((item) => (
//           <Card key={{ item }}>
//             <ImageListItem sx={{ height: "100% !important" }}>
//               <ImageListItemBar
//               // sx={{
//               //   background:
//               //     "linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%)",
//               // }}
//               />
//               <img
//                 src={item.strDrinkThumb}
//                 alt={item.strDrink}
//                 loading='lazy'
//                 style={{ cursor: "pointer" }}
//               />
//               <ImageListItemBar
//                 title={item.strDrink}
//                 actionIcon={
//                   <Rating
//                     sx={{ color: "rgba(255,255,255, 0.8)", mr: "5px" }}
//                     name='room-rating'
//                     defaultValue={3.5}
//                     precision={0.5}
//                     emptyIcon={
//                       <StarBorder sx={{ color: "rgba(255,255,255, 0.8)" }} />
//                     }
//                   />
//                 }
//               />
//             </ImageListItem>
//           </Card>
//         ))}
//       </ImageList>
//     </Container>
//   );
// };

// export default SearchResults;
import React from "react";

const SearchResults = () => {
  return <div>SearchResults</div>;
};

export default SearchResults;
