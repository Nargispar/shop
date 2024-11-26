import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Box,
  Typography,
  Button,
  Rating,
} from "@mui/material";
// import Button from '@mui/material'
import { useNavigate } from "react-router-dom";

const Phones = ({ phones }) => {
  const navigate = useNavigate();
  console.log(" phones comp", phones);
  // const {name,id, rating, mainImage, price} = phones
  return (
    <Box
	
      sx={{
		// backgroundColor:"gray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
       
      }}
    >
      {phones && phones.length > 0 ? (
        phones.map((phone) => (
          <Box
		  
            key={phone.id}
            sx={{
				pt:4,
              height: "500px",
              width: "19%",
              //   backgroundColor: "red",
            //   my: 2,
              mx: 2,
            }}
          >
			
            <Card
			 onClick={()=> navigate(`/shop/card/${phone.id}`)}
              sx={{
				cursor:"pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                pt: 3,
                borderRadius: "20px",
              }}
            >
              <CardMedia
                sx={{
                  borderRadius: "14px",
                  textAlign: "center",
                  height: "160px",
                  width: "90%",
                  backgroundColor: "#F7F6F5 ",
                  objectFit: "contain",
                }}
                component="img"
                src={phone.mainImage}
                alt={phone.name}
              />
              <CardContent>
                <Typography
                  variant="h3"
                  sx={{ fontSize: "18px", fontWeight: 700, mb: 1, mt: 1 }}
                >
                  {phone.name}
                </Typography>
                <Typography sx={{ fontSize: "10px", fontWeight: 600, mb: 1 }}>
                  DESCRIPTION
                </Typography>
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: 500,
                    textAlign: "justify",
                    color: "#000",
                    mb: 1,
                  }}
                >
                  {phone.description}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" ,mb:1}}>
                  <Typography sx={{fontSize:"15px"}}>{phone.displaySize}</Typography>
                  <Rating
                    name="yellow-stars"
                    defaultValue={phone.rating} // Default rating value
                    precision={0.5} // Allow half-star ratings
                    sx={{
                      "& .MuiRating-iconFilled": {
                        color: "gold", // Change filled star color to yellow
                      },
                      "& .MuiRating-iconEmpty": {
                        color: "#ccc", // Change empty star color
                      },
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 800,
                    textAlign: "center",
                  }}
                >
                  ${phone.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#DC143C",
                    px: 9,
                    borderRadius: "10px",
                    mb: 2,
                  }}
                >
                  ADD TO CARD
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))
      ) : (
        <Typography>No phones available</Typography>
      )}
    </Box>
  );
};

export default Phones;
