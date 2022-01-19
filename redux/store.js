import { createStore } from "redux";
import reducers from "./reducers/index";

export default function configureStore(initialState) {
  return createStore(reducers, initialState);
}
// const store = createStore(
//     reducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// export default store;
