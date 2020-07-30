/*eslint-disable*/
import * as axios from "axios";


const baseURL = "https://varapan.herokuapp.com/";

const instance = axios.create({
  baseURL,
});

const token = localStorage.getItem("userLoginToken");

const instanceWithToken = () =>
  axios.create({
    baseURL,
    headers: {
      Authorization: token,
    },
  });

export const RegisterApi = (regData) => {
  return instance.post(`api/auth/register`, regData);
};

export const LoginApi = (loginData) => {
  return instance.post(`api/auth/login`, loginData);
};


export const EditUserInfoApi = (data) => {
  return instanceWithToken().post(`api/users/useredit`, data);
};

export const UserInfoApi = (token) => {
  return instanceWithToken(token).post(`api/users/user`, {});
};

export const PartInfoApi = () => {
  return instanceWithToken(token).post(`api/users/user`, {});
};

export const DeleteCaseApi = (id) => {
  return instanceWithToken().delete(`api/case/delete`, { data: { id: id } });
};

export const AllCasesApi = () => {
  return instance.get(`/api/case/cases`, { headers: { Authorization: token } });
};

export const ChangePasswordApi = (password) => {
  console.log(password);
  return instance.post(`/api/users/changepassword`, { password: password });
};

export const ChangingStatus = (id) => {
  return instanceWithToken().post(`/api/case/status`, { status: "3", id: id });
};

export const EditCaseApi = (data) => {
  return instanceWithToken().post(`api/case/edit`, data);
};

export const EditPartApi = (data) => {
  return instanceWithToken().post(`api/users/useredit`, data);
};

export const ChangingStatusAdmin = (id) => {
  return instanceWithToken().post(`/api/case/status`, { status: "2", id: id });
};

export const getAllUsers = (token) => {
  return instanceWithToken().get(`/api/users/users`, { headers: { token } });
};

export const deleteResearcher = (id) => {
  console.log(id)
  return instanceWithToken().delete(`/api/users/delete`, {
    headers: { token },
    data: { id: id },
  });
};

export const AddCaseApi = (data) => {
  debugger
  const formData = new FormData()

  const selectedFile = document.getElementById('basic_avatarUrl').files[0];
  const selectedFileVr = document.getElementById('basic_inputVrFile').files[0];
  formData.append('avatarUrl', selectedFile)
  formData.append('project', selectedFileVr)
  
  for(const key in data){ // змінити 
    formData.append(key, data[key])
  }

  return instanceWithToken().post(`api/case/add`, formData ,
  );
};