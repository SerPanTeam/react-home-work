import { ADD_USER } from "./actions";
import {Action} from "./interfaces";

const initState = {
  users: [],
};

export function userReducer(state = initState, action: Action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
}
