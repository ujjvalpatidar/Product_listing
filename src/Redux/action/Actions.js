import { ActionTypes } from "../constants/Action-Types";

export const setAdminLogIn = (user) => {
    return {
      type: ActionTypes.ADMIN_LOGIN,
      payload: user,
    };
  };

  