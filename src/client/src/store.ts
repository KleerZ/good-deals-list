import {combineReducers} from "redux";
import {friendReducer} from "@/reducers/friend.reducer";
import {todoReducer} from "@/reducers/deal.reducer";
import {userReducer} from "@/reducers/user.reducer";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  user: userReducer,
  todos: todoReducer,
  friends: friendReducer,
});

export const store = configureStore({
  reducer: rootReducer
});
