import React, {useReducer} from 'react';
import axios from 'axios';

import {TodoContext} from './todo-context';
import {todoReducer} from './todo.reducer';
import ActionType from '../alert/alert.types';

const url = "http://localhost:8080";

export const TodoState = ({children}) => {

    const initialState = {
        id: null,
        todo: [],
        isDone: false,
        isLoading: false
    };
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const showLoader = () => dispatch({type: ActionType.SHOW_LOADER});

    const fetchTodo = async () => {

        showLoader();
        const res = await axios.get(`${url}/todo`);

        const payload = Object.keys(res.data || []).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        });
        dispatch({type: ActionType.FETCH_TODO, payload})
    };

    const addTodo = async todoText => {
        const text = {
            todoText,
        };

        try {
            const res = await axios.post(`${url}/add`, text);
            const payload = {
                ...text,
                id: res.data.name
            };
            dispatch({type: ActionType.ADD_TODO, payload})

        } catch (e) {
            throw new Error(e.message)
        }
    };

    const removeTodo = async id => {

        await axios.delete(`${url}/todo/${id}`);

        dispatch({
            type: ActionType.REMOVE_TODO,
            payload: id
        });
    };

    return (
        <TodoContext.Provider value={{
            showLoader, addTodo, removeTodo, fetchTodo,
            isLoading: state.isLoading,
            todo: state.todo
        }}>
            {children}
        </TodoContext.Provider>
    )
};