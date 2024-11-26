import React from 'react'
import Phones from '../Components/Phones'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getData } from '../Redux/product/action';
import { useEffect } from 'react';
import { Box } from '@mui/material';



const Shop = () => {
	const phones = useSelector((state) => state.phone.phones);
	const dispatch = useDispatch();
console.log("data get",phones)
	useEffect(() => {
		if (phones.length === 0) {
		  console.log("Fetching data...");
		  dispatch(getData());
		}
	  }, [dispatch, phones]);

	  console.log("Phones in Shop:", phones); // Check data here

	

  return (
	<Box  sx={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",width:'100%',height:"200%",mt:"10vh",backgroundColor:"#EBEAE9"}}>
	<Phones phones={phones} /> {/* Passing phones as a prop */}

	</Box>
  )
}

export default Shop
