import AlertActionTypes from './alert.types';

const handlers = {
    [AlertActionTypes.SHOW_ALERT]: (state, {payload}) => ({...payload, visible: true}),
    [AlertActionTypes.HIDE_ALERT]: state => ({...state, visible: false}),
    DEFAULT: state => state
};

export const alertReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
};