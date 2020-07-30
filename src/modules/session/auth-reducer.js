/* eslint-disable */
import { LOGIN, REGISTER, LOADING } from "./session-constants";
import { RegisterApi, LoginApi, ChangePasswordApi } from "../../api";
import { Register, Loading, Login, AllCases } from "./session-actions";
import { infoAction } from "../../utils/notification";

const initialState = {
  adminLoginData: [],
  adminRegisterData: "",
  loginError: "",
  isAuth: localStorage.getItem("isAuth"),
  isLoading: false,
  statusNumber: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        adminLoginData: action.payload,
        isAuth: true,
      };
    case REGISTER:
      return {
        ...state,
        adminRegisterData: action.payload,
      };
    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
export default AuthReducer;

export const LoginRequest = (data) => (dispatch) => {
  LoginApi(data)
    .then((response) => {
      if (response.statusText == "OK") {
        let token = response.data.token;
        localStorage.setItem("userLoginToken", token);
        localStorage.setItem("isAuth", true);
        dispatch(Login(response));
      }
    })
    // if (response.data.type == 2 && window.location.pathname == '/participant-login') {
    //   const token = response.data.token;
    //   localStorage.setItem("userLoginToken", token);
    //   localStorage.setItem("isAuth", true);
    //   dispatch(Login(response));
    //   infoAction("Successfully authorized participant!", "/participant-profile")
    // }
    // if (response.data.type == 1 && window.location.pathname == '/researcher-login') {
    //   const token = response.data.token;
    //   localStorage.setItem("userLoginToken", token);
    //   localStorage.setItem("isAuth", true);
    //   dispatch(Login(response));
    //   infoAction("Successfully authorized researcher!", "/researcher-profile")
    // }
    .catch((e) => {
      if (e.response.status >= '400') {
        infoAction(e.response.data.message, "");
      }
    })
    .finally(() => {
      dispatch(Loading(false));
    });
};

export const RegisterRequest = (data) => (dispatch) => {
  RegisterApi(data)
    .then((response) => {
      dispatch(Register(response));
      dispatch(Loading(false));
      if (response.statusText === 'Created') {
        infoAction('Account have been successfully created', "")
      }
      
    })
    .catch((e) => {
      if (e.response.status > "400") {
        infoAction(e.response.data.message, "");
      }
      dispatch(Loading(false));
    });
};

export const ChangePassword = (password) => (dispatch) => {
  ChangePasswordApi(password).then((response) => {
    dispatch(Loading(true));
    if (response) {
      dispatch(AllCases(response.data));
    }
  });
  dispatch(Loading(false));
};


//admin
//researcher register
export const ResearcherRegister = data => dispatch => {
  RegisterApi(data)
    .then( response => {
      dispatch(Register(response));
      dispatch(Loading(false));
      if (response.statusText === 'Created') {
        infoAction('Account have been successfully created', "")
      }
      
    })
    .catch((e) => {
      if (e.response.status > "400") {
        infoAction(e.response.data.message, "");
      }
      dispatch(Loading(false));
    });
};