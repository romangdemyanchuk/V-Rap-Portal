/*eslint-disable*/
import React from "react";
import { CaseDownload } from '../../api'
import { status } from '../../components/Admin/AdminPage/ListOfCaseStudies/listOfCaseStudies'


export const statusOfCase = (status) => {
  switch (status) {
    case 0:
      return  'Edit Case';
    case 1:
      return  'Edit Case';
    case 2:
      return  'View Results';
    case 3:
      return  'Delete';
  }
}
export const caseStudiesResults = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    render: (text,record) => <span>{record.age[0]} - {record.age[1] }</span>
  },
  {
    title: "Income",
    dataIndex: "income",
    key: "income",
    render: (text,record) => <span>{record.income[0]} - {record.income[1] || '---'}</span>
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text,record) => <span>{status(record.status)}</span>,
  }
]

const applyAction = (status, setDeleteModalIsOpen, setEditModalIsOpen ) => {
  switch (status) {

    case 0:
      return  setEditModalIsOpen(true)
    case 1:
      return  setEditModalIsOpen(true)
    case 2:
      return  {}
    case 3:
      return  setDeleteModalIsOpen(true)
  }
}
export const caseStudiesColumns = (setCaseId, setStatus, setDeleteModalIsOpen, setEditModalIsOpen) => ({
  caseStudiesColumns: [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text,record) => <span>{record.title ? record.title : '---'}</span>,
    },
    {
      title: "VR File",
      dataIndex: "vr_file",
      key: "vr_file",
      render: (text,record) =>
      <a onClick={() =>
        CaseDownload(record)}>
        Download
      </a>,
    },
    {
      title: "Created at",
      dataIndex: "data",
      key: "data",
      render: (text,record) => <span>{record.data}</span>,

    },
    {
      title: "Location",
      key: "location",
      dataIndex: "location",
      render: (text,record) => <span>{record.location || '---'}</span>,
    },
    {
      title: "Age",
      key: "age",
      dataIndex: "age",
      render: (text,record) => <span>{record.age[0]} - {record.age[1] || '---'}</span>
    },
    {
      title: "Average Income",
      key: "income",
      dataIndex: "income",
      render: (text,record) => <span>{record.income[0]} - {record.income[1] || '---'}</span>
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (text,record) => <span>{status(record.status) || '---'}</span>,
    },
    {
      title: "Participated",
      key: "participant",
      dataIndex: "participant",
      render: (text,record) => <span>{record.participant ||'---'}</span>
    },
    {
      title: "Actions",
      key: "actions",
      dataIndex: "actions",
      render: (text,record) => <a
        onClick={() => {
        setCaseId(record._id)
        setStatus(record.status)
        applyAction(record.status, setDeleteModalIsOpen, setEditModalIsOpen)
      }
      } >
        {
          statusOfCase(record.status)
        }
      </a>
    },
  ],
});

export const pendingCaseColumns = (setCaseId, setEditModalIsOpen) => ({
  pendingCaseColumns: [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text,record) => <span>{record.title ? record.title : '---'}</span>,
    },
    {
      title: "VR File",
      dataIndex: "vr_file",
      key: "vr_file",
      render: (text,record) =>
        <a onClick={() =>
          CaseDownload(record)}>
          Download
        </a>,
    },
    {
      title: "Created at",
      dataIndex: "data",
      key: "data",
      render: (text,record) => <span>{record.data}</span>,

    },
    {
      title: "Location",
      key: "location",
      dataIndex: "location",
      render: (text,record) => <span>{record.location || '---'}</span>,
    },
    {
      title: "Age",
      key: "age",
      dataIndex: "age",
      render: (text,record) => <span>{record.age[0]} - {record.age[1] || '---'}</span>
    },
    {
      title: "Average Income",
      key: "income",
      dataIndex: "income",
      render: (text,record) => <span>{record.income[0]} - {record.income[1] || '---'}</span>
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (text,record) => <span>{status(record.status) || '---'}</span>,
    },
    {
      title: "Participated",
      key: "participant",
      dataIndex: "participant",
      render: (text,record) => <span>{record.participant || '---'}</span>
    },
    {
      title: "Actions",
      key: "actions",
      dataIndex: "actions",
      render: (text,record) => <a
        onClick={() => {
          setCaseId(record._id)
          setEditModalIsOpen(true)
        }
        } >
        {
          statusOfCase(record.status)
        }
      </a>
    },
  ],
});

export const researcherListColumns = (modalsOpen, setCaseId) => ({
  researcherListColumns: [
    {
      title: "E-mail",
      dataIndex: "login",
      key: "login",
      render: (text,record) => <span>{record.login || '---'}</span>
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text,record) => <span>{record.name || '---'}</span>
    },
    {
      title: "School/Institution Name",
      dataIndex: "school",
      key: "school",
      render: (text,record) => <span>{record.school || '---'}</span>
    },
    {
      title: "Area of Research",
      dataIndex: "area",
      key: "area",
      render: (text,record) => <span>{record.area || '---'}</span>
    },
    {
      title: "Actions",
      key: "actions",
      dataIndex: "actions",
      render: (text,record) => <a onClick={() => {
        modalsOpen(true)
        setCaseId(record._id)
      }
      } >Delete</a>,

    },
  ],
});

export const countryVariants = [
  {
    value: "Canada",
    label: "Canada",
  },
  {
    value: "United States",
    label: "United States",
  },
  {
    value: "United Kingdom",
    label: "United Kingdom",
  },
  {
    value: "Afghanistan",
    label: "Afghanistan",
  },
  {
    value: "Albania",
    label: "Albania",
  },
  {
    value: "Algeria",
    label: "Algeria",
  },
  {
    value: "Argentina",
    label: "Argentina",
  },
  {
    value: "Armenia",
    label: "Armenia",
  },
  {
    value: "Australia",
    label: "Australia",
  },
  {
    value: "Austria",
    label: "Austria",
  },
  {
    value: "Azerbaijan",
    label: "Azerbaijan",
  },
  {
    value: "Bahamas",
    label: "Bahamas",
  },
  {
    value: "Bahrain",
    label: "Bahrain",
  },
  {
    value: "Bangladesh",
    label: "Bangladesh",
  },
  {
    value: "Belarus",
    label: "Belarus",
  },
  {
    value: "Belgium",
    label: "Belgium",
  },
  {
    value: "Bermuda Islands",
    label: "Bermuda Islands",
  },
  {
    value: "Bolivia",
    label: "Bolivia",
  },
  {
    value: "Brazil",
    label: "Brazil",
  },
  {
    value: "Bulgaria",
    label: "Bulgaria",
  },
  {
    value: "Burundi",
    label: "Burundi",
  },
  {
    value: "Cambodia",
    label: "Cambodia",
  },
  {
    value: "Cameroon",
    label: "Cameroon",
  },
  {
    value: "Chile",
    label: "Chile",
  },
  {
    value: "China",
    label: "China",
  },
  {
    value: "Colombia",
    label: "Colombia",
  },
  {
    value: "Congo",
    label: "Congo",
  },
  {
    value: "Costa Rica",
    label: "Costa Rica",
  },
  {
    value: "Cuba",
    label: "Cuba",
  },
  {
    value: "Cyprus",
    label: "Cyprus",
  },
  {
    value: "Czech Republic",
    label: "Czech Republic",
  },
  {
    value: "Denmark",
    label: "Denmark",
  },
  {
    value: "Dominican Republic",
    label: "Dominican Republic",
  },
  {
    value: "Ecuador",
    label: "Ecuador",
  },
  {
    value: "Egypt",
    label: "Egypt",
  },
  {
    value: "El Salvador",
    label: "El Salvador",
  },
  {
    value: "Estonia",
    label: "Estonia",
  },
  {
    value: "Ethiopia",
    label: "Ethiopia",
  },
  {
    value: "Finland",
    label: "Finland",
  },
  {
    value: "France",
    label: "France",
  },
  {
    value: "Georgia",
    label: "Georgia",
  },
  {
    value: "Germany",
    label: "Germany",
  },
  {
    value: "Ghana",
    label: "Ghana",
  },
  {
    value: "Gibraltar",
    label: "Gibraltar",
  },
  {
    value: "Greece",
    label: "Greece",
  },
  {
    value: "Guatemala",
    label: "Guatemala",
  },
  {
    value: "Guinea",
    label: "Guinea",
  },
  {
    value: "Haiti",
    label: "Haiti",
  },
  {
    value: "Hawaii",
    label: "Hawaii",
  },
  {
    value: "Honduras",
    label: "Honduras",
  },
  {
    value: "Hong Kong",
    label: "Hong Kong",
  },
  {
    value: "Hungary",
    label: "Hungary",
  },
  {
    value: "Iceland",
    label: "Iceland",
  },
  {
    value: "India",
    label: "India",
  },
  {
    value: "Indonesia",
    label: "Indonesia",
  },
  {
    value: "Iran",
    label: "Iran",
  },
  {
    value: "Iraq",
    label: "Iraq",
  },
  {
    value: "Ireland",
    label: "Ireland",
  },
  {
    value: "Israel",
    label: "Israel",
  },
  {
    value: "Italy",
    label: "Italy",
  },
  {
    value: "Ivory Coast",
    label: "Ivory Coast",
  },
  {
    value: "Jamaica",
    label: "Jamaica",
  },
  {
    value: "Japan",
    label: "Japan",
  },
  {
    value: "Kazakhstan",
    label: "Kazakhstan",
  },
  {
    value: "Kenya",
    label: "Kenya",
  },
  {
    value: "Kuwait",
    label: "Kuwait",
  },
  {
    value: "Kyrgyzstan",
    label: "Kyrgyzstan",
  },
  {
    value: "Latvia",
    label: "Latvia",
  },
  {
    value: "Lebanon",
    label: "Lebanon",
  },
  {
    value: "Liberia",
    label: "Liberia",
  },
  {
    value: "Libya",
    label: "Libya",
  },
  {
    value: "Lithuania",
    label: "Lithuania",
  },
  {
    value: "Luxemburg",
    label: "Luxemburg",
  },
  {
    value: "Madagascar",
    label: "Madagascar",
  },
  {
    value: "Malawi",
    label: "Malawi",
  },
  {
    value: "Malaysia",
    label: "Malaysia",
  },
  {
    value: "Malta",
    label: "Malta",
  },
  {
    value: "Mexico",
    label: "Mexico",
  },
  {
    value: "Moldova",
    label: "Moldova",
  },
  {
    value: "Monaco",
    label: "Monaco",
  },
  {
    value: "Mongolia",
    label: "Mongolia",
  },
  {
    value: "Morocco",
    label: "Morocco",
  },
  {
    value: "Nepal",
    label: "Nepal",
  },
  {
    value: "Netherlands",
    label: "Netherlands",
  },
  {
    value: "New Zeland",
    label: "New Zeland",
  },
  {
    value: "Nicaragua",
    label: "Nicaragua",
  },
  {
    value: "Nigeria",
    label: "Nigeria",
  },
  {
    value: "North Korea",
    label: "North Korea",
  },
  {
    value: "Norway",
    label: "Norway",
  },
  {
    value: "Oman",
    label: "Oman",
  },
  {
    value: "Pakistan",
    label: "Pakistan",
  },
  {
    value: "Panama",
    label: "Panama",
  },
  {
    value: "Papua New Guinea",
    label: "Papua New Guinea",
  },
  {
    value: "Paraguay",
    label: "Paraguay",
  },
  {
    value: "Peru",
    label: "Peru",
  },
  {
    value: "Poland",
    label: "Poland",
  },
  {
    value: "Portugal",
    label: "Portugal",
  },
  {
    value: "Puerto Rico",
    label: "Puerto Rico",
  },
  {
    value: "Romania",
    label: "Romania",
  },
  {
    value: "Russia",
    label: "Russia",
  },
  {
    value: "Rwanda",
    label: "Rwanda",
  },
  {
    value: "Saudi Arabia",
    label: "Saudi Arabia",
  },
  {
    value: "Senegal",
    label: "Senegal",
  },
  {
    value: "Sierra Leone",
    label: "Sierra Leone",
  },
  {
    value: "Singapore",
    label: "Singapore",
  },
  {
    value: "Slovakia",
    label: "Slovakia",
  },
  {
    value: "Slovenia",
    label: "Slovenia",
  },
  {
    value: "South Africa",
    label: "South Africa",
  },
  {
    value: "South Korea",
    label: "South Korea",
  },
  {
    value: "South Ossetia",
    label: "South Ossetia",
  },
  {
    value: "Spain",
    label: "Spain",
  },
  {
    value: "Sri Lanka",
    label: "Sri Lanka",
  },
  {
    value: "Sudan",
    label: "Sudan",
  },
  {
    value: "Sweden",
    label: "Sweden",
  },
  {
    value: "Switzerland",
    label: "Switzerland",
  },
  {
    value: "Syria",
    label: "Syria",
  },
  {
    value: "Taiwan",
    label: "Taiwan",
  },
  {
    value: "Tajikistan",
    label: "Tajikistan",
  },
  {
    value: "Thailand",
    label: "Thailand",
  },
  {
    value: "Togo",
    label: "Togo",
  },
  {
    value: "Tunisia",
    label: "Tunisia",
  },
  {
    value: "Turkey",
    label: "Turkey",
  },
  {
    value: "Turkmenistan",
    label: "Turkmenistan",
  },
  {
    value: "Uganda",
    label: "Uganda",
  },
  {
    value: "Ukraine",
    label: "Ukraine",
  },
  {
    value: "United Arab Emirates",
    label: "United Arab Emirates",
  },
  {
    value: "Uruguay",
    label: "Uruguay",
  },
  {
    value: "Uzbekistan",
    label: "Uzbekistan",
  },
  {
    value: "Venezuela",
    label: "Venezuela",
  },
  {
    value: "Yemen",
    label: "Yemen",
  },
  {
    value: "Zaire",
    label: "Zaire",
  },
  {
    value: "Zambia",
    label: "Zambia",
  },
  {
    value: "Zimbabwe",
    label: "Zimbabwe",
  },
];

export const headsetsVariants = [
  {
    value: "HTC Vive/Vive Pro",
    label: "HTC Vive/Vive Pro",
  },
  {
    value: "HTC Vive Pro Eye",
    label: "HTC Vive Pro Eye",
  },
  {
    value: "Oculus Rift/Rift S",
    label: "Oculus Rift/Rift S",
  },
  {
    value: "Oculus Quest",
    label: "Oculus Quest",
  },
  {
    value: "Oculus Quest + Link",
    label: "Oculus Quest + Link",
  },
  {
    value: "Valve Index",
    label: "Valve Index",
  },
  {
    value: "Pico Neo 2",
    label: "Pico Neo 2",
  },
  {
    value: "Pico Neo 2 Eye",
    label: "Pico Neo 2 Eye",
  },
  {
    value: "Pimax",
    label: "Pimax",
  },
];

export const professionsList = [
  {
    value: "Accounting",
    label: "Accounting",
  },
  {
    value: "Administration & Office Support",
    label: "Administration & Office Support",
  },
  {
    value: "Advertising, Arts & Media",
    label: "Advertising, Arts & Media",
  },
  {
    value: "Banking & Financial Services",
    label: "Banking & Financial Services",
  },
  {
    value: "Call Centre & Customer Service",
    label: "Call Centre & Customer Service",
  },
  {
    value: "Community Services & Development",
    label: "Community Services & Development",
  },
  {
    value: "Construction",
    label: "Construction",
  },
  {
    value: "Consulting & Strategy",
    label: "Consulting & Strategy",
  },
  {
    value: "Design & Architecture",
    label: "Design & Architecture",
  },
  {
    value: "Education and Training",
    label: "Education and Training",
  },
  {
    value: "Engineering",
    label: "Engineering",
  },
  {
    value: "Entrepreneur",
    label: "Entrepreneur",
  },
  {
    value: "Farming, Animals & Conservation",
    label: "Farming, Animals & Conservation",
  },
  {
    value: "Government & Defence",
    label: "Government & Defence",
  },
  {
    value: "Healthcare & Medical",
    label: "Healthcare & Medical",
  },
  {
    value: "Hospitality & Tourism",
    label: "Hospitality & Tourism",
  },
  {
    value: "Human Resources & Recruitment",
    label: "Human Resources & Recruitment",
  },
  {
    value: "Information & Communication Technology",
    label: "Information & Communication Technology",
  },
  {
    value: "Insurance & Superannuation",
    label: "Insurance & Superannuation",
  },
  {
    value: "Legal",
    label: "Legal",
  },
  {
    value: "Manufacturing, Transport & Logistics",
    label: "Manufacturing, Transport & Logistics",
  },
  {
    value: "Marketing & Communications",
    label: "Marketing & Communications",
  },
  {
    value: "Mining, Resources & Energy",
    label: "Mining, Resources & Energy",
  },
  {
    value: "Real Estate & Property",
    label: "Real Estate & Property",
  },
  {
    value: "Retail & Consumer Products",
    label: "Retail & Consumer Products",
  },
  {
    value: "Sales",
    label: "Sales",
  },
  {
    value: "Science & Technology",
    label: "Science & Technology",
  },
  {
    value: "Sport & Recreation",
    label: "Sport & Recreation",
  },
  {
    value: "Student",
    label: "Student",
  },
  {
    value: "Trades & Services ",
    label: "Trades & Services ",
  },
];
