const initialState = {
  // dataBlog: [],
  detail: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BLOG":
      return action.payload;

    case "SET_BLOG_USERS":
      return action.payload;

    case "SET_DETAIL":
      return {
        detail: action.payload
      };

    default:
      return state || [];
  }
};

export default reducer;
