import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "./product/reducer";
import { cartReducer } from "./cart/reducer";

const RootReducers = combineReducers({
  phone: productReducer,
  cart: cartReducer,
  // Ensure the key matches your useSelector state
});

const store = legacy_createStore(RootReducers, applyMiddleware(thunk));

export { store };
