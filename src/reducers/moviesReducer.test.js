import MoviesReducer from './moviesReducer';

const defaultState = {
    data: [],
    selectedMovie: {},
};

describe('Movies reducer', () => {
    it('should return the initial state', () => {
        expect(MoviesReducer(undefined, {})).toEqual(defaultState)
    })
});

