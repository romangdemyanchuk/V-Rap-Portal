/* eslint-disable */
import React, { useEffect, useState } from 'react'
import userImg from '../../../../../images/user.svg'
import { Button, Input, InputNumber, Slider, TreeSelect, Upload } from 'antd'
import { countryVariants, headsetsVariants, professionsList } from '../../../../../modules/session/data'
import {
  AllCasesInfo,
  EditCaseInfo,
} from '../../../../../modules/session/cases-reducer'
import Loader from '../../../../Loader/loader'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../header'
const { TextArea } = Input;
const { TreeNode } = TreeSelect;


const EditCase = ({ id }) => {
  const allCaseStudies = useSelector(state => state.allCaseStudies)
  let filteredCases = [];

  let dispatch = useDispatch()
  console.log('allCaseStudies', allCaseStudies);
  if (allCaseStudies) {
    filteredCases = allCaseStudies?.filter(item => {
      return item._id === id
    });
  }
  else {
    AllCasesInfo()(dispatch)
    const allCaseStudies = useSelector(state => state.allCaseStudies)
    console.log(allCaseStudies);
    filteredCases = allCaseStudies?.filter(item => {
      return item._id === id
    });
  }
  filteredCases = filteredCases.length ? filteredCases[0] : []
  const isLoading = useSelector(state => state.isLoading)


  const [title, setTitle] = useState(filteredCases.title);
  const [descr, setDescr] = useState(filteredCases.description);
  const [location, setLocation] = useState(filteredCases.location);
  const [age, setAge] = useState(filteredCases.age);
  const [avgIncome, setAvgIncome] = useState(filteredCases.income);
  const [parNum, setParNum] = useState(filteredCases.participant);
  const [headsets, setHeadsets] = useState(filteredCases.headset);
  const [professions, setProfessions] = useState(filteredCases.project);

  useEffect(() => {
    setTitle(filteredCases.title);
    setDescr(filteredCases.description);
    setLocation(filteredCases.location);
    setAge(filteredCases.age);
    setAvgIncome(filteredCases.income);
    setParNum(filteredCases.participant);
    setHeadsets(filteredCases.headset);
    setProfessions(filteredCases.project);
  }, [filteredCases.title, filteredCases.description, filteredCases.location,
  filteredCases.participant, filteredCases.headset, filteredCases.project])

  const resetFieldsValue = () => {
    setTitle('')
    setDescr('')
    setLocation('')
    setAge([10, 85])
    setAvgIncome([10, 85])
    setParNum('')
    setHeadsets('')
    setProfessions('')
  }
  const ageRangeChange = (value) => {
    setAge(value);
  }
  const avgRangeChange = (value) => {
    setAvgIncome(value)
  }
  const parNumberChange = (value) => {
    setParNum(value);
  }
  const cascaderHeadsetsChange = (value) => {
    setHeadsets(value);
  }
  const cascaderLocationChange = (value) => {
    setLocation(value);
  }
  const cascaderlistOfProfessionsChange = (value) => {
    setProfessions(value);
  }
  const headsetsChange = value => {
    setHeadsets(value)
  };
  const locationChange = value => {
    setLocation(value)
  };

  const uploadProps = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
  };
  return <>
    <div className="root-EditCase">
      <Header />
      <div className="personal-stats__wrapper">
        <div className="personal-stats__block">
          <div className="personal-stats__personal-heading">Create Research Studies</div>

          <div className="personal-stats__info-img">
            <img src={userImg} alt="userImg" />
            <div className="personal-stats__upload-btns">
              <Upload {...uploadProps}>
                <Button className="file-upload-btn" type="primary">
                  Upload Image
                </Button>
              </Upload>
            </div>
          </div>
          <div className="personal-stats__blocks-wrapper">
            <div className="personal-stats__left-block">
              <div className="personal-stats__vr-upload">
                <Upload {...uploadProps}>
                  <Button className="personal-stats__btn">
                    Upload VR File
                  </Button>
                </Upload>
              </div>
              {/*<Progress percent={30} size="small" />*/}
              <div className="personal-stats__fields-wrapper">
                <p>Title</p>
                <Input placeholder="Title"
                  onChange={e => setTitle(e.target.value)}
                  value={title}
                />
              </div>
              <div className="personal-stats__fields-wrapper">
                <p>Description</p>
                <TextArea placeholder="Type here" rows={3} className="personal-stats-area"
                  onChange={e => setDescr(e.target.value)}
                  value={descr}
                />
              </div>
              <div className="personal-stats__fields-wrapper">
                <p className="before-dropdown">Location</p>
                <TreeSelect
                  showSearch
                  style={{ width: '100%' }}
                  value={location}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  placeholder={filteredCases.location ? filteredCases.location : "--Location--"}
                  allowClear
                  multiple
                  treeDefaultExpandAll
                  onChange={locationChange}
                >
                  {countryVariants.map((item) =>
                    <TreeNode value={item.value} title={item.label} key={item.value} />
                  )}

                </TreeSelect>
              </div>
            </div>
            <div className="personal-stats__right-block">
              <div className="personal-stats__fields-wrapper">
                <p>Age(range)</p>
                <Slider range
                  onChange={ageRangeChange}
                  value={age}
                />
              </div>
              <div className="personal-stats__fields-wrapper">
                <p>Average Income</p>
                <Slider range
                  onChange={avgRangeChange}
                  value={avgIncome}
                />
              </div>
              <div className="personal-stats__fields-wrapper">
                <p>Required number of participants</p>
                <InputNumber min={1} max={300}
                  className="input-number"
                  onChange={parNumberChange}
                  value={parNum}
                />
                
              </div>
              <div className="personal-stats__fields-wrapper">
                <p className="before-dropdown">Supported Headsets</p>
                <TreeSelect
                  showSearch
                  style={{ width: '100%' }}
                  value={headsets}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  placeholder={filteredCases.headset ? filteredCases.headset : "--Headsets--"}
                  allowClear
                  multiple
                  treeDefaultExpandAll
                  onChange={cascaderHeadsetsChange}
                >
                  {headsetsVariants.map((item) =>
                    <TreeNode value={item.value} title={item.label} key={item.v} />
                  )}

                </TreeSelect>
              </div>
              <div className="personal-stats__fields-wrapper">
                <p className="before-dropdown">List of Professions</p>
                <TreeSelect
                  showSearch
                  style={{ width: '100%' }}
                  value={professions}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  placeholder={filteredCases.project ? filteredCases.project : "--Professions--"}
                  allowClear
                  multiple
                  treeDefaultExpandAll
                  onChange={cascaderlistOfProfessionsChange}
                >
                  {professionsList.map((item) =>
                    <TreeNode value={item.value} title={item.label} />
                  )}
                </TreeSelect>
              </div>
            </div>
          </div>
          <div className="personal-stats__footer-btns">
            <Button type="primary" className="personal-stats__create-research-btn"
              onClick={() => EditCaseInfo({
                id: id, title: title, description: descr, location: location,
                age: age, income: avgIncome, participant: parNum, headset: headsets, project: professions
              })(dispatch)}
            >
              {isLoading ? <Loader /> : 'Save Changes'}
            </Button>
            {/*<Link to={'/researcher-profile'}>*/}
            <Button onClick={resetFieldsValue}>Cancel</Button>
            {/*</Link>*/}
          </div>
        </div>
      </div>
    </div>
  </>
}

export default EditCase
