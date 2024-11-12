export interface Action {
  type: string;
  payload: User;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
}
