import { createStore, applyMiddleware } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { applyMiddleware } from "redux";

export const store = createStore(rootReducer, applyMiddleware(thunk));
