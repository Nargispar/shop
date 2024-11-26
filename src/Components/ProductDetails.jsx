import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { CardActions, CardContent, Button, Typography, Rating } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentData } from '../Redux/product/action';
import { addToCart } from '../Redux/cart/action';

const ProductDetails = () => {
  const { id } = useParams();
  const currentPhone = useSelector((state) => state.phone.currentPhones);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getCurrentData(id));
    }
  }, [dispatch, id]);




  const handleAddToCart = () => {
   
    let payload = {
      ...currentPhone,
      
    }
    dispatch(addToCart(payload))
  };
  console.log('currentPhone', currentPhone);

  return (
    <Box
      sx={{
        mt: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '90vh',
      }}
    >
      <Box
        sx={{
        //   border: '2px solid #000',
          width: '80%',
          height: '80vh',
          backgroundColor: '#f5f5f5',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 3,
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            width: '45%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              width: '90%',
              height: '80%',
              backgroundColor: '#e0e0e0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src={currentPhone?.mainImage}
              alt={currentPhone?.name}
              sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </Box>
        </Box>

        {/* Details Section */}
        <Box
          sx={{
            width: '50%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            p: 3,
          }}
        >
          <CardContent>
            <Typography sx={{ mb: 1.5, color: '#333' }}>Mobile</Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 500, mb: 2, color: '#000' }}
            >
              {currentPhone?.name}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 1,
                mb: 2,
              }}
            >
              <Rating
                name="yellow-stars"
                defaultValue={currentPhone?.rating || 0}
                precision={0.5}
                sx={{
                  '& .MuiRating-iconFilled': { color: 'gold' },
                  '& .MuiRating-iconEmpty': { color: '#ccc' },
                }}
              />
              <Typography>(3 customer reviews)</Typography>
            </Box>
            <Typography
              sx={{ fontSize: '14px', fontWeight: 600, mb: 1, color: '#444' }}
            >
              DESCRIPTION
            </Typography>
            <Typography
              sx={{
                fontSize: '15px',
                textAlign: 'justify',
                color: '#333',
                mb: 2,
              }}
            >
              {currentPhone?.description}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                mb: 3,
              }}
            >
              <Typography>Display: {currentPhone?.displaySize}</Typography>
              <Typography>Camera: {currentPhone?.camera}</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mb: 3,
              }}
            >
              <Typography
                sx={{ fontSize: '25px', fontWeight: 800, color: '#000' }}
              >
                ${currentPhone?.price}
              </Typography>
              <Typography
                sx={{
                  textDecoration: 'line-through',
                  fontSize: '20px',
                  color: 'gray',
                }}
              >
                $15999
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#DC143C',
                px: 4,
                borderRadius: '8px',
              }}
			  onClick={handleAddToCart}
            >
              ADD TO CART
            </Button>
          </CardActions>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
