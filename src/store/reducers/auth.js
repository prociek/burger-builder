import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  id: null,
  loading: false,
  error: null,
  redirectPath: "/"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        token: action.token,
        id: action.id
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case actionTypes.LOGOUT_SUCCEED:
      return {
        ...state,
        token: null,
        id: null
      };
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return {
        ...state,
        redirectPath: action.path
      };
    default:
      return state;
  }
};

export default reducer;
