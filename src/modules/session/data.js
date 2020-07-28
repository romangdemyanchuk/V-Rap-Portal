/*eslint-disable*/
import React from "react";

export const allData = {
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
};
export const caseStudiesColumns = (modalsOpen) => ({
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
      render: (text) => <a onClick={() => modalsOpen(true)}>{text}</a>,
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
      render: (text) => <a onClick={() => modalsOpen(true)}>{text}</a>,
    },
  ],
});

export const researcherListColumns = (modalsOpen) => ({
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

      render: (text) => <a onClick={() => modalsOpen(true)}>{text}</a>,
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
