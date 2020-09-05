/*eslint-disable*/
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import MainReducer from "../session/main-reducer";
import AuthReducer from "../session/auth-reducer";
import CasesReducer from "../session/cases-reducer";
import {reducer as formReducer} from 'redux-form'

const allReducers = combineReducers({
  main: MainReducer,
  auth: AuthReducer,
  cases: CasesReducer,
  form: formReducer
});
const store = createStore(allReducers, applyMiddleware(thunk));
export default store;
