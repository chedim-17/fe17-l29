import { FILTER_CHANGED } from '../actions/filterActions';

const defaultState = {field: '', order: ''};

export default (state = defaultState, action) => {
    switch (action.type) {
        case FILTER_CHANGED: {
            return {...state, ...action.payload}
        }

        default:
            return state;
    }
}

export const getFilterList = state => state.filter.value;