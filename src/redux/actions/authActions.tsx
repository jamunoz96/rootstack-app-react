import { apiGetUser, apiLogin } from '../../services/auth/auth';
import { GET_USER, LOADING, LOGIN, LOGOUT, REQUEST_ERROR } from '../reducers/authReducer';

const _LOGIN = (token: string ) => ({
    type: LOGIN,
    payload: {
        token
    }
});

const _USER = (user: object ) => ({
    type: GET_USER,
    payload: {
        user
    }
});

const _LOGOUT = () => ({
    type: LOGOUT
});

const _LOADING = () => ({
    type: LOADING
});

const _REQUEST_ERROR = (error: any) => ({
    type: REQUEST_ERROR,
    payload: {
        error
    }
});

export const loginAction = (email: string, password: string) => (dispatch: any) => {
    dispatch(_LOADING());
    apiLogin({ email, password })
        .then(res => dispatch(_LOGIN(res.data.access_token)))
        .catch(error => dispatch(_REQUEST_ERROR(error)));
};

export const getUserAction = () => (dispatch: any, getState: any) => {
    const { user } = getState().auth;
    if(!user){
        dispatch(_LOADING());
        apiGetUser()
            .then(res => dispatch(_USER(res.data)))
            .catch(error => dispatch(_REQUEST_ERROR(error)));
      
    } 
};

export const logoutAction = () => (dispatch: any) => {
    dispatch(_LOGOUT());
};