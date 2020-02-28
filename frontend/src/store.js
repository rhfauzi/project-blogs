import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import blog from "./reducers/blog.reducer";
import users from "./reducers/users.reducers";

export default createStore(
  combineReducers({ blog, users }),
  applyMiddleware(thunk)
);
