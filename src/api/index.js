/*eslint-disable*/
import * as axios from "axios";


const baseURL = "https://test-for-roman.herokuapp.com/";


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
  return instanceWithToken().get(`/api/case/cases`);
}

export const FiltredCaseApi = () => {
  return instanceWithToken().get(`/api/users/cases`);
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
  return instanceWithToken().post(`api/case/add`, data ,
  )

}

export const AddCaseFiles = (id) => {
  const formData = new FormData()

  const selectedFile = document.getElementById('basic_avatarUrl').files[0];
  const selectedFileVr = document.getElementById('basic_inputVrFile').files[0];
  formData.append('avatarUrl', selectedFile)
  formData.append('project', selectedFileVr)
  formData.append('id', id)

  return instanceWithToken().post(`/api/case/upload`, formData ,
  )
}

// downloadCaseStudy
export const DownloadCaseStudy = (id) => {
  return instanceWithToken().post(`/api/case/download`, {id});
};
