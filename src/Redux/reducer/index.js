import { combineReducers } from "redux";
import{adminLoginReducer} from "./Reducers"
const combReducer = combineReducers({
  adminLogIn:adminLoginReducer,
  
  });
  export default combReducer;