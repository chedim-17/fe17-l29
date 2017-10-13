import roleReducer from './roleReducer';

const defaultState = { role: '' };

describe('Role reducer', () => {
    it('should return the initial state', () => {
        expect(roleReducer(undefined, {})).toEqual(defaultState)
    })
});
