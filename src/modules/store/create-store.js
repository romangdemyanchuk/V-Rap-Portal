/*eslint-disable*/
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import MainReducer from "../session/session-reducers"

const store = createStore(MainReducer, applyMiddleware(thunk))

export default store
