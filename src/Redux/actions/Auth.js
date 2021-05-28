import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";

export const login = (uid, displayName) => {
    return {
      type: types.login,
      payload: {
        uid,
        displayName,
      },
    };
  };