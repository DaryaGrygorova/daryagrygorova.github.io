import { authAPI } from '../../API/API';

const IS_SUBMIT_ERROR = 'AUTH/IS_SUBMIT_ERROR';
const SET_USER_DATA = 'AUTH/SET_USER_DATA';

let initialState = {
  UserID: null,
  email: null,
  login: null,
  isAuth: false,
  errorStatus: false,
  errorMessage: '',
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        UserID: action.UserID,
        email: action.email,
        login: action.login,
        isAuth: action.isAuth,
      };
    }

    case IS_SUBMIT_ERROR: {
      return {
        ...state,
        errorStatus: action.status,
        errorMessage: action.message
      }
    }
    default: return state;
  }}

export const setUserData = (UserID, email, login, isAuth) =>({type: SET_USER_DATA, UserID, email, login, isAuth});
export const isSubmitError = (status, message) => ({type: IS_SUBMIT_ERROR, status, message})
export const getAuthThunkCreator = () => {
  return async (dispatch) => {
    let response = await authAPI.getAuth();
    if (response.resultCode === 0) {
      let { id, email, login } = response.data
      dispatch(setUserData(id, email, login, true));
    };
  };
};

export const logInThunkCreator = (email, password, rememberMe) => {
  return async (dispatch) => {
    let response = await authAPI.logIn(email, password, rememberMe);
       if (response.resultCode === 0) {
          dispatch(getAuthThunkCreator());
          dispatch(isSubmitError(false, ''))
        } else {
          let message = (response.messages ?? "Something went wrong, please try again later...")
          dispatch(isSubmitError(true, message))
        };
  };
};

export const logOutThunkCreator = () => {
  return async (dispatch) => {
    let response = await authAPI.logOut()

        if (response.resultCode === 0) {
          dispatch(setUserData(null, null, null, false));
        };
  };
};

export default AuthReducer;

