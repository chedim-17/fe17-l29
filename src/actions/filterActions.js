export const FILTER_CHANGED = 'FILTER_CHANGED';

export const filterChanged = (value) => {
    return {
        type: FILTER_CHANGED,
        payload: { value }
    }
};
