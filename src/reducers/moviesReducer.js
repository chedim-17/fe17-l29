import { FETCH_MOVIES, ADD_MOVIE, SELECTED_MOVIE } from '../actions/movieActions';

const defaultState = {
    data: [],
    selectedMovie: {},
};

const MoviesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_MOVIES: {
            return {...state, data: action.payload.data}
        }

        case SELECTED_MOVIE: {
            return {...state, selectedMovie: action.payload.value}
        }

        case ADD_MOVIE: {
            return {...state, newMovie: action.payload.newMovie}
        }

        default:
            return state;
    }
};

export const getMovies = state => state.movies.data;
export const getSelectedMovie = state => state.movies.selectedMovie;

export default MoviesReducer;
