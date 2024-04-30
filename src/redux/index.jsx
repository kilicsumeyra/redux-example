import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";

const rootReducer= combineReducers({
    count: counterReducer,
})

export const store= createStore(rootReducer)