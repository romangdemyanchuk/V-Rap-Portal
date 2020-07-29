/* eslint-disable */
import { USER_INFO, PART_INFO } from "./session-constants";
import {
  EditUserInfoApi,
  UserInfoApi,
  PartInfoApi,
  EditPartApi,
  getAllUsers,
} from "../../api";
import { UserInfo, PartInfo, Loading } from "./session-actions";
import { infoAction } from "../../utils/notification";

const initialState = {
  adminLoginData: [],
  adminRegisterData: "",
  loginError: "",
  userInfo: {},
  partInfo: {},
  listOfResearcher: [],
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
    case ALL_RESEARCHERS:
      return {
        ...state,
        listOfResearcher: action.payload,
      };
    default:
      return state;
  }
};
export default MainReducer;

export const EditResearcherProfile = (data) => (dispatch) => {
  EditUserInfoApi(data)
    .then((response) => {
      if (response) {
        dispatch(UserInfo(response));
        infoAction("Your information is successfully updated!", "/researcher-profile");
      }
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

export const EditParticipantProfile = (data) => (dispatch) => {
  console.log(data)
  EditPartApi(data)
    .then((response) => {
      console.log(response.data)
      if (response) {
        infoAction("Your information is successfully updated!", "");
        dispatch(PartInfo(response.data));
      }
    })
    .catch((e) => {
      debugger
        if (e.response.status === 401) {
          localStorage.clear();
          if (typeof window !== 'undefined') {
            window.location = '/'
          }
        }
    })
    .finally(() => {
      dispatch(Loading(false));
    });
};

export const ResearcherProfileInfo = (token) => (dispatch) => {
  UserInfoApi(token)
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
        if (typeof window !== 'undefined') {
          window.location = '/'
        }
      }
    })
    .finally(() => {
      dispatch(Loading(false));
    });
};

export const PartProfileInfo = () => (dispatch) => {
  PartInfoApi()
    .then((response) => {
      dispatch(Loading(true));
      if (response.data) {
        dispatch(PartInfo({ ...response.data }));
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

//Admin
const ALL_RESEARCHERS = "ALL-RESEARCHERS";

const allResearchersAC = (data) => ({ type: ALL_RESEARCHERS, payload: data });

export const allResearchers = () => dispatch => {
  getAllUsers().then( response => {
    if (response) {
      dispatch(allResearchersAC(response.data));
    }
  })
}
