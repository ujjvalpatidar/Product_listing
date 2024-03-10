import { ActionTypes } from "../constants/Action-Types";
const intialState = {
    user_info: {},
   

  };
  export const adminLoginReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.ADMIN_LOGIN:
        return { ...state, user_info: payload };
      default:
        return state;
    }
  };

  

 