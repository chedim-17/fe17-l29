import { ADD_MOVIES } from '../actions/actions';

const defaultState = {
    data: [],
    selectByLikes: 'likes',
    selectByRating: 'rating'
};

const MoviesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MOVIES: {
            return {...state, data: action.payload}
        }

        default:
            return state;
    }
};

export const getMovies = state => state.movies.data;

export default MoviesReducer;
