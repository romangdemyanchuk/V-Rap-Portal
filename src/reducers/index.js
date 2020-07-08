/* eslint-disable */
import React from 'react'
import ResearcherChanges from '../components/Admin/ListOfResearchers/ResearcherChanges'
const openTable = () => {
  <ResearcherChanges modalIsOpen={true}/>
  console.log('text');
}

const initialState = {
  caseStudies: [
    {
      key: "1",
      title: "Case Study 1",
      vr_file: "Download",
      created: "21th of June, 2020",
      location: "USA, Canada",
      age: "35-60",
      average: "All",
      status: "Pending",
      participated: "0/200",
      actions: "Edit/Delete",
    },
    {
      key: "2",
      title: "Case Study 2",
      vr_file: "Download",
      created: "21th of June, 2020",
      location: "USA, Canada",
      age: "21-30",
      average: "All",
      status: "In progress",
      participated: "15/100",
      actions: "Edit/Results",
    },
    {
      key: "3",
      title: "Case Study 3",
      vr_file: "Download",
      created: "21th of June, 2020",
      location: "USA, Canada",
      age: "18-21",
      average: ">35,000",
      status: "To be revised",
      participated: "0/50",
      actions: "Edit",
    },
    {
      key: "4",
      title: "Case Study 4",
      vr_file: "Download",
      created: "21th of June, 2020",
      location: "USA, Canada",
      age: "30-40",
      average: ">45,000",
      status: "Pending",
      participated: "0/50",
      actions: "Edit",
    },
    {
      key: "5",
      title: "Case Study 5",
      vr_file: "Download",
      created: "21th of June, 2020",
      location: "USA, Canada",
      age: "30-40",
      average: "30,000-90,000",
      status: "Completed",
      participated: "100/100",
      actions: "Edit",
    },
  ],
  researchersList: [
    {
      key: "1",
      name: "Ada Lovelace",
      school_name: "MIT",
      area: "Area Name",
      actions: "Edit/Delete",
    },
    {
      key: "2",
      name: "Grace Hopper",
      school_name: "MIT",
      area: "Area Name",
      actions: "Edit/Delete",
    },
    {
      key: "3",
      name: "Margaret Hamilton",
      school_name: "UofT",
      area: "Area Name",
      actions: "Edit/Delete",
    },
    {
      key: "4",
      name: "Joan Clarke",
      school_name: "UofT",
      area: "UofT",
      actions: "Edit/Delete",
    },
  ],
  researcherListColumns: [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "School/Institution Name",
      dataIndex: "school_name",
      key: "age",
    },
    {
      title: "Area of Research",
      dataIndex: "area",
      key: "address",
    },
    {
      title: "Actions",
      key: "actions",
      dataIndex: "actions",
      render: (text) => (
        <div
          onClick={openTable}
        >
          {text}
        </div>
      ),
      // render: (text) => <a>{text}</a>,
    },
  ],
  caseStudiesColumns: [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "VR File",
      dataIndex: "vr_file",
      key: "vr_file",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Created at",
      dataIndex: "created",
      key: "created",
    },
    {
      title: "Location",
      key: "location",
      dataIndex: "location",
    },
    {
      title: "Age",
      key: "age",
      dataIndex: "age",
    },
    {
      title: "Average Income",
      key: "average",
      dataIndex: "average",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Participated",
      key: "participated",
      dataIndex: "participated",
    },
    {
      title: "Actions",
      key: "actions",
      dataIndex: "actions",
      render: (text) => <a>{text}</a>,
    },
  ]
}
const MainReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'LIST_OF_RESEARCHERS':
    return {
      ...state,
      researchersList: action.payload
    };
  case 'LIST_OF_CASE_STUDIES':
    return {
      ...state,
      caseStudies: action.payload
    };
  case 'LIST_OF_RESEARCHERS_COLUMNS':
    return {
      ...state,
      researcherListColumns: action.payload
    };
  case 'LIST_OF_CASE_STUDIES_COLUMNS':
    return {
      ...state,
      caseStudiesColumns: action.payload
    };
  default:
    return state;
  }
};
export default MainReducer;