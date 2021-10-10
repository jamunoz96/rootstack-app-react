import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducer, 
    compose(composeWithDevTools(applyMiddleware(thunk))));