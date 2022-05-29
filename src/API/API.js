import axios from 'axios';

const instance = axios.create(
  {withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "0137a9c3-b3df-4987-9c03-d3e89a329241"}
  });
export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`)
      .then(response => response.data);
  },

  logIn(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
      .then(response => response.data);

  },

  logOut() {
    return instance.delete(`auth/login`)
  .then(response => response.data);
  }
};

export const userAPI = {
  requestUsers(CurrentPage = 1, PageSize = 4) {
    return instance.get(`users?page=${CurrentPage}&count=${PageSize}`)
      .then(response => response.data);
  },
  getUnfollow(id) {
    return instance.delete(`follow/${id}`)
      .then(response => response.data);
  },
  getFollow(id) {
    return instance.post(`follow/${id}`, {})
      .then(response => response.data);
  },
};

export const ProfileAPI = {
  getProfile(userID) {
    return instance.get(`/profile/${userID}`)
  },

  getStatus(userID) {
    return instance.get(`/profile/status/${userID}`)
  },
  updateStatus(status) {
    return instance.put(`/profile/status`, {status: status} )
  },
};
