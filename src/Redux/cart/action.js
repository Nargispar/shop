import { ADD_TO_CART,REMOVE_FROM_CART, INCREASE_QTY,DECREASE_QTY} from "./actionType"

 export const addToCart = (phone) =>({
	type:ADD_TO_CART,
	payload:phone
})

 export const removeFromCart = (id) =>({
	type:REMOVE_FROM_CART,
	payload:{id}
})
export const increaseQty = (payload) =>({
	type:INCREASE_QTY,
	payload
})
export const decreaseQty = (payload) =>({
	type:DECREASE_QTY,
	payload
})