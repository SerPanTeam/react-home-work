
## src\actions.ts

```typescript
export const INC1 = "INC1";
export const INC10 = "INC10";
export const INC100 = "INC100";

export const inc1Action = () => ({ type: INC1 });
export const inc10Action = () => ({ type: INC10 });
export const inc100Action = () => ({ type: INC100 });

```

## src\App.tsx

```typescript
import Counter from "./Counter";
function App() {

  return (
    <>
      <Counter></Counter>
    </>
  )
}

export default App

```

## src\Counter.tsx

```typescript
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

```

## src\main.tsx

```typescript
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);

```

## src\reducer.ts

```typescript
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

```

## src\store.ts

```typescript
import { createStore } from "redux";
import counterReducer from "./reducer";

const store = createStore(counterReducer);

export default store;
```


