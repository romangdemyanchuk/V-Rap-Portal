/* eslint-disable */
import {
  ADD_CASE,
  DELETE_CASE,
  CHANGE_STATUS,
  ALL_CASES,
} from "./session-constants";
import { AddCaseApi, DeleteCaseApi, AllCasesApi, EditCaseApi, AddCaseFiles, FiltredCaseApi } from "../../api";
import { Loading, addCase, deleteCase, AllCases } from "./session-actions";
import { infoAction } from "../../utils/notification";

const initialState = {
  loginError: "",
  newCaseInfo: {},
  statusNumber: null,
  researcherStudies: [],
  allCaseStudies: [],
  listOfResearcher: [],
  isUploaded: false,
  filtredCases: []
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
    case FILTRED_CASES:
      return {
        ...state,
        filtredCases: action.payload,
      };
    default:
      return state;
  }
};
export default CasesReducer;

export const NewCaseInfo = data => dispatch => {
  AddCaseApi(data)
    .then( response => {
      dispatch(Loading(true));
      if (response.data) {
        dispatch(addCase(response.data));
        infoAction("You successfully create new study!", "");
      }
      if (response.data._id){
        AddCaseFiles(response.data._id)
      }
      dispatch(Loading(false));
    })
    .catch( e => {
      if (e.response && e.response.data) {
        infoAction(e.response.data.message, "/researcher-studies");
      }
      dispatch(Loading(false));
    })
}

export const EditCaseInfo = data => dispatch => {
 EditCaseApi(data)
 .then( response => {
  dispatch(Loading(true));
  if (response.data) {
    dispatch(addCase(response.data));
    infoAction("You successfully changes your study!", "");
  }
  if (response.data._id){
    AddCaseFiles(response.data._id)
  }
  dispatch(Loading(false));
})
.catch( e => {
  if (e.response && e.response.data) {
    infoAction(e.response.data.message, "/researcher-studies");
  }
  dispatch(Loading(false));
})
  // infoAction("You successfully change your study!", "");
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

export const AllCasesInfo = () => dispatch => {
  dispatch(Loading(true));
  AllCasesApi()
    .then((response) => {
      dispatch(Loading(false));
      if (response) {
        dispatch(AllCases(response.data));
      }
    }).catch( e => {
      debugger
      if (e.response.status === 401) {
        localStorage.clear()
        infoAction(e.response.data.message, "/");
      }
      if (e.response.data) {
        infoAction(e.response.data.message, "/researcher-studies");
      }
    })
    .finally(() => {
      dispatch(Loading(false));
    })
}
export const FILTRED_CASES = "FILTRED-CASES"
export const filtredCasesData = (payload) => ({type: FILTRED_CASES, payload})

export const FiltredCases = () => dispatch => {
  dispatch(Loading(true));
  FiltredCaseApi()
    .then( response => {
      dispatch(Loading(false))
      dispatch(filtredCasesData(response.data))
    })
    .finally(() => {
      dispatch(Loading(false));
    })
}
