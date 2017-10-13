import { filterChanged, FILTER_CHANGED } from './filterActions';

describe('filter changed', () => {
    it('should create an action to change filter', () => {
        const value = [{movie: 'movie1'}, {movie: 'movie2'}, {movie: 'movie3'}];
        const expectedAction = {
            type: FILTER_CHANGED,
            payload: { value }
        };
        expect(filterChanged(value)).toEqual(expectedAction)
    })
});