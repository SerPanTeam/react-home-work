import { createStore } from "redux";
import { userReducer } from "./reducer";

export const store = createStore(userReducer as any);
