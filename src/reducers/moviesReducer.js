import { ADD_MOVIES, CREATE_MOVIE, SELECTED_MOVIE, INDICATOR_CREATE_MOVIE } from '../actions/actions';

const defaultState = {
    data: [],
    newMovie: false,
    selectedMovie: {},
    selectByLikes: 'likes',
    selectByRating: 'rating'
};

const MoviesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MOVIES: {
            return {...state, data: action.payload.data}
        }

        case SELECTED_MOVIE: {
            return {...state, selectedMovie: action.payload.value}
        }

        case CREATE_MOVIE: {
            return {...state, newMovie: action.payload.newMovie}
        }

        case INDICATOR_CREATE_MOVIE: {
            return {...state, newMovie: action.payload.value}
        }

        default:
            return state;
    }
};

export const getMovies = state => state.movies.data;
export const getNewMovie = state => state.movies.newMovie;
export const getSelectedMovie = state => state.movies.selectedMovie;

export default MoviesReducer;
