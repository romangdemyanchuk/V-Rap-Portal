/* eslint-disable */
import React, { useEffect, useState } from 'react'
import userImg from '../../../../../images/user.svg'
import { Link } from 'react-router-dom'
import { Button, Cascader, Input, InputNumber, Slider, Upload } from 'antd'
import { countryVariants, headsetsVariants, professionsList } from '../../../../../modules/session/data'
import {
  ApiAllCasesInfo,
  ApiEditCaseInfo,
} from '../../../../../modules/session/session-reducers'
import Loader from '../../../../Loader/loader'
import { useDispatch, useSelector } from 'react-redux'
const { TextArea } = Input;


const EditCase = ({id}) => {
  const allCaseStudies = useSelector(state => state.allCaseStudies)

  let dispatch = useDispatch()
  console.log('allCaseStudies', allCaseStudies);
  if (allCaseStudies) {
    filteredCases = allCaseStudies?.filter(item => {
      return item._id === id
    } );
  }
  else {
    ApiAllCasesInfo() (dispatch)
    const allCaseStudies = useSelector(state => state.allCaseStudies)
    console.log(allCaseStudies);
    filteredCases = allCaseStudies?.filter(item => {
      return item._id === id
    } );
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
  const [listOfProfessions, setListOfProfessions] = useState(filteredCases.project);

  useEffect(() => {
    console.log('useEffect')
    setTitle(filteredCases.title);
    setDescr(filteredCases.description);
    setLocation(filteredCases.location);
    setAge(filteredCases.age);
    setAvgIncome(filteredCases.income);
    setParNum(filteredCases.participant);
    setHeadsets(filteredCases.headset);
    setListOfProfessions(filteredCases.project);
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
    setListOfProfessions('')
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
    setListOfProfessions(value);
  }

  const uploadProps = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
  };
  return <>
    <div className="root-EditCase">
      <div className="personal-stats__tns-wrapper">
        <Link to={'/researcher-profile'}>
          <Button className="profile-btn">Profile</Button>
        </Link>
        <Link to={'/researcher-studies'}>
          <Button className="research-btn active">Research Studies</Button>
        </Link>
      </div>
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
                <Cascader options={countryVariants} placeholder={filteredCases.location ? filteredCases.location : "--Location--"}
                          onChange={cascaderLocationChange}
                />
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
                <p>Required number of participant</p>
                <InputNumber min={1} max={300}
                             className="input-number"
                             onChange={parNumberChange}
                             value={parNum}
                />
              </div>
              <div className="personal-stats__fields-wrapper">
                <p className="before-dropdown">Supported Headsets</p>
                <Cascader options={headsetsVariants} placeholder={filteredCases.headset ? filteredCases.headset: "--Headsets--"}
                          onChange={cascaderHeadsetsChange}
                />
              </div>
              <div className="personal-stats__fields-wrapper">
                <p className="before-dropdown">List of Professions</p>
                <Cascader options={professionsList} placeholder={filteredCases.project ? filteredCases.project : "--Professions--"}
                          onChange={cascaderlistOfProfessionsChange}
                           style={{}}
                />
              </div>
            </div>
          </div>
          <div className="personal-stats__footer-btns">
            <Button type="primary" className="personal-stats__create-research-btn"
                    onClick={() => ApiEditCaseInfo({
                      id: id,title: title, description: descr, location: location,
                      age: age, income: avgIncome, participant: parNum, headset: headsets, listOfProfessions: listOfProfessions
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
