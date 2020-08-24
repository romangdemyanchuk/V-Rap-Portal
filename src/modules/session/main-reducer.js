/* eslint-disable */
import { USER_INFO, PART_INFO, DISABLE_BUTTONS, ALL_USERS, ALL_RESEARCHERS } from "./session-constants";
import {
  EditUserInfoApi,
  UserInfoApi,
  PartInfoApi,
  EditPartApi,
  getAllUsers, getResearchers,
} from '../../api'
import { UserInfo, PartInfo, Loading } from "./session-actions";
import { infoAction } from "../../utils/notification";

const initialState = {
  adminLoginData: [],
  adminRegisterData: "",
  loginError: "",
  userInfo: {},
  partInfo: {},
  listOfResearcher: [],
  listOfAdmins: [],
  isDisableButtons:true
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case PART_INFO:
      return {
        ...state,
        partInfo: action.payload,
      };
    case ALL_USERS:
      return {
        ...state,
        listOfAdmins: action.payload,
      };
    case ALL_RESEARCHERS:
      return {
        ...state,
        listOfResearcher: action.payload,
      };
    case DISABLE_BUTTONS:
      return {
        ...state,
        isDisableButtons: action.payload,
      };

    default:
      return state;
  }
};
export default MainReducer;

export const EditResearcherProfile = (data, callback) => (dispatch) => {
  // dispatch(Loading(true));
  EditUserInfoApi(data)
    .then((response) => {
      // dispatch(Loading(false));
      dispatch(UserInfo(response));
      infoAction("Your information is successfully updated!", "");
      callback(false)(dispatch)
    })
    .catch((e) => {
      if (e.response && e.response.data) {
        infoAction(e.response.data.message, "");
      }
    })
    .finally(() => {
      dispatch(Loading(false));
    });
};

export const EditParticipantProfile = (data, callback) => (dispatch) => {
  // dispatch(Loading(true));
  EditPartApi(data)
    .then((response) => {
      // dispatch(Loading(false));
      dispatch(PartInfo(response.data));
      infoAction("Your information is successfully updated!", "participant-profile");
      callback(false)(dispatch)
    })
    .catch((e) => {
      if (e.response && e.response.data) {
        infoAction(e.response.data.message, "");
      }
    })
    .finally(() => {
      dispatch(Loading(false));
    });
};

export const UsersInfo = () => (dispatch) => {
  dispatch(Loading(false));
  UserInfoApi()
    .then((response) => {
      dispatch(Loading(true));
      if (response.data) {
        const { area, name, school } = response.data;
        dispatch(UserInfo({ area, school, name }));
      }
    })
    .catch((e) => {
      if (e.response.status === 401) {
        localStorage.clear();
        // if (typeof window !== 'undefined') {
        //   window.location = '/'
        // }
      }
    })
    .finally(() => {
      dispatch(Loading(false));
    });
};

export const PartProfileInfo = () => (dispatch) => {
  dispatch(Loading(false));
  PartInfoApi()
    .then((response) => {
      dispatch(Loading(true));
      if (response.data) {
        const { name, age, location, income, headset, profession } = response.data;
        dispatch(PartInfo({ name, age, location, income, headset, profession }));
      }
    })
    .catch((e) => {
      // if (e.response.status === 401) {
      //   localStorage.clear();
      //   if (typeof window !== 'undefined') {
      //     window.location = '/'
      //   }
      // }
    })
    .finally(() => {
      dispatch(Loading(false));
    });
};

const allUsersAC = (data) => ({ type: ALL_USERS, payload: data });
export const allUsers = () => dispatch => {
  dispatch(Loading(true));
  getAllUsers().then( response => {
    dispatch(Loading(false));
    if (response.data) {
      dispatch(allUsersAC(response.data));
    }
  })
}
const allResearchersAC = (data) => ({ type: ALL_RESEARCHERS, payload: data });

export const researcherUsers = () => dispatch => {
  dispatch(Loading(true));
  getResearchers()
    .then( response => {
    dispatch(Loading(false));
    if (response.data) {
      dispatch(allResearchersAC(response.data));
    }
  })
  dispatch(Loading(false));
}

const isButtonDisabledAC = (value) => ({ type: DISABLE_BUTTONS, payload: value });

export const ChangeIsButtonDisabled = (value) => dispatch => {
      dispatch(isButtonDisabledAC(value));
}
