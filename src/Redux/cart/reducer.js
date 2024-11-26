import { ADD_TO_CART,INCREASE_QTY,DECREASE_QTY,REMOVE_FROM_CART } from "./actionType";


const initState ={
	cart:[]
}

const cartReducer = (state = initState, action) =>{
	const {type, payload} = action

	switch(action.type){
		case ADD_TO_CART:
			const existingItem = state.cart.find((item)=>
				item.id === payload.id
			);
			let newCart;
			if(existingItem){
				newCart = state.cart.map((item)=>
					item.id === payload.id ? {...item, qty: item.qty +1 } : item
				)
			}
			else{
				let newOneCart = { ...payload, qty: 1 };
			   newCart = [...state.cart, newOneCart];
			   console.log("newCart", newCart)
			}
			   return{...state, cart:newCart}
				// return{
					// ...state,
					// cart:[...state.cart, {...action.payload, qty:1}]
				// }
				// case "UPDATE_QUANTITY":
				// 	return {
				// 		...state, cart: state.cart.map((item)=>
				// 			item.id === action.payload.id ?
				// 		 { ...item, count: item.count + action.payload.countChange }
				// 		: item
							
				// 		)
				// 	}
				case INCREASE_QTY :
			let modifiedCart = state.cart.map((item)=>{
				if(item.id === payload.id){
					return {...item, qty : item.qty + 1}
				}
				else{
					return item
				}
			})
			return {...state, cart: modifiedCart}
				
			case DECREASE_QTY :
				const { qty } = payload;
				let resultantCart = qty > 1 ? 
				state.cart.map((item)=>{
					if(item.id === payload.id){
						return {...item, qty:item.qty-1}
					}
					else{
						return item
					}
				}): state.cart.filter((item)=> !(item.id == payload.id))
				return {...state, cart: resultantCart}
				// let resultantCart = state.cart.map((item)=>{
				// 	if(item.id === payload.id){
				// 		return {...item, qty : item.qty - 1}
				// 	}
				// 	else if(item.qty === 0){
				// 		return {}
				// 	}
				// 	else{
				// 		return item
				// 	}
				// })
				// return {...state, cart: resultantCart}

				// case REMOVE_FROM_CART:
				// 	return {
				// 		...state, cart: state.cart.filter((item)=> item.id !== payload.id)

				// 	}	
				case REMOVE_FROM_CART :
					let updatedCart = state.cart.filter((item) =>{
						return !(item.id === payload.id)
					})
					return {...state, cart:updatedCart}
			default : 
				return state;				
			   

			
	}
}


export {cartReducer}