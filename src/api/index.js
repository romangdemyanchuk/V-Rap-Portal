/*eslint-disable*/
import * as axios from "axios";


const baseURL = "https://test-for-roman.herokuapp.com/";

const instance = axios.create({ baseURL });

let token = localStorage.getItem("userLoginToken");

const instanceWithToken = () =>
  axios.create({
    baseURL,
    headers: {
      Authorization: localStorage.getItem("userLoginToken"),
    },
  });
console.log('TOKEN', token)

export const RegisterApi = (regData) => {
  return instance.post(`api/auth/register`, regData);
};

export const AddUser = (data) => {
  const {login, password} = data.values;
  return instance.post(`/api/users/adduser`, { type: 0, login: login, password: password});
};

export const LoginApi = (loginData) => {
  return instance.post(`api/auth/login`, loginData);
};

export const EditUserInfoApi = (data) => {
  return instanceWithToken().post(`api/users/useredit`, data);
};

export const EditPartApi = (data) => {
  return instanceWithToken().post(`api/users/useredit`, data);
};

export const UserInfoApi = () => {
  return instanceWithToken().post(`api/users/user`, {});
};

export const PartInfoApi = () => {
  return instanceWithToken().post(`api/users/user`, {});
};

export const AddCaseApi  = (data) => {
  return instanceWithToken().post(`api/case/add`, data)
};

export const AddCaseFiles = (id) => {
  const formData = new FormData()
  const selectedFile = document.getElementById('basic_avatarUrl').files[0];
  const selectedFileVr = document.getElementById('basic_inputVrFile').files[0];
  formData.append('avatarUrl', selectedFile)
  formData.append('project', selectedFileVr)
  formData.append('id', id)
  return instanceWithToken().post(`api/case/upload`, formData)
}

export const DeleteCaseApi = (id) => {
  return instanceWithToken().delete(`api/case/delete`, { data: { id: id } });
};

export const DeleteResearcherUser = (id) => {
  return instanceWithToken().delete(`api/users/delete`, { data: { id: id } });
};

export const AllCasesApi = () => {
  return instance.get(`api/case/cases`, { headers: {
    Authorization: localStorage.getItem("userLoginToken")
  } });
};

export const ChangePasswordApi = (password) => {
  return instance.post(`api/users/changepassword`, { password: password });
};

export const ChangingStatus = (id) => {
  return instanceWithToken().post(`api/case/status`, { status: 3, id: id });
};

export const EditCaseApi = (data) => {
  return instanceWithToken().post(`api/case/edit`, data);
};

export const FiltredCaseApi = () => {
  return instanceWithToken().get(`api/users/cases`);
};

export const getAllUsers = () => {
  return instanceWithToken().get(`api/users/users`);
};

export const getResearchers = () => {
  return instanceWithToken().get(`api/users/researchers`);
};

export const DownloadCaseStudy = (id) => {
  return instanceWithToken().post(`api/case/download`, { id });
}

export const CaseResult = () => {
  return instanceWithToken().post(`api/case/result`);
};

export const CaseDownload = (data) => {
  return instanceWithToken().post(`api/case/download`, {data});
};

export const UploadResults = () => {
  const formData = new FormData();
  const selectedFile = document.getElementById('uploads').files[0];
  formData.append("uploads", selectedFile);
  return instanceWithToken().post(`api/users/results`, formData);
};

