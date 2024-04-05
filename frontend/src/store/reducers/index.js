import { combineReducers } from "redux";
import productsReducers from "./productsReducers";
import authReducers from "./authReducers";
import cartReducer from "./cartReducer";

export default combineReducers({
  products: productsReducers,
  auth: authReducers,
  cart: cartReducer,
});