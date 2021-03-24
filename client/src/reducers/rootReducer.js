const getLoginState = localStorage.getItem("login-state")

  ? JSON.parse(localStorage.getItem("login-state"))
  : {};

const initialState = {
  isLogin: getLoginState.isLogin || false,
  loggedInUser: getLoginState.loggedInUser || {},
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN": {
      localStorage.setItem(
        "login-state",
        JSON.stringify({
          ...state,
          isLogin: true,
          loggedInUser: action.payload,
        })
      );

      return {
        ...state,
        isLogin: true,
        loggedInUser: action.payload,
      };
    }
    case "ADMIN_LOGOUT": {
      localStorage.setItem(
        "login-state",
        JSON.stringify({
          ...state,
          isLogin: false,
          loggedInUser: {},
        })
      );

      return {
        ...state,
        isLogin: false,
        loggedInUser: {},
      };
    }
    default: {
      return state;
    }
  }
};
