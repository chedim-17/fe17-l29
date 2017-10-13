import { choiceOfRole, CHOICE_ROLE } from './roleActions';

describe('choice of role', () => {
    it('should create an action to choice of role', () => {
        const value = 'admin';
        const expectedAction = {
            type: CHOICE_ROLE,
            payload: { value }
        };
        expect(choiceOfRole(value)).toEqual(expectedAction)
    })
});
