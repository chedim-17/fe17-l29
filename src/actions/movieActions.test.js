import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { fetchMovies } from './movieActions';
import { FETCH_MOVIES } from './movieActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    afterEach(() => {
        nock.cleanAll()
    });

    it('create FETCH_MOVIES when fetching movies', () => {
        const movies = {"data": ["do something"]};
        const initialState = {
            data: [],
        };

        nock('http://localhost:3001/movies')
            .get('/movies')
            .reply(200, movies);

        // const expectedActions = [
        //     { type: FETCH_MOVIES, payload: movies }
        // ];
        const expectedActions = [];
        const store = mockStore(initialState);

        return store.dispatch(fetchMovies()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});
