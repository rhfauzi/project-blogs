import axios from "axios";
import history from "../history";
const OWN_API = process.env.REACT_APP_OWN_API;

export const GET_USERS = "GET_USERS";
export const ADD_USERS = "ADD_USERS";

export const SET_LOGIN = "SET_LOGIN";
export const SET_LOGOUT = "SET_LOGOUT";

export const showData = data => {
  return {
    type: GET_USERS,
    payload: data
  };
};

export const addData = data => {
  return {
    type: ADD_USERS,
    payload: data
  };
};

export const fetchData = () => dispatch => {
  const token = localStorage.getItem("token");
  return axios
    .get(`${OWN_API}/users`, { headers: { authorization: `Bearer ${token}` } })
    .then(res => {
      dispatch(showData(res.data));
    });
};

export const postRegister = (data, history) => dispatch => {
  return axios.post(`${OWN_API}/users/register`, data).then(res => {
    if (res.status === 200) {
      history.push("/login");
    }
  });
};

// login
export const isLogin = data => {
  return {
    type: SET_LOGIN,
    payload: data
  };
};

export const setLogin = data => {
  return {
    type: SET_LOGIN,
    payload: data
  };
};

export const login = data => dispatch => {
  return axios.post(`${OWN_API}/users/login`, data).then(res => {
    if (res.status === 200) {
      // localStorage.setItem("isLogin", true);
      // localStorage.setItem("status", true);
      localStorage.setItem("token", res.data.token);
      dispatch(isLogin(data));

      history.push("/blog-users");
      window.location.reload();
    } else {
      alert("Email or Password is wrong.");
    }
  });
};

// login

// logout
export const logout = () => {
  return {
    type: SET_LOGOUT
  };
};
// logout
