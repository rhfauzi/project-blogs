import axios from "axios";
import jwt from "jwt-decode";
import history from "../history";

const OWN_API = process.env.REACT_APP_OWN_API;

export const SET_BLOG = "SET_BLOG";
export const SET_DETAIL = "SET_DETAIL";
export const SET_BLOG_USERS = "SET_BLOG_USERS";

export const setDetail = data => {
  return {
    type: SET_DETAIL,
    payload: data
  };
};
export const getDetail = id => dispatch => {
  const token = localStorage.getItem("token");
  return axios
    .get(`${OWN_API}/blogs/id/${id}`, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(res => {
      console.log(res, "res");
      dispatch(setDetail(res.data.data));
    });
};

export const setBlog = data => {
  return {
    type: SET_BLOG,
    payload: data
  };
};

export const getBlog = () => dispatch => {
  return axios
    .get(`${OWN_API}/blogs`)
    .then(res => {
      dispatch(setBlog(res.data.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export const setBlogUsers = data => {
  return {
    type: SET_BLOG_USERS,
    payload: data
  };
};
export const getBlogUsers = () => dispatch => {
  const token = localStorage.getItem("token");
  const dekode = jwt(token);
  return axios
    .get(`${OWN_API}/blogs/${dekode._id}`, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(res => {
      dispatch(setBlogUsers(res.data.data));
    });
};

export const inputBlog = (data, history) => dispatch => {
  const token = localStorage.getItem("token");
  const dekode = jwt(token);

  return axios
    .post(`${OWN_API}/blogs/id/${dekode._id}`, data, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(res => {
      if (res.status === 200) {
        alert("Blog has been Add.");
        history.push("/blog-users");
      } else {
        alert("Blog Failed Add.");
      }
    });
};

export const inputFilestack = (data, history) => dispatch => {
  const token = localStorage.getItem("token");
  const dekode = jwt(token);

  return axios
    .post(`${OWN_API}/blogs/filestack/${dekode._id}`, data, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(res => {
      if (res.status === 200) {
        history.push("/blog-users");
      }
    });
};

export const editBlog = (data, id) => dispatch => {
  const token = localStorage.getItem("token");
  return axios
    .put(`${OWN_API}/blogs/id/${id}`, data, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(res => {
      if (res.status === 200) {
        history.push(`/edit-blog/${id}`);
        window.location.reload();
      } else {
        console.log("Ada yang error");
      }
    });
};

export const deleteBlog = id => dispatch => {
  const token = localStorage.getItem("token");
  return axios
    .delete(`${OWN_API}/blogs/id/${id}`, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(res => {
      // dispatch(getBlog());
      alert("Blog has been deleted.");
      history.push("/blog-users");
      // window.location.reload();
    });
};

export const inputFinalProject = (data, history) => dispatch => {
  console.log(data, "dataaaaaaaaaaaa");
  return axios.post(`${OWN_API}/project/filestack/`, data).then(res => {
    if (res.status === 200) {
      console.log(res, "resssssssssss");
      // history.push("/blog-users");
    }
  });
};
