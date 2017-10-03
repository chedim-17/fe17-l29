import { combineReducers } from 'redux';
import filter from './filterReducer';
import movies from './moviesReducer';

export default combineReducers({
    filter,
    movies
})