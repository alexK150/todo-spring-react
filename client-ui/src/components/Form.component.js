import React, {useState, useContext} from 'react';

import {AlertContext} from '../context/alert/alert.context';
import {TodoContext} from '../context/todo/todo-context';

export const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const todo = useContext(TodoContext);

    const submitHandler = e => {
        e.preventDefault();
        if (value.trim()) {
            todo.addTodo(value.trim()).then(() => {
                alert.show('Note was created!', 'success');
            }).catch(() => {
                alert.show('Something wrong with your note', 'danger')
            });
            setValue('');
        } else {
            alert.show('Write some note', 'danger')
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Type next task...'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
};