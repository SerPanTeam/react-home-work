import { INC1, INC10, INC100 } from "./actions";

const initState = { count: 0 };

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case INC1:
      return { count: state.count + 1 };
    case INC10:
      return { count: state.count + 10 };
    case INC100:
      return { count: state.count + 100 };
    default:
      return state;
  }
};

export default counterReducer;
