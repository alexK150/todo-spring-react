import ActionType from '../todo/todo.types';

const handlers = {
    [ActionType.SHOW_LOADER]: state => ({...state, isLoading: true}),
    [ActionType.ADD_TODO]: (state, {payload}) => ({
        ...state,
        notes: [...state.notes, payload]
    }),
    [ActionType.FETCH_TODO]: (state, {payload}) => ({...state, notes: payload, isLoading: false}),
    [ActionType.REMOVE_TODO]: (state, {payload}) => ({
        ...state,
        notes: state.notes.filter(note => note.id !== payload)
    }),
    DEFAULT: state => state
};

export const todoReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
};