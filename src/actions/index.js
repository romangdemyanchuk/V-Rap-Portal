/* eslint-disable */
export const listOfCaseStudies = (data) => {
  return {
    type:'LIST_OF_CASE_STUDIES',
    payload: data
  };
};

export const listOfResearchers = (data) => {
  return {
    type:'LIST_OF_RESEARCHERS',
    payload: data
  };
};

export const caseStudiesColumns = (data) => {
  return {
    type:'LIST_OF_CASE_STUDIES_COLUMNS',
    payload: data
  };
};

export const researcherListColumns = (data) => {
  return {
    type:'LIST_OF_RESEARCHERS_COLUMNS',
    payload: data
  };
};
