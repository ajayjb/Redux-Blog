import { combineReducers } from "redux";
import postReducer from "./PostReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  posts: postReducer,
  users: userReducer,
});
