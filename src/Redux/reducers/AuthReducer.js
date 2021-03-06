import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        photoURL: action.payload.photoURL,
      };
    case types.logout:
      return {};

    case types.recoverPassword:
      return {
        ...state,
        recover: true,
      };

    default:
      return state;
  }
};
