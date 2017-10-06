import { combineReducers } from 'redux';
import filter from './filterReducer';
import movies from './moviesReducer';
import role from './roleReducer';

export default combineReducers({
    filter,
    movies,
    role
})