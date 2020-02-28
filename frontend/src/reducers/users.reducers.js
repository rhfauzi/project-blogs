const token = localStorage.getItem("token");
const initialState = {
  data: [],
  user: [],
  isLogin: token ? true : false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        data: action.payload
      };
    case "ADD_USERS":
      return {
        ...state,
        data: state.data.concat(action.payload)
      };
    case "SET_LOGIN":
      return {
        ...state,
        isLogin: true
      };
    case "LOGGED_OUT":
      return {
        ...state,
        isLogin: false
      };

    default:
      return state || [];
  }
};

export default reducer;
