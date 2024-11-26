import { Box, Button, Divider, List, ListItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../Redux/cart/action'
import { increaseQty } from '../Redux/cart/action'
import { decreaseQty } from '../Redux/cart/action'
// import { REMOVE_FROM_CART } from '../Redux/cart/actionType'

const CartPage = () => {

	const cart = useSelector((state)=> state.cart.cart)
	const dispatch = useDispatch()
	// let [count, setCount] = useState(1)
	// const increament = () => setCount((prevCount)=> prevCount+1);
	// const decreament = () => setCount((prevCount)=> count >= 1 ? prevCount - 1 : 1 )
	// const navigate = useNavigate()

	const handleRemove = (id)=>{
		dispatch(removeFromCart(id)); // 
	}
	
	// const handleIncrement = (id) =>{
	// 	dispatch(updateQty(id, 1))
	// }
	// const  handleDecrement = (id, count)=>{
	// 	if(count > 0){
	// 		dispatch(updateQty(id, -1))
	// 	}
		
	// }

	const handleIncrement = (id)=>{
		dispatch(increaseQty({id}))
	}
	const handleDecrement = (id,qty) =>{
		if(qty > 0){
			dispatch(decreaseQty({id,qty}))
		}
	}


	const totalCartAmount = cart.reduce(
		(total, item) => total + (item.price * item.qty),
		0
	  )
	  console.log("totalcartamnt", totalCartAmount)
	
  return (
	<List sx={{pt:3,backgroundColor:"#f5f5f5", height:"90vh", width:"100%", mt:"10vh",display:"flex",justifyContent:"flex-start", alignItems:"center",flexDirection:"column"}}>

		{cart.length >= 1 && cart.map((item)=>(
		
		<ListItem sx={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",display:"flex",justifyContent:"space-between",borderRadius:"15px",mb:2,backgroundColor:"#fff",width:"90%", height:"33vh",py:6,px:3}}>
			<Box sx={{display:"flex",justifyContent:"center", alignItems:"center", gap:3}}>
				<Box sx={{backgroundColor:"#DCDCDC",borderRadius:"10px",py:2,px:1,height:"160px", width:"130px", objectFit:"contain",}} component="img" src={item.mainImage}></Box>
				<Box>
				    <Typography sx={{fontSize:"13px",mb:1}} >Mobile</Typography>
					<Typography sx={{fontSize:"20px", fontWeight:"600",mb:1}}>{item.name}</Typography>
					<Typography sx={{fontSize:"13px", fontWeight:"500",mb:1}}>Display : {item.displaySize}</Typography>
					<Typography sx={{fontSize:"13px", fontWeight:"500"}}>Camera : {item.camera}</Typography>
					{/* <Typography sx={{fontSize:"13px", fontWeight:"500"}}>Camera : {item.price}</Typography> */}

				</Box>
			</Box>
			<Box sx={{display:"flex",justifyContent:"center", alignItems:"center", gap:10}}>
				<Box>
					<Button
					onClick={()=>handleRemove(item.id)} 
					variant='text' sx={{color:'teal',fontSize:"13px", fontWeight:"600"}}>
						Remove
					</Button>
				</Box>
				<Box>
					<Typography sx={{fontWeight:"600", fontSize:"15px"}}>${item.price}</Typography>
				</Box>
				<Box sx={{display:"flex", gap:1}} >
				   <Button sx={{height:"30px", width:"20px", minWidth:"unset", fontSize:"30px", border:"1px solid #000",p:2, color:"teal"}}  onClick={()=> handleIncrement(item.id)}>+</Button>
				   <Typography sx={{textAlign:"center",fontSize:"15px",mt:1 }}>{item.qty}</Typography>
				   <Button 
				   disabled = {item.qty == 0}
				   sx={{height:"30px", width:"5px", minWidth:"unset", fontSize:"30px",border:"1px solid #000",p:2, color:"teal"}}  onClick={()=> handleDecrement(item.id ,item.qty)}>-</Button>
				</Box>
				<Box>
					{/* <Typography sx={{}}>Total Amount</Typography> */}
					<Typography sx={{color:'teal',fontSize:"15px", fontWeight:"600"}}>$$ {item.price * item.qty}</Typography>
				</Box>
			</Box>
					
		</ListItem>


		
		 ))}

		 <Box sx={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",borderRadius:"15px",height:"50px",width:"300px", backgroundColor:"#fff",p:5}}>
			<Box sx={{display:"flex", justifyContent:"center",alignItems:"center", gap:3,}}>
			<Typography sx={{fontSize:"20px",fontWeight:"600",}}>Total Cart Amount : </Typography>
			<Typography sx={{fontSize:"20px",fontWeight:"600",}}>{totalCartAmount.toFixed(2)}</Typography>
			</Box>
		 </Box>
		  	
		
	</List>
  )
}

export default CartPage
