import { User } from "./interfaces";

export const ADD_USER = "ADD_USER";
export const MOD_USER = "MOD_USER";
export const DEL_USER = "DEL_USER";

export const addUser = (user: User) => ({ type: ADD_USER, payload: user });
export const modUser = (user: User) => ({ type: MOD_USER, payload: user });
export const delUser = (userID: number) => ({ type: DEL_USER, payload: userID });
