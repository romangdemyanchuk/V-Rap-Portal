/* eslint-disable */
import {createStore} from "redux";
import MainReducer from "./modules/session/session-reducers";

const store = createStore(MainReducer);

export default store
