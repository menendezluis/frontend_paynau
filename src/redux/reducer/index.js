import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "../reducer/slice/posts";

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;
