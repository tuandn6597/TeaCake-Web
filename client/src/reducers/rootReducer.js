import {combineReducers} from 'redux';
import typeProductReducer from './typeProductReducer';
import cart from './cart';
import billReducer from './billReducer';
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
export default combineReducers({
    auth: authReducer,
    types:typeProductReducer,
    cart:cart,
    bill:billReducer,
    errors: errorReducer
});