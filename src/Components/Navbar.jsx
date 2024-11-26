import React from 'react'
import { AppBar,Toolbar,Typography,IconButton,Badge,Box} from '@mui/material'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {Link, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';



const Navbar = () => {
	const cart = useSelector((state)=> state.cart.cart)
	const navigate = useNavigate()
  return (
	
	  <AppBar sx={{width:"100%", height:"10vh", backgroundColor:"#000", color:"#fff"}}>
		<Toolbar sx={{display:"flex" ,justifyContent:"center", alignItems:"center"}}>
         <Typography sx={{fontSize:"25px", fontWeight:"600", flexGrow:1, color:"#FF9900"}}>Logo</Typography>

		<Box sx={{
			 fontSize: "18px",
			 fontWeight: "600",
			 display: { xs: "none", md: "flex" },
			 justifyContent: "center",
			 alignItems: "center",
			 gap: 5,
			 textTransform: "uppercase",
			 pr:4,
			 color:"#fff"
		}}>
		<Link to="/" style={{color:"#fff", textDecoration:"none"}}>Home</Link>
		<Link to="/shop" style={{color:"#fff", textDecoration:"none"}}>shop</Link>
		<Link to="/trending" style={{color:"#fff", textDecoration:"none"}}> Trending</Link>
		</Box>
		 <IconButton onClick={()=> navigate('/shop/card/cartpage')} >
		 <ShoppingBagIcon sx={{fontSize:"30px" , fontWeight:"600", color:"#FF9900"}}/>
		 <Badge badgeContent={cart ? cart.length :0} color="error">
				</Badge>
		 </IconButton>
		</Toolbar>
	  </AppBar>
	
  )
}

export default Navbar
