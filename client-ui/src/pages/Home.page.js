import React, {useContext, useEffect} from 'react';

import {Form} from '../components/Form.component';
import {Todo} from '../components/Todo.component';
import {TodoContext} from '../context/todo/todo-context';
import {Loader} from '../components/Loader.component';

export const Home = () => {
    const {isLoading, todo, fetchTodo, removeTodo, ft} = useContext(TodoContext);

    useEffect(() => {
        fetchTodo()
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Form/>
            <hr/>
            {isLoading
                ? <Loader/>
                : <Todo todo={todo} removeTodo={removeTodo} ft={ft}/>
            }
        </>
    )
};