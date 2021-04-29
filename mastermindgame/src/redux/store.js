import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import numbersReducer from "./numbers";

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(numbersReducer, middleware);

export default store;
