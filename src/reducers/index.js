import {combineReducers} from 'redux';
import  product from '../reducers/product/';
import edit from '../reducers/edit/';

export default combineReducers({
    product,
    edit
});

