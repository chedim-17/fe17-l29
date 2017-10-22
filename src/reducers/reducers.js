import { combineReducers } from 'redux';
import filter from '../modules/filter/filterReducer';
import movies from '../modules/movie-selected/moviesReducer';
import role from '../modules/header/roleReducer';

export default combineReducers({
    filter,
    movies,
    role
})