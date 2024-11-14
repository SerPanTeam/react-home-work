import { ADD_USER, DEL_USER, MOD_USER } from "./actions";
import { User } from "./interfaces";
import { Action } from "./interfaces";

const initState = {
  users: [],
};

export function userReducer(state = initState, action: Action) {
  // console.log(action);

  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case MOD_USER:
      const userToModify = action.payload as User;

      return {
        ...state,
        users: [
          ...state.users.filter((val: User) => val.id != userToModify.id ),
          action.payload,
        ],
      };
    case DEL_USER:
      return {
        ...state,
        users: [
          ...state.users.filter((val: User) => val.id != action.payload),
        ],
      };
    default:
      return state;
  }
}
