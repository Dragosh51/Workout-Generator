import { combineReducers } from "redux";
import authReducers from "./authReducers";
import workoutsReducers from "./workoutsReducers"; 

export default combineReducers({
  auth: authReducers,
  workouts: workoutsReducers, 
});