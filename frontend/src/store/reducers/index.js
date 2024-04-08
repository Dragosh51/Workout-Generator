import { combineReducers } from "redux";
import productsReducers from "./productsReducers";
import authReducers from "./authReducers";
import cartReducer from "./cartReducer";
import workoutsReducers from "./workoutsReducers"; 

export default combineReducers({
  products: productsReducers,
  auth: authReducers,
  cart: cartReducer,
  workouts: workoutsReducers, 
});