import {combineReducers} from 'redux';
import {reducer} from 'redux-form';

import rentReducer from './itemsReducer';
import userReducer from './userReducer'
import authReducer from './authReducer'
import cartReducer from './cartReducer';

export default combineReducers({
    auth:authReducer,
    form:reducer,
    user:userReducer,
    items:rentReducer,
    cart:cartReducer
});