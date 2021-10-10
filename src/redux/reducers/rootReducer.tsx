import { combineReducers } from 'redux';
import authReducer from './authReducer';
import jobReducer from './jobReducer';
import mapReducer from './mapReducer';

const rootReducer = combineReducers({ 
    auth: authReducer,
    job: jobReducer,
    map: mapReducer,
})

export default rootReducer;