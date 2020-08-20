/*eslint-disable*/
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import MainReducer from "../session/main-reducer";
import AuthReducer from "../session/auth-reducer";
import CasesReducer from "../session/cases-reducer";

const allReducers = combineReducers({
  main: MainReducer,
  auth: AuthReducer,
  cases: CasesReducer,
});

const store = createStore(allReducers, applyMiddleware(thunk));

// export default createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk))
//
// export default createStore(combineReducers(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()), applyMiddleware(thunk))

export default store;
