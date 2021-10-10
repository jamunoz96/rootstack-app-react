import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import jobReducer from './jobs/jobReducer';

const rootReducer = combineReducers({ 
    auth: authReducer,
    job: jobReducer,
})

export default rootReducer;