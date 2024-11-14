export interface Action {
  type: string;
  payload: User | number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
}

export interface AppState {
  users: User[];
}