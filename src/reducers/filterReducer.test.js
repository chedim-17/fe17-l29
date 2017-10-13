import filterReducer from './filterReducer';

const defaultState = { data: [] };

describe('Filter reducer', () => {
    it('should return the initial state', () => {
        expect(filterReducer(undefined, {})).toEqual(defaultState)
    })
});
