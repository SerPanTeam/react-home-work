import { connect } from "react-redux";
import { inc1Action, inc10Action, inc100Action } from "./actions";

const Counter = ({ count, inc1, inc10, inc100 }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc1}>+1</button>
      <button onClick={inc10}>+10</button>
      <button onClick={inc100}>+100</button>
    </div>
  );
};

// Функция для преобразования состояния в пропсы компонента
const mapStateToProps = (state) => ({
  count: state.count,
});

// Функция для преобразования действий в пропсы компонента
const mapDispatchToProps = (dispatch) => ({
  inc1: () => dispatch(inc1Action()),
  inc10: () => dispatch(inc10Action()),
  inc100: () => dispatch(inc100Action()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
