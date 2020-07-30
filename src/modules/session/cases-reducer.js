/* eslint-disable */
import {
  ADD_CASE,
  DELETE_CASE,
  CHANGE_STATUS,
  ALL_CASES,
} from "./session-constants";
import { AddCaseApi, DeleteCaseApi, AllCasesApi, EditCaseApi } from "../../api";
import { Loading, addCase, deleteCase, AllCases } from "./session-actions";
import { infoAction } from "../../utils/notification";

const initialState = {
  loginError: "",
  newCaseInfo: {},
  statusNumber: null,
  researcherStudies: [],
  allCaseStudies: [],
  listOfResearcher: [],
  isUploaded: false
};

const CasesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CASE:
      return {
        ...state,
        newCaseInfo: action.payload,
      };
    case DELETE_CASE:
      return {
        ...state,
        researcherStudies: action.payload,
      };
    case CHANGE_STATUS:
      return {
        ...state,
        statusNumber: action.payload,
      };
    case ALL_CASES:
      return {
        ...state,
        allCaseStudies: action.payload,
      };
    default:
      return state;
  }
};
export default CasesReducer;

export const NewCaseInfo = (data) => (dispatch) => {
  console.log(data)
  AddCaseApi(data)
    .then((response) => {
      console.log("response", response);
      dispatch(Loading(true));
      if (response) {
        dispatch(addCase(response.data));
        infoAction("You successfully create new study!", "");
      }
    })
    .catch( e => {
      if (e.response && e.response.data) {
        infoAction(e.response.data.message, "/researcher-studies");
      }
      dispatch(Loading(false));
    })
}

export const EditCaseInfo = data => () => {
 EditCaseApi(data);
  infoAction("You successfully change your study!", "");
}

export const DeleteCaseInfo = id => dispatch => {

  DeleteCaseApi(id)
    .then((response) => {
      if (response) {
        dispatch(deleteCase(response));
      }
    })
    .catch((e) => {
      if (e.response && e.response.data) {
        infoAction(e.response.data.message, "");
      }
    })
    .finally(() => {
      infoAction("Case study was successfully deleted!", "");
    });
};

export const AllCasesInfo = () => (dispatch) => {
  dispatch(Loading(true));
  AllCasesApi()
    .then((response) => {
      dispatch(Loading(false));
      if (response) {
        dispatch(AllCases(response.data));
      }
    })
    .finally(() => {
      dispatch(Loading(false));
    })
  //   .catch(e => {
  //   if (e.response.status >= 400) {
  //     localStorage.clear();
  //     if (typeof window !== 'undefined') {
  //       window.location = '/'
  //     }
  //   }
  // })
}

