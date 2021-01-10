import { createStore } from "redux";
import ingredientReducer from "./reducers/ingredients";

const store = createStore(
  ingredientReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
