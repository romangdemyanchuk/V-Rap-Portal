/*eslint-disable*/
import * as axios from "axios";


const baseURL = "https://varapan.herokuapp.com/";

const instance = axios.create({
  baseURL,
});

let token = localStorage.getItem("userLoginToken");
console.log(token);

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
  return instanceWithToken().post(`api/users/user`, {});
};

export const AddCaseApi = (data) => {
  const formData = new FormData();
  formData.append("avatarUrl", data);
  return instanceWithToken().post(`api/case/add`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
  );
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
  return instanceWithToken().delete(`/api/users/delete`, {
    headers: { token },
    data: { id: id },
  });
};

export const UploadResults = (file) => {
  const formData = new FormData();
  formData.append("avatarUrl", file);
  return instanceWithToken().post(`/api/users/results`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
