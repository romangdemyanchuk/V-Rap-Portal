/* eslint-disable */
import {
  ADD_CASE,
  DELETE_CASE,
  CHANGE_STATUS,
  ALL_CASES,
  DELETE_RESEARCHER,
  EDIT_RESEARCHER,
  DOWNLOAD_CASE,
  PENDING_CASES_COUNT
} from "./session-constants";
import {
  AddCaseApi,
  DeleteCaseApi,
  AllCasesApi,
  EditCaseApi,
  AddCaseFiles,
  FiltredCaseApi,
  DeleteResearcherUser, CaseResult, CaseDownload
} from '../../api'
import { Loading, addCase, deleteCase, AllCases, allResearchersAC } from './session-actions'
import { infoAction } from "../../utils/notification";
import React from 'react'
import { allUsers } from './main-reducer'
const initialState = {
  loginError: "",
  newCaseInfo: {},
  statusNumber: null,
  researcherStudies: [],
  allCaseStudies: [],
  listOfResearcher: [],
  isUploaded: false,
  filtredCases: [],
  editResearcherInfo: [],
  idOfDeleteResearcherId: null,
  caseResults: {},
  caseDownloadInfo: {},
  pendingCasesCount: 1
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
    case DELETE_RESEARCHER:
      return {
        ...state,
        idOfDeleteResearcherId: action.payload,
      };
    case EDIT_RESEARCHER:
      return {
        ...state,
        editResearcherInfo: action.payload,
      };
    case CASE_RESULT:
      return {
        ...state,
        caseResults: action.payload,
      };
    case DOWNLOAD_CASE:
      return {
        ...state,
        caseDownloadInfo: action.payload,
      };
    case PENDING_CASES_COUNT:
      return {
        ...state,
        pendingCasesCount: action.payload,
      };
    default:
      return state;
  }
};
export default CasesReducer;

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


export const NewCaseInfo = (data) => dispatch => {
  const history = data.history
  AddCaseApi(data)
    .then( response => {
      dispatch(Loading(true));
      if (response.data) {
        dispatch(addCase(response.data))
      }
      if (response.data._id){
        AddCaseFiles(response.data._id)
      }
      dispatch(Loading(false));
      infoAction('You successfully create new case!', "/researcher-studies");
      history.push('/researcher-studies');
    })
    .catch( e => {
      if (e.response && e.response.data) {
        infoAction(e.response.data.message, "/researcher-studies");
      }
      dispatch(Loading(false));
    })
}

export const EditCaseInfo = data => dispatch => {
  const history = data.history;
  EditCaseApi(data)
    .then( response => {
      console.log(0)
      AllCasesInfo()(dispatch);
        if (response.data) {
          dispatch(addCase(response.data));
          infoAction("You successfully changes your study!", "/researcher-studies");
        }

      if (response.data._id){
        AddCaseFiles(response.data._id)
      }
      history.push('/researcher-studies');
    })
    .then(() => {
      console.log(1)
      AllCasesInfo()(dispatch);
    })
    .then(() => {
      console.log(2)
      dispatch(Loading(false));
    })
    .catch( e => {
      if (e.response && e.response.data) {
        infoAction(e.response.data.message, "/researcher-studies");
      }
      dispatch(Loading(false));
    })
}

export const DeleteCaseInfo = id => dispatch => {
  DeleteCaseApi(id)
    .then((response) => {
      AllCasesInfo()(dispatch);
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

export const DeleteUser = id => dispatch => {
  DeleteResearcherUser(id)
    .then((response) => {
      allUsers()(dispatch);
      if (response) {
        dispatch(allResearchersAC(response.data));
      }
    })
    .catch((e) => {
      if (e.response && e.response.data) {
        infoAction(e.response.data.message, "");
      }
    })
    .finally(() => {
      infoAction("User was successfully deleted!", "");
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
}

export const ViewCaseResults = () => dispatch => {
  CaseResult()
    .then((response) => {
    })
};
const CASE_RESULT = 'CASE_RESULT'
const caseResult = () => ({type: CASE_RESULT })

export const ResultOfCase = () => dispatch => {
  CaseResult()
    .then((response) => {
      if (response.data) {
        dispatch(caseResult(response.data))
      }
    })
};

export const DownloadCase = (data) => dispatch => {
  CaseDownload(data)
    .then((response) => {
      if (response) {
        dispatch(allResearchersAC(response.data));
      }
    })
    .catch((e) => {
      if (e.response && e.response.data) {
        infoAction(e.response.data.message, "");
      }
    })
    .finally(() => {
      infoAction("Download was successfull!", "");
    });
};

export const pendingCasesCount = (payload) => ({type: PENDING_CASES_COUNT, payload})
export const PendingCasesCount = (value) => dispatch => {
  dispatch(pendingCasesCount(value))
}


