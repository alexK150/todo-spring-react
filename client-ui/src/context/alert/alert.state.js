import React, {useReducer} from 'react';

import {AlertContext} from './alert.context';
import {alertReducer} from './alert.reducer';
import actionType from './alert.types';

export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, {visible: false});

    const show = (text, type = 'warning') => {
        dispatch({
            type: actionType.SHOW_ALERT,
            payload: {text, type}
        })
    };

    const hide = () => dispatch({type: actionType.HIDE_ALERT});

    return (
        <AlertContext.Provider value={{
            show, hide,
            alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
};