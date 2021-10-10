import AuthStore from "../types/AuthStore.type";

export const LOADING = 'auth/LOADING';
export const LOGIN = 'auth/LOGIN';
export const LOGOUT = 'auth/LOGOUT';
export const GET_USER = 'auth/GET_USER';
export const REQUEST_ERROR = 'auth/REQUEST_ERROR';

const token : string | null = localStorage.getItem("auth_token") || null;
const getUser = () : object | null => {
  const user : string | null = localStorage.getItem("auth_user");
  if(user) return JSON.parse(user);
  else return null;
};

const initialState : AuthStore = {
  user: getUser(),
  token: token,
  isAuthed: token ? true : false,
  errorMessage: null,
  isLoading: false
};

const AuthReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      }
    case LOGIN:
      localStorage.setItem("auth_token", action.payload.token);
        return {
          ...state,
          isAuthed: true,
          token: action.payload.token,
          user: null,
          errorMessage: null,
          isLoading: false
        };
    case GET_USER:
      localStorage.setItem("auth_user", JSON.stringify(action.payload.user));
      return {
        ...state,
        user: action.payload.user,
        isLoading: false
      };
    case LOGOUT:
      localStorage.removeItem("auth_token");
      localStorage.removeItem("auth_user");
      return {
        ...state,
        isAuthed: false,
        token: null,
        user: null,
        errorMessage: null,
        isLoading: false
      };
    case REQUEST_ERROR:
      return {
        ...state,
        errorMessage: action.payload.error,
        isLoading: false
      };
    default:
      return state;
  }
};

export default AuthReducer;
