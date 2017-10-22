export const CHOICE_ROLE = 'CHOICE_ROLE';

export const choiceOfRole = (value) => {
    return {
        type: CHOICE_ROLE,
        payload: { value }
    }
};
