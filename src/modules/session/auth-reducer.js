/* eslint-disable */
import { LOGIN, REGISTER, LOADING, REGISTER_BY_ADMIN } from "./session-constants";
import { RegisterApi, LoginApi, ChangePasswordApi, UploadResults } from '../../api'
import { Register, Loading, Login, AllCases, RegisterInAdmin } from "./session-actions";
import { infoAction } from "../../utils/notification";
import { allUsers } from './main-reducer'

const initialState = {
  adminLoginData: [],
  adminRegisterData: [],
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
        registerData: action.payload,
      };
    case REGISTER_BY_ADMIN:
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
    .finally(() => {
      dispatch(Loading(false));
    });
};

export const UploadResultFile = (file, setUploadModalOpen, setSuccessModalIsOpen) => () => {
  UploadResults(file)
    .then((response) => {
      if (response.statusText === "Created") {
        setSuccessModalIsOpen(true)
        setUploadModalOpen(false)
      }
    })
};

export const RegisterRequest = (data) => (dispatch) => {
  RegisterApi(data)
    .then((response) => {
      if (response) {
        dispatch(Register(response));
      }
      if(response.request.statusText === "Created") {
        LoginApi(data)
          .then((response) => {
            if (response.statusText === "OK") {
              let token = response.data.token;
              localStorage.setItem("userLoginToken", token);
              localStorage.setItem("isAuth", true);
              dispatch(Login(response));
            }
          })
      }
      dispatch(Loading(false));

    })
    .catch((e) => {
      if (e.response.status > "400") {
        infoAction(e.response.data.message, "");
      }
      dispatch(Loading(false));
    });
};
export const RegisterByAdmin = (data) => (dispatch) => {
  RegisterApi(data)
    .then((response) => {
      allUsers()(dispatch);
      if (response) {
        dispatch(RegisterInAdmin(response));
      }
      dispatch(Loading(false));
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
