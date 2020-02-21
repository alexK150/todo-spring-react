import React, {useContext} from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group";

import {AlertContext} from "../context/alert/alert.context";

export const Todo = (props) => {

    const alert = useContext(AlertContext);

    return (
        <TransitionGroup component='ul' className="list-group">
            {props.todo.map(todo => (
                <CSSTransition
                    key={todo.id}
                    classNames='todo'
                    timeout={800}
                >
                    <li className="list-group-item note">
                        <div>
                            <strong>{todo.title}</strong>
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => props.removeTodo(todo.id) && alert.show('Note was removed!', 'danger')}
                        >Delete
                        </button>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
};