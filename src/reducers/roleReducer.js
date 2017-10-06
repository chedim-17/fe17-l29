import { CHOICE_ROLE } from '../actions/actions';

const defaultState = {role: ''};

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHOICE_ROLE: {
            return {...state, ...action.payload}
        }

        default:
            return state;
    }
}

export const getChoiceRole = state => state.role.value;
